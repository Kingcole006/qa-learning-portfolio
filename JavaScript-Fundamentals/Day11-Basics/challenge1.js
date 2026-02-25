// ============================================
// CHALLENGE 1: API Test Status Tracker
// ============================================

// 1. Create constants for:
//    - Total number of tests planned: 25
//    - API base URL: "https://api.example.com"
//    - Is production environment: false

const totalTests = 25;
const apiBaseUrl = "https://api.example.com";
const isProduction = false;

// 2. Create variables that will change:
//    - Tests completed: start at 0
//    - Tests passed: start at 0
//    - Tests failed: start at 0
//    - Current test name: "Login API Test"

let testsCompleted = 0;
let testsPassed = 0;
let testsFailed = 0;
let currentTestName = "Login API Test";

// 3. Simulate running 5 tests (4 pass, 1 fails)
//    Increment the counters accordingly

testsCompleted = 5;
testsPassed = 4;
testsFailed = 1;

// 4. Calculate the completion percentage
//    Formula: (completed / total) * 100

const completionPercentage = (testsCompleted / totalTests) * 100;

// 5. Calculate the pass rate
//    Formula: (passed / completed) * 100

const passRate = (testsPassed / testsCompleted) * 100;

// 6. Create a status report using template literals
//    Include: total tests, completed, passed, failed, 
//             completion %, pass rate %

const statusReport = `
API Test Status Report
======================
Total Tests Planned: ${totalTests}
Tests Completed: ${testsCompleted}
Tests Passed: ${testsPassed}
Tests Failed: ${testsFailed}
Completion: ${completionPercentage}%
Pass Rate: ${passRate}%
Environment: ${isProduction ? 'Production' : 'Development'}
`;

// 7. Log the report

console.log(statusReport);