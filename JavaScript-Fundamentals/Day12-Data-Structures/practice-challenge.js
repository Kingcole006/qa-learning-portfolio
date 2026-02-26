// ============================================
// PRACTICE CHALLENGE: Test Result Analyzer
// ============================================

// Sample test data (like from a real test run)
const testResults = [
    { id: 1, name: "User Login", endpoint: "/auth/login", method: "POST", status: "PASS", responseTime: 120, statusCode: 200 },
    { id: 2, name: "User Logout", endpoint: "/auth/logout", method: "POST", status: "PASS", responseTime: 85, statusCode: 200 },
    { id: 3, name: "Get User Profile", endpoint: "/users/me", method: "GET", status: "FAIL", responseTime: 340, statusCode: 500 },
    { id: 4, name: "Update Profile", endpoint: "/users/me", method: "PUT", status: "PASS", responseTime: 210, statusCode: 200 },
    { id: 5, name: "Delete Account", endpoint: "/users/me", method: "DELETE", status: "PASS", responseTime: 95, statusCode: 204 },
    { id: 6, name: "Create Post", endpoint: "/posts", method: "POST", status: "FAIL", responseTime: 450, statusCode: 400 },
    { id: 7, name: "Get All Posts", endpoint: "/posts", method: "GET", status: "PASS", responseTime: 165, statusCode: 200 },
    { id: 8, name: "Get Post by ID", endpoint: "/posts/1", method: "GET", status: "PASS", responseTime: 140, statusCode: 200 }
];

// ============================================
// YOUR TASKS - Use what you learned today!
// ============================================

console.log("=== Test Result Analysis ===\n");

// TASK 1: Use filter() to get all passing tests
// TODO: Create a variable called passingTests

const passingTests = testResults.filter(test => test.status === "PASS");
console.log("1. Passing tests:", passingTests.length);

// TASK 2: Use filter() to get all failing tests
// TODO: Create a variable called failingTests

const failingTests = testResults.filter(test => test.status === "FAIL");
console.log("2. Failing tests:", failingTests.length);

// TASK 3: Use map() to get just the names of failing tests
// TODO: Create a variable called failingTestNames

const failingTestNames = failingTests.map(test => test.name);
console.log("3. Failing test names:", failingTestNames);

// TASK 4: Use reduce() to calculate total number of tests
// TODO: Create a variable called totalTests

const totalTests = testResults.reduce((count) => count + 1, 0);
console.log("4. Total tests:", totalTests);

// TASK 5: Calculate pass rate (passed / total * 100)
// TODO: Create a variable called passRate

const passRate = (passingTests.length / totalTests * 100);
console.log("5. Pass rate:", passRate, "%");

// TASK 6: Use reduce() to calculate average response time
// TODO: Create a variable called avgResponseTime
// HINT: Sum all response times, then divide by total

const totalResponseTime = testResults.reduce((sum, test) => sum + test.responseTime, 0) /totalTests;
console.log("6. Average response time:", totalResponseTime, "ms");

// TASK 7: Use find() to get the slowest test
// TODO: Create a variable called slowestTest
// HINT: Use reduce to find test with highest responseTime

const slowestTest = testResults.reduce((slowest, test) => {
    return test.responseTime > slowest.responseTime ? test : slowest;
});
console.log("7. Slowest test:", slowestTest.name, `(${slowestTest.responseTime}ms)`);

// TASK 8: Use filter() to get all tests slower than 200ms
// TODO: Create a variable called slowTests

const slowTests = testResults.filter(test => test.responseTime > 200);
console.log("8. Tests slower than 200ms:", slowTests.length);

// TASK 9: Use filter() and map() together to get names of slow tests
// TODO: Create a variable called slowTestNames

const slowTestNames = slowTests.map(test => test.name);
console.log("9. Names of slow tests:", slowTestNames);

// TASK 10: Build a summary object using reduce()
// TODO: Create a variable called summary with:
// {
//   total: number,
//   passed: number,
//   failed: number,
//   avgResponseTime: number,
//   slowestTest: name of slowest test
// }

const summary = testResults.reduce((summary, test) => {
    summary.total++;
    if (test.status === "PASS") {
        summary.passed++;
    } else {
        summary.failed++;
    }
    summary.totalResponseTime += test.responseTime;
    return summary;
}, { total: 0, passed: 0, failed: 0, totalResponseTime: 0 });

summary.avgResponseTime = summary.totalResponseTime / summary.total;

// Print all your results
console.log("\n=== Your Analysis Results ===");
console.log("Passing tests:", passingTests.length);
// TODO: Add console.logs for all other tasks

console.log("Failing tests:", failingTests.length);
console.log("Failing test names:", failingTestNames);
console.log("Total tests:", totalTests);
console.log("Pass rate:", passRate, "%");
console.log("Average response time:", totalResponseTime, "ms");
console.log("Slowest test:", slowestTest.name, `(${slowestTest.responseTime}ms)`);
console.log("Tests slower than 200ms:", slowTests.length);
console.log("Names of slow tests:", slowTestNames);
console.log("Summary object:", summary);

