// ============================================
// BASIC FUNCTIONS
// ============================================

// Function Declaration
// Format: function functionName() { code here }

function sayHello() {
    console.log("Hello from a function!");
}

// Calling/running the function
sayHello();  // Output: Hello from a function!

// You can call it multiple times!
sayHello();  // Output: Hello from a function!
sayHello();  // Output: Hello from a function!

// ============================================
// FUNCTIONS WITH PARAMETERS
// ============================================

// Function with ONE parameter
function greetUser(username) {
    console.log(`Hello, ${username}!`);
}

// Calling with different inputs
greetUser("Cole");      // Output: Hello, Cole!
greetUser("John");      // Output: Hello, John!
greetUser("Sarah");     // Output: Hello, Sarah!

console.log("---");

// Function with MULTIPLE parameters
function testLogin(email, password) {
    console.log(`Testing login for: ${email}`);
    console.log(`Password length: ${password.length} characters`);
}

testLogin("john@test.com", "password123");
testLogin("jane@test.com", "securePass456");

console.log("---");

// Function for API testing
function logApiRequest(method, endpoint, statusCode) {
    console.log(`[${method}] ${endpoint} → Status: ${statusCode}`);
}

logApiRequest("GET", "/api/users", 200);
logApiRequest("POST", "/api/users", 201);
logApiRequest("PUT", "/api/users/1", 200);
logApiRequest("DELETE", "/api/users/1", 204);

// ============================================
// FUNCTIONS THAT RETURN VALUES
// ============================================

// Function that calculates and returns a value
function add(a, b) {
    const sum = a + b;
    return sum;
}

// Using the returned value
const result1 = add(5, 3);
console.log("5 + 3 =", result1);  // Output: 5 + 3 = 8

const result2 = add(10, 20);
console.log("10 + 20 =", result2);  // Output: 10 + 20 = 30

console.log("---");

// QA Example: Calculate pass rate
function calculatePassRate(passed, total) {
    const rate = (passed / total) * 100;
    return rate;
}

const testPassRate = calculatePassRate(48, 50);
console.log(`Pass rate: ${testPassRate}%`);  // Output: Pass rate: 96%

// You can use the returned value in other calculations
const anotherPassRate = calculatePassRate(72, 72);
console.log(`Perfect score: ${anotherPassRate}%`);  // Output: Perfect score: 100%

console.log("---");

// Multiple returns example
function validateStatusCode(statusCode) {
    if (statusCode === 200) {
        return "Success";
    } else if (statusCode === 404) {
        return "Not Found";
    } else if (statusCode === 500) {
        return "Server Error";
    } else {
        return "Unknown Status";
    }
}

console.log(validateStatusCode(200));  // Output: Success
console.log(validateStatusCode(404));  // Output: Not Found
console.log(validateStatusCode(500));  // Output: Server Error
console.log(validateStatusCode(999));  // Output: Unknown Status

// ============================================
// DEFAULT PARAMETERS
// ============================================

// If no value provided, use the default
function createTestUser(username = "testuser", isActive = true) {
    console.log(`Created user: ${username}, Active: ${isActive}`);
}

// Using defaults (no arguments provided)
createTestUser();  // Output: Created user: testuser, Active: true

// Overriding first default
createTestUser("john123");  // Output: Created user: john123, Active: true

// Overriding both defaults
createTestUser("jane456", false);  // Output: Created user: jane456, Active: false

console.log("---");

// QA Example: API request with default timeout
function makeApiRequest(endpoint, timeout = 5000) {
    console.log(`Calling ${endpoint} with ${timeout}ms timeout`);
}

makeApiRequest("/api/users");  // Uses default 5000ms
makeApiRequest("/api/users", 10000);  // Uses custom 10000ms