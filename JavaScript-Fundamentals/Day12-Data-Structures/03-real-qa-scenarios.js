// ============================================
// REAL QA AUTOMATION SCENARIOS
// ============================================

console.log("=== Real QA Automation Scenarios ===\n");

// ============================================
// Scenario 1: Process API Test Results
// ============================================

console.log("=== Scenario 1: Process API Test Results ===\n");

// Sample test execution results (like from a test run)
const testRun = {
    runId: "TR-2026-001",
    startTime: "2026-02-21T10:00:00Z",
    endTime: "2026-02-21T10:05:30Z",
    tests: [
        { id: 1, name: "GET /users", status: "PASS", duration: 120, assertions: 5 },
        { id: 2, name: "POST /users", status: "PASS", duration: 250, assertions: 8 },
        { id: 3, name: "PUT /users/1", status: "FAIL", duration: 180, assertions: 6 },
        { id: 4, name: "DELETE /users/1", status: "PASS", duration: 95, assertions: 4 },
        { id: 5, name: "GET /posts", status: "PASS", duration: 140, assertions: 7 },
        { id: 6, name: "POST /posts", status: "FAIL", duration: 310, assertions: 9 },
        { id: 7, name: "GET /comments", status: "PASS", duration: 165, assertions: 5 }
    ]
};

// Extract test summary
const totalTests = testRun.tests.length;
const passedTests = testRun.tests.filter(t => t.status === "PASS").length;
const failedTests = testRun.tests.filter(t => t.status === "FAIL").length;
const passRate = ((passedTests / totalTests) * 100).toFixed(1);

console.log("Test Run Summary:");
console.log(`Run ID: ${testRun.runId}`);
console.log(`Total Tests: ${totalTests}`);
console.log(`Passed: ${passedTests}`);
console.log(`Failed: ${failedTests}`);
console.log(`Pass Rate: ${passRate}%`);
console.log("\n");

// Get failing test names
const failingTestNames = testRun.tests
    .filter(t => t.status === "FAIL")
    .map(t => t.name);

console.log("Failing Tests:", failingTestNames);
console.log("\n");

// Calculate average duration
const avgDuration = testRun.tests
    .reduce((sum, t) => sum + t.duration, 0) / totalTests;

console.log(`Average Test Duration: ${avgDuration.toFixed(1)}ms`);
console.log("\n");

// Find slowest test
const slowestTest = testRun.tests.reduce((slowest, test) => {
    return test.duration > slowest.duration ? test : slowest;
});

console.log("Slowest Test:", slowestTest.name, `(${slowestTest.duration}ms)`);
console.log("\n");

// ============================================
// Scenario 2: Validate API Response Structure
// ============================================

console.log("=== Scenario 2: Validate API Response ===\n");

const apiResponse = {
    statusCode: 200,
    data: {
        users: [
            { id: 1, username: "alice", email: "alice@test.com", age: 28 },
            { id: 2, username: "bob", email: "bob@test.com", age: 35 },
            { id: 3, username: "charlie", email: "charlie@test.com", age: 42 }
        ]
    }
};

// Validate response structure
const validations = {
    hasStatusCode: apiResponse.statusCode !== undefined,
    statusIs200: apiResponse.statusCode === 200,
    hasData: apiResponse.data !== undefined,
    hasUsers: apiResponse.data.users !== undefined,
    usersIsArray: Array.isArray(apiResponse.data.users),
    hasUsers: apiResponse.data.users.length > 0
};

console.log("Validation Results:");
Object.entries(validations).forEach(([check, passed]) => {
    const status = passed ? "✓ PASS" : "✗ FAIL";
    console.log(`${status}: ${check}`);
});
console.log("\n");

// Validate each user has required fields
const requiredFields = ["id", "username", "email"];
const userValidations = apiResponse.data.users.map(user => {
    const missingFields = requiredFields.filter(field => user[field] === undefined);
    return {
        userId: user.id,
        isValid: missingFields.length === 0,
        missingFields: missingFields
    };
});

console.log("User Validations:");
userValidations.forEach(v => {
    if (v.isValid) {
        console.log(`✓ User ${v.userId}: All required fields present`);
    } else {
        console.log(`✗ User ${v.userId}: Missing fields: ${v.missingFields.join(", ")}`);
    }
});
console.log("\n");

// ============================================
// Scenario 3: Filter and Transform Test Data
// ============================================

console.log("=== Scenario 3: Filter and Transform Test Data ===\n");

const allUsers = [
    { id: 1, name: "Alice", role: "admin", active: true, lastLogin: "2026-02-20" },
    { id: 2, name: "Bob", role: "user", active: true, lastLogin: "2026-02-19" },
    { id: 3, name: "Charlie", role: "user", active: false, lastLogin: "2026-01-15" },
    { id: 4, name: "Diana", role: "admin", active: true, lastLogin: "2026-02-21" },
    { id: 5, name: "Eve", role: "user", active: false, lastLogin: "2025-12-10" }
];

// Get all active users
const activeUsers = allUsers.filter(u => u.active);
console.log("Active Users:", activeUsers.map(u => u.name));
console.log("\n");

// Get all active admins
const activeAdmins = allUsers
    .filter(u => u.active && u.role === "admin")
    .map(u => u.name);
console.log("Active Admins:", activeAdmins);
console.log("\n");

// Create test data for each user
const testLoginData = allUsers.map(user => ({
    username: user.name.toLowerCase(),
    password: `${user.name.toLowerCase()}123`,
    expectedRole: user.role,
    shouldSucceed: user.active
}));

console.log("Generated Test Login Data:");
testLoginData.forEach(data => {
    console.log(`Username: ${data.username}, Password: ${data.password}, Expected: ${data.expectedRole}`);
});
console.log("\n");

// ============================================
// Scenario 4: Build Test Report
// ============================================

console.log("=== Scenario 4: Build Test Report ===\n");

const testExecutions = [
    { suite: "Authentication", passed: 12, failed: 2, skipped: 1 },
    { suite: "User Management", passed: 18, failed: 0, skipped: 0 },
    { suite: "API Endpoints", passed: 25, failed: 3, skipped: 2 },
    { suite: "Database", passed: 8, failed: 1, skipped: 0 }
];

// Calculate totals
const totals = testExecutions.reduce((acc, suite) => {
    acc.passed += suite.passed;
    acc.failed += suite.failed;
    acc.skipped += suite.skipped;
    return acc;
}, { passed: 0, failed: 0, skipped: 0 });

const grandTotal = totals.passed + totals.failed + totals.skipped;
const overallPassRate = ((totals.passed / (totals.passed + totals.failed)) * 100).toFixed(1);

console.log("Test Execution Report");
console.log("====================");
testExecutions.forEach(suite => {
    const total = suite.passed + suite.failed + suite.skipped;
    const passRate = ((suite.passed / (suite.passed + suite.failed)) * 100).toFixed(1);
    console.log(`${suite.suite}:`);
    console.log(`  Total: ${total} | Passed: ${suite.passed} | Failed: ${suite.failed} | Skipped: ${suite.skipped}`);
    console.log(`  Pass Rate: ${passRate}%`);
});

console.log("\nOverall Summary:");
console.log(`Total Tests: ${grandTotal}`);
console.log(`Passed: ${totals.passed}`);
console.log(`Failed: ${totals.failed}`);
console.log(`Skipped: ${totals.skipped}`);
console.log(`Overall Pass Rate: ${overallPassRate}%`);
console.log("\n");

// ============================================
// Scenario 5: JSON Parsing and Stringifying
// ============================================

console.log("=== Scenario 5: JSON Operations ===\n");

// Simulate API response as JSON string
const jsonResponse = '{"status":"success","data":{"userId":123,"username":"testuser","email":"test@example.com"}}';

console.log("JSON String:", jsonResponse);
console.log("\n");

// Parse JSON string to object
const parsedData = JSON.parse(jsonResponse);
console.log("Parsed Object:", parsedData);
console.log("Accessing username:", parsedData.data.username);
console.log("\n");

// Convert object to JSON string
const testData = {
    testName: "Login Test",
    timestamp: new Date().toISOString(),
    result: "PASS"
};

const jsonString = JSON.stringify(testData);
console.log("Object as JSON string:", jsonString);
console.log("\n");

// Pretty print JSON (with indentation)
const prettyJson = JSON.stringify(testData, null, 2);
console.log("Pretty JSON:");
console.log(prettyJson);
console.log("\n");

// ============================================
// Scenario 6: Data Transformation Pipeline
// ============================================

console.log("=== Scenario 6: Data Transformation Pipeline ===\n");

const rawApiData = [
    { user_id: 1, user_name: "ALICE", user_email: "ALICE@TEST.COM", status: 1 },
    { user_id: 2, user_name: "BOB", user_email: "BOB@TEST.COM", status: 1 },
    { user_id: 3, user_name: "CHARLIE", user_email: "CHARLIE@TEST.COM", status: 0 }
];

// Transform: clean and normalize data
const cleanedData = rawApiData
    .map(user => ({
        id: user.user_id,
        name: user.user_name.toLowerCase(),
        email: user.user_email.toLowerCase(),
        isActive: user.status === 1
    }))
    .filter(user => user.isActive)  // Keep only active users
    .map(user => ({
        ...user,
        testUsername: `test_${user.name}`,
        testPassword: `${user.name}_pass123`
    }));

console.log("Original Data:", rawApiData);
console.log("\nCleaned and Transformed Data:");
console.log(cleanedData);
console.log("\n");

console.log("=== All Scenarios Complete! ===");