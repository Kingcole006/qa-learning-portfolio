// ============================================
// SAMPLE TEST DATA
// ============================================

// Array of test results
const testResults = [
    { id: 1, testName: "Login Test", status: "PASS", duration: 250 },
    { id: 2, testName: "Logout Test", status: "PASS", duration: 150 },
    { id: 3, testName: "Create User", status: "FAIL", duration: 320 },
    { id: 4, testName: "Delete User", status: "PASS", duration: 180 },
    { id: 5, testName: "Update Profile", status: "FAIL", duration: 400 }
];

// Array of API response times
const responseTimes = [120, 250, 180, 95, 310, 145, 220];

// Array of user IDs
const userIds = [101, 102, 103, 104, 105];

console.log("Sample data loaded! Let's start learning array methods!\n");

// ============================================
// forEach() - Loop Through Items
// ============================================

console.log("=== forEach() Examples ===\n");

// Example 1: Print each test name
console.log("All test names:");
testResults.forEach(function(test) {
    console.log("- " + test.testName);
});

console.log("\n");

// Example 2: Print status of each test
console.log("Test statuses:");
testResults.forEach(function(test) {
    console.log(`${test.testName}: ${test.status}`);
});

console.log("\n");

// Example 3: Using arrow function (shorter!)
console.log("Response times:");
responseTimes.forEach(time => {
    console.log(`${time}ms`);
});

console.log("\n");

// ============================================
// map() - Transform Each Item
// ============================================

console.log("=== map() Examples ===\n");

// Example 1: Get just the test names
const testNames = testResults.map(function(test) {
    return test.testName;
});

console.log("Test names array:", testNames);
console.log("\n");

// Example 2: Get just the statuses
const statuses = testResults.map(test => test.status);
console.log("Statuses:", statuses);
console.log("\n");

// Example 3: Convert response times to seconds
const timesInSeconds = responseTimes.map(time => time / 1000);
console.log("Times in milliseconds:", responseTimes);
console.log("Times in seconds:", timesInSeconds);
console.log("\n");

// Example 4: Add "User_" prefix to each ID
const formattedIds = userIds.map(id => `User_${id}`);
console.log("Original IDs:", userIds);
console.log("Formatted IDs:", formattedIds);
console.log("\n");

// Example 5: Create status report for each test
const statusReports = testResults.map(test => {
    return `${test.testName}: ${test.status} (${test.duration}ms)`;
});

console.log("Status reports:");
statusReports.forEach(report => console.log("- " + report));
console.log("\n");

// ============================================
// filter() - Keep Only Items That Match
// ============================================

console.log("=== filter() Examples ===\n");

// Example 1: Get only passing tests
const passingTests = testResults.filter(function(test) {
    return test.status === "PASS";
});

console.log("Passing tests:");
console.log(passingTests);
console.log("\n");

// Example 2: Get only failing tests
const failingTests = testResults.filter(test => test.status === "FAIL");

console.log("Failing tests:");
console.log(failingTests);
console.log("\n");

// Example 3: Get tests that took longer than 200ms
const slowTests = testResults.filter(test => test.duration > 200);

console.log("Slow tests (>200ms):");
slowTests.forEach(test => {
    console.log(`- ${test.testName}: ${test.duration}ms`);
});
console.log("\n");

// Example 4: Get fast response times (under 200ms)
const fastResponses = responseTimes.filter(time => time < 200);

console.log("All response times:", responseTimes);
console.log("Fast responses (<200ms):", fastResponses);
console.log("\n");

// Example 5: Combine filter and map - get names of passing tests
const passingTestNames = testResults
    .filter(test => test.status === "PASS")
    .map(test => test.testName);

console.log("Names of passing tests:", passingTestNames);
console.log("\n");

// ============================================
// find() - Find First Item That Matches
// ============================================

console.log("=== find() Examples ===\n");

// Example 1: Find a specific test by name
const loginTest = testResults.find(test => test.testName === "Login Test");

console.log("Found login test:");
console.log(loginTest);
console.log("\n");

// Example 2: Find first failing test
const firstFailure = testResults.find(test => test.status === "FAIL");

console.log("First failing test:");
console.log(firstFailure);
console.log("\n");

// Example 3: Find test by ID
const testById = testResults.find(test => test.id === 3);

console.log("Test with ID 3:");
console.log(testById);
console.log("\n");

// Example 4: Find doesn't exist - returns undefined
const nonExistent = testResults.find(test => test.testName === "Fake Test");

console.log("Searching for non-existent test:");
console.log(nonExistent); // undefined
console.log("\n");

// Example 5: Using find result safely
const slowTest = testResults.find(test => test.duration > 300);

if (slowTest) {
    console.log(`Found slow test: ${slowTest.testName} took ${slowTest.duration}ms`);
} else {
    console.log("No slow tests found");
}
console.log("\n");

// ============================================
// reduce() - Combine All Items Into One Value
// ============================================

console.log("=== reduce() Examples ===\n");

// Example 1: Count total tests
const totalTests = testResults.reduce((count, test) => {
    return count + 1;
}, 0);

console.log("Total number of tests:", totalTests);
console.log("\n");

// Example 2: Count passing tests
const passingCount = testResults.reduce((count, test) => {
    if (test.status === "PASS") {
        return count + 1;
    }
    return count;
}, 0);

console.log("Number of passing tests:", passingCount);
console.log("\n");

// Example 3: Sum of all response times
const totalResponseTime = responseTimes.reduce((sum, time) => {
    return sum + time;
}, 0);

console.log("All response times:", responseTimes);
console.log("Total response time:", totalResponseTime + "ms");
console.log("Average response time:", (totalResponseTime / responseTimes.length) + "ms");
console.log("\n");

// Example 4: Sum of all test durations
const totalDuration = testResults.reduce((sum, test) => {
    return sum + test.duration;
}, 0);

console.log("Total duration of all tests:", totalDuration + "ms");
console.log("\n");

// Example 5: Find longest test duration
const longestDuration = testResults.reduce((max, test) => {
    if (test.duration > max) {
        return test.duration;
    }
    return max;
}, 0);

console.log("Longest test duration:", longestDuration + "ms");
console.log("\n");

// Example 6: Build test summary object
const testSummary = testResults.reduce((summary, test) => {
    // Count total
    summary.total++;
    
    // Count by status
    if (test.status === "PASS") {
        summary.passed++;
    } else {
        summary.failed++;
    }
    
    // Add to total duration
    summary.totalDuration += test.duration;
    
    return summary;
}, { total: 0, passed: 0, failed: 0, totalDuration: 0 });

console.log("Test Summary:");
console.log(testSummary);
console.log(`Pass Rate: ${(testSummary.passed / testSummary.total * 100).toFixed(1)}%`);
console.log("\n");

