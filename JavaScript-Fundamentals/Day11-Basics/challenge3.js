// ============================================
// CHALLENGE 3: API Response Validator
// ============================================

// 1. Expected values (what we expect from API):
//    - Expected status code: 200
//    - Expected response time (ms): 500
//    - Expected user count: 10
//    - Expected endpoint: "/api/users"

// Your code here:
const expectedStatusCode = 200;
const expectedResponseTime = 500;
const expectedUserCount = 10;
const expectedEndpoint = "/api/users"; 

// 2. Actual values (what API actually returned):
//    - Actual status code: 200
//    - Actual response time: 450
//    - Actual user count: 10
//    - Actual endpoint: "/api/users"

// Your code here:
const actualStatusCode = 200;
const actualResponseTime = 450;
const actualUserCount = 10;
const actualEndpoint = "/api/users";

// 3. Validation checks (compare expected vs actual):
//    - Is status code correct?
//    - Is response time under expected?
//    - Is user count correct?
//    - Is endpoint correct?
//    Store each as a boolean variable

// Your code here:
const isStatusCorrect = actualStatusCode === expectedStatusCode;
const isResponseTimeFast = actualResponseTime<= expectedResponseTime;
const isUserCountCorrect = actualUserCount === expectedUserCount;
const isEndpointCorrect = actualEndpoint === expectedEndpoint;

// 4. Count how many validations passed
//    Hint: true = 1, false = 0 in JavaScript

// Your code here:
const validationsPassed =
    (isStatusCorrect ? 1 : 0) +
    (isResponseTimeFast ? 1 : 0) +
    (isUserCountCorrect ? 1 : 0) +
    (isEndpointCorrect ? 1 : 0);

// 5. Determine overall test result
//    - If all 4 validations pass → "PASS"
//    - Otherwise → "FAIL"
//    Store in a variable called testResult

// Your code here:
const testResult = validationsPassed === 4 ? "PASS" : "FAIL";

// 6. Create a validation report showing:
//    - Each validation (expected vs actual)
//    - Pass/Fail for each check
//    - Overall result

// Your code here:
const validationReport = `
API Validation Report
=====================
Status Code: Expected ${expectedStatusCode}, Got ${actualStatusCode} - ${isStatusCorrect ? 'PASS' : 'FAIL'}
Response Time: Expected ≤${expectedResponseTime}ms, Got ${actualResponseTime}ms - ${isResponseTimeFast ? 'PASS' : 'FAIL'}
User Count: Expected ${expectedUserCount}, Got ${actualUserCount} - ${isUserCountCorrect ? 'PASS' : 'FAIL'}
Endpoint: Expected ${expectedEndpoint}, Got ${actualEndpoint} - ${isEndpointCorrect ? 'PASS' : 'FAIL'}

Validations Passed: ${validationsPassed}/4
Overall Result: ${testResult}
`;

// 7. Log the report

// Your code here:
console.log(validationReport);