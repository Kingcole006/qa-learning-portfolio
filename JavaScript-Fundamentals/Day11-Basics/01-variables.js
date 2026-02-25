// ============================================
// VARIABLES & DATA TYPES
// ============================================

// 1. const - Cannot be reassigned (use by default)
const apiUrl = "https://jsonplaceholder.typicode.com";
const maxRetries = 3;
const isTestEnvironment = true;

console.log("API URL:", apiUrl);
console.log("Max Retries:", maxRetries);
console.log("Is Test Environment:", isTestEnvironment);

// Trying to reassign const throws error:
// apiUrl = "https://different-url.com"; // ❌ Error!

console.log("---");

// 2. let - Can be reassigned (use when value will change)
let currentTest = "Login Test";
let testsPassed = 0;

console.log("Current Test:", currentTest);
console.log("Tests Passed:", testsPassed);

currentTest = "Registration Test"; // ✅ Allowed
testsPassed = testsPassed + 1;     // ✅ Allowed

console.log("Updated Test:", currentTest);
console.log("Tests Passed:", testsPassed);

console.log("---");

// 3. var - Old way (avoid in modern code)
var oldStyleVariable = "Don't use var";
// var has confusing scoping rules - stick to const/let

// ============================================
// DATA TYPES
// ============================================

// String
const testName = "API Authentication Test";
const userName = 'John Doe'; // Single or double quotes work
const dynamicString = `Current test: ${testName}`; // Template literal

console.log("Test Name:", testName);
console.log("User Name:", userName);
console.log("Dynamic String:", dynamicString);

console.log("---");

// Number
const statusCode = 200;
const responseTime = 145.5;
const numberOfTests = 72;

console.log("Status Code:", statusCode);
console.log("Response Time:", responseTime);
console.log("Number of Tests:", numberOfTests);

// Math operations
const totalTests = 50;
const passedTests = 48;
const passRate = (passedTests / totalTests) * 100;

console.log("Pass Rate:", passRate + "%");

console.log("---");

// Boolean
const isAuthenticated = true;
const testFailed = false;

console.log("Is Authenticated:", isAuthenticated);
console.log("Test Failed:", testFailed);

console.log("---");

// Null (intentionally empty)
let authToken = null; // No token yet

console.log("Auth Token:", authToken);

// After login:
authToken = "abc123xyz";
console.log("Auth Token after login:", authToken);

console.log("---");

// Undefined (not yet assigned)
let futureVariable;
console.log("Future Variable:", futureVariable); // undefined

console.log("---");

// ============================================
// TYPE CHECKING
// ============================================

console.log("Type of apiUrl:", typeof apiUrl);           // "string"
console.log("Type of statusCode:", typeof statusCode);   // "number"
console.log("Type of isAuthenticated:", typeof isAuthenticated); // "boolean"
console.log("Type of authToken:", typeof authToken);     // "string"
console.log("Type of null:", typeof null);               // "object" (JS quirk!)

console.log("---");

// ============================================
// TEMPLATE LITERALS (Modern String Formatting)
// ============================================

const endpoint = "/api/users";
const method = "GET";
const expectedStatus = 200;

// Old way (avoid):
const oldMessage = "Testing " + method + " request to " + endpoint + " expecting " + expectedStatus;

// Modern way (use this):
const modernMessage = `Testing ${method} request to ${endpoint} expecting ${expectedStatus}`;

console.log("Old way:", oldMessage);
console.log("Modern way:", modernMessage);

// Multi-line template literals
const testReport = `
Test Report:
===========
Endpoint: ${endpoint}
Method: ${method}
Expected: ${expectedStatus}
Status: PASSED ✅
`;

console.log(testReport);

// ============================================
// BEST PRACTICES
// ============================================

// ✅ DO: Use const by default
const API_BASE_URL = "https://reqres.in/api";

// ✅ DO: Use let when value changes
let requestCount = 0;
requestCount++; // Increment

// ✅ DO: Use descriptive names
const userRegistrationEndpoint = "/register";
const maxLoginAttempts = 3;

// ❌ DON'T: Use single letters (except in loops)
const x = "bad"; // What is x?

// ❌ DON'T: Use var
var oldVariable = "outdated";

// ✅ DO: Use camelCase for variables
const myTestResult = "passed";
const numberOfFailedTests = 0;

// ❌ DON'T: Use snake_case (that's Python style)
const my_test_result = "avoid this in JS";

console.log("Best practices applied! ✅");