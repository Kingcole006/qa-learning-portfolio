// ============================================
// FUNCTION PRACTICE #1: Test Result Validator
// ============================================

// Basic version
function validateTestResult(expected, actual) {
    if (expected === actual) {
        return "PASS";
    } else {
        return "FAIL";
    }
}

// Test the basic function
console.log("=== Basic Validator ===");
const test1 = validateTestResult(200, 200);
console.log("Test 1 - Status Code:", test1);

const test2 = validateTestResult(200, 404);
console.log("Test 2 - Status Code:", test2);

const test3 = validateTestResult(500, 500);
console.log("Test 3 - Response Time:", test3);

const test4 = validateTestResult(10, 8);
console.log("Test 4 - User Count:", test4);

console.log("\n=== Detailed Validator ===");

// Detailed version
function validateTestResultDetailed(expected, actual) {
    if (expected === actual) {
        return `PASS - Expected: ${expected}, Got: ${actual}`;
    } else {
        return `FAIL - Expected: ${expected}, Got: ${actual}`;
    }
}

// Test detailed function
const detailedTest1 = validateTestResultDetailed(200, 200);
console.log(detailedTest1);

const detailedTest2 = validateTestResultDetailed(200, 404);
console.log(detailedTest2);

console.log("\n=== Short Version (Ternary) ===");

// Short version using ternary operator
function validateTestResultShort(expected, actual) {
    return expected === actual ? "PASS" : "FAIL";
}

// Test short function
console.log(validateTestResultShort(200, 200));  // PASS
console.log(validateTestResultShort(200, 404));  // FAIL

// ==========================================
// FUNCTION PRACTICE #2: Test User Generator
// ==========================================

// Basic user generator
function generateUsername(userNumber) {
    const username = `testuser${userNumber}`;
    return username;
}

// Test the basic genrator
console.log("\n=== Basic Username Genrator ===");

const user1 = generateUsername(1);
console.log(user1); // testuser1

const user2 = generateUsername(2);
console.log(user2); // testuser2

const user3 = generateUsername(42);
console.log(user3); // testuser42

// Completed user object generator
function generateTestUser(userNumber) {
    const username = `testuser${userNumber}`;
    const email = `testuser${userNumber}@test.com`;
    const password = `password${userNumber}123`;
    const userId = userNumber;

    return {
        id: userId,
        username: username,
        email: email,
        password: password
    };
}

console.log("\n=== Complete User Generator ===");

const testUser1 = generateTestUser(1);
console.log("User 1:", testUser1);

const testUser2 = generateTestUser(2);
console.log("User 2:", testUser2);

console.log("\nAccessing User 1 properties:");
console.log("Username:", testUser1.username);
console.log("Email:", testUser1.email);
console.log("Password:", testUser1.password);

// Advanced generator with defaults
function generateTestUserAdvanced(userNumber, isActive = true, role = "user") {
    return{
        id: userNumber,
        username: `testuser${userNumber}`,
        email: `testuser${userNumber}@test.com`,
        password: `password${userNumber}123`,
        isActive: isActive,
        role: role,
        createdAt: new Date().toISOString()
    };
}

console.log("\n=== Advanced User Generator ===");
const adminUser = generateTestUserAdvanced(100);
console.log("Default user:", adminUser);

const inactiveUser = generateTestUserAdvanced(101, false);
console.log("Inactive user:", inactiveUser);

const moderator = generateTestUserAdvanced(102, true, "moderator");
console.log("Moderator:", moderator);

// Bulk user generation
function generateMultipleUsers(count) {
    const users = []; // Empty array to store users

    for (let i = 1; i<= count; i++) {
        const user = generateTestUser(i);
        users.push(user); // Add user to array
    }
    
    return users;
}

console.log("\n=== Multiple User Generation ===");

const tenUsers = generateMultipleUsers(10);
console.log(`Generated ${tenUsers.length} users`);
console.log("First user:", tenUsers[0]);
console.log("Last user:", tenUsers[9]);

// ============================================
// FUNCTION PRACTICE #3: API Response Validator
// ============================================

// Simple status code validator
function validateStatusCode(response) {
    return response.statusCode === 200;
}

console.log("\n=== Simple Status Code Validator ===");

const response1 = { statusCode: 200 };
console.log("200 status:", validateStatusCode(response1));

const response2 = { statusCode: 404 };
console.log("404 status:", validateStatusCode(response2));

// Multiple field validator
function validateResponse(response, maxResponseTime = 1000) {
    const statusValid = response.statusCode === 200;
    const timeFast = response.responseTime <= maxResponseTime;
    
    return {
        statusValid: statusValid,
        timeFast: timeFast,
        allValid: statusValid && timeFast
    };
}

console.log("\n=== Multiple Field Validator ===");

const goodResponse = {
    statusCode: 200,
    responseTime: 450
};
console.log("Good response:", validateResponse(goodResponse));

const slowResponse = {
    statusCode: 200,
    responseTime: 1500
};
console.log("Slow response:", validateResponse(slowResponse));

const errorResponse = {
    statusCode: 500,
    responseTime: 300
};
console.log("Error response:", validateResponse(errorResponse));

// Advanced validator with required fields
function validateApiResponse(response, requiredFields = []) {
    const statusValid = response.statusCode === 200;
    const timeFast = response.responseTime <= 1000;
    const hasData = response.data !== undefined && response.data !== null;
    
    let allFieldsPresent = true;
    const missingFields = [];
    
    if (hasData && requiredFields.length > 0) {
        for (let i = 0; i < requiredFields.length; i++) {
            const field = requiredFields[i];
            if (response.data[field] === undefined) {
                allFieldsPresent = false;
                missingFields.push(field);
            }
        }
    }
    
    const allValid = statusValid && timeFast && hasData && allFieldsPresent;
    
    return {
        statusValid: statusValid,
        timeFast: timeFast,
        hasData: hasData,
        allFieldsPresent: allFieldsPresent,
        missingFields: missingFields,
        allValid: allValid,
        summary: allValid ? "PASS ✅" : "FAIL ❌"
    };
}

console.log("\n=== Advanced API Response Validator ===");

const perfectResponse = {
    statusCode: 200,
    responseTime: 350,
    data: {
        id: 1,
        username: "testuser",
        email: "test@example.com"
    }
};

const validation1 = validateApiResponse(
    perfectResponse,
    ["id", "username", "email"]
);
console.log("Perfect response:", validation1);

const incompleteResponse = {
    statusCode: 200,
    responseTime: 400,
    data: {
        id: 1,
        username: "testuser"
    }
};

const validation2 = validateApiResponse(
    incompleteResponse,
    ["id", "username", "email"]
);
console.log("\nIncomplete response:", validation2);

const noDataResponse = {
    statusCode: 200,
    responseTime: 300
};

const validation3 = validateApiResponse(
    noDataResponse,
    ["id", "username"]
);
console.log("\nNo data response:", validation3);

const badErrorResponse = {
    statusCode: 500,
    responseTime: 200,
    data: null
};

const validation4 = validateApiResponse(
    badErrorResponse,
    ["id"]
);
console.log("\nError response:", validation4);