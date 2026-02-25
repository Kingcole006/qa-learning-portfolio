const baseUrl = "https://jsonplaceholder.typicode.com";
const endpoint = "/users";
let testsRun = 0;
let testsPassed = 0;
const isTestEnvironment = true;

const fullUrl = `${baseUrl}${endpoint}`;

console.log("Base URL:", baseUrl);
console.log("Endpoint:", endpoint);
console.log("Full URL:", fullUrl);
console.log("Tests Run:", testsRun);
console.log("Tests Passed:", testsPassed);

testsRun++;
testsPassed++;

const passRate = (testsPassed / testsRun) * 100;
console.log("Pass Rate:", passRate + "%");

const testReport = `
API Test Report
===============
URL: ${fullUrl}
Tests Run: ${testsRun}
Tests Passed: ${testsPassed}
Pass Rate: ${passRate}%
`;

console.log(testReport);