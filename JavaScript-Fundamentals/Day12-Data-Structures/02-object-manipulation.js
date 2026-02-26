// ============================================
// OBJECT MANIPULATION & DESTRUCTURING
// ============================================

console.log("=== Object Manipulation Examples ===\n");

// Sample API response (like what you'd get from a real API)
const apiResponse = {
    statusCode: 200,
    message: "Success",
    data: {
        user: {
            id: 101,
            username: "testuser",
            email: "test@example.com",
            profile: {
                firstName: "John",
                lastName: "Doe",
                age: 28,
                address: {
                    city: "Atlanta",
                    state: "GA",
                    zip: "30301"
                }
            }
        },
        timestamp: "2026-02-21T10:30:00Z"
    }
};

// ============================================
// Part 1: Accessing Nested Properties
// ============================================

console.log("=== Accessing Nested Properties ===\n");

// The long way (dot notation)
console.log("Status Code:", apiResponse.statusCode);
console.log("User ID:", apiResponse.data.user.id);
console.log("Username:", apiResponse.data.user.username);
console.log("First Name:", apiResponse.data.user.profile.firstName);
console.log("City:", apiResponse.data.user.profile.address.city);
console.log("\n");

// ============================================
// Part 2: Destructuring - The Shortcut!
// ============================================

console.log("=== Destructuring Examples ===\n");

// Extract specific properties
const { statusCode, message } = apiResponse;
console.log("Status:", statusCode);
console.log("Message:", message);
console.log("\n");

// Extract nested properties
const { data } = apiResponse;
console.log("Data object:", data);
console.log("\n");

// Extract even deeper
const { user } = apiResponse.data;
console.log("User:", user);
console.log("\n");

// Extract multiple levels at once
const { 
    data: { 
        user: { 
            username, 
            email, 
            profile: { firstName, lastName } 
        } 
    } 
} = apiResponse;

console.log("Extracted values:");
console.log("Username:", username);
console.log("Email:", email);
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("\n");

// Rename while destructuring
const { 
    data: { 
        user: { 
            id: userId, 
            username: userName 
        } 
    } 
} = apiResponse;

console.log("Renamed variables:");
console.log("User ID:", userId);
console.log("User Name:", userName);
console.log("\n");

// ============================================
// Part 3: Default Values
// ============================================

console.log("=== Default Values ===\n");

// If property doesn't exist, use default
const { 
    data: { 
        user: { 
            role = "user",  // Default if not present
            isActive = true  // Default if not present
        } 
    } 
} = apiResponse;

console.log("Role (with default):", role);
console.log("Is Active (with default):", isActive);
console.log("\n");

// ============================================
// Part 4: Destructuring Arrays
// ============================================

console.log("=== Array Destructuring ===\n");

const testResults = ["PASS", "FAIL", "PASS", "PASS", "FAIL"];

// Extract specific positions
const [first, second, third] = testResults;
console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);
console.log("\n");

// Skip items with commas
const [firstTest, , thirdTest] = testResults;
console.log("First test:", firstTest);
console.log("Third test (skipped second):", thirdTest);
console.log("\n");

// Rest operator - get remaining items
const [firstResult, ...remainingResults] = testResults;
console.log("First:", firstResult);
console.log("Remaining:", remainingResults);
console.log("\n");

// ============================================
// Part 5: Combining Objects
// ============================================

console.log("=== Combining Objects ===\n");

const testConfig = {
    timeout: 5000,
    retries: 3
};

const envConfig = {
    apiUrl: "https://api.example.com",
    environment: "test"
};

// Spread operator - combine objects
const fullConfig = { ...testConfig, ...envConfig };
console.log("Combined config:", fullConfig);
console.log("\n");

// Override properties
const customConfig = {
    ...testConfig,
    timeout: 10000  // Override the timeout
};
console.log("Custom config:", customConfig);
console.log("\n");

// ============================================
// Part 6: Object Methods
// ============================================

console.log("=== Object Methods ===\n");

const testData = {
    id: 1,
    name: "Login Test",
    status: "PASS",
    duration: 250
};

// Get all keys
const keys = Object.keys(testData);
console.log("Keys:", keys);
console.log("\n");

// Get all values
const values = Object.values(testData);
console.log("Values:", values);
console.log("\n");

// Get key-value pairs
const entries = Object.entries(testData);
console.log("Entries:", entries);
console.log("\n");

// Loop through object
console.log("Looping through object:");
Object.entries(testData).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
console.log("\n");

// ============================================
// Part 7: Practical QA Example
// ============================================

console.log("=== Practical QA Example ===\n");

// API returns array of users
const usersResponse = {
    success: true,
    data: [
        { id: 1, name: "Alice", email: "alice@test.com", status: "active" },
        { id: 2, name: "Bob", email: "bob@test.com", status: "inactive" },
        { id: 3, name: "Charlie", email: "charlie@test.com", status: "active" }
    ]
};

// Extract data with destructuring
const { success, data: users } = usersResponse;

console.log("API Success:", success);
console.log("Number of users:", users.length);
console.log("\n");

// Get all active users
const activeUsers = users.filter(({ status }) => status === "active");
console.log("Active users:", activeUsers);
console.log("\n");

// Get just the emails of active users
const activeEmails = users
    .filter(({ status }) => status === "active")
    .map(({ email }) => email);
console.log("Active user emails:", activeEmails);
console.log("\n");

// Find user by ID using destructuring
const targetId = 2;
const foundUser = users.find(({ id }) => id === targetId);
console.log(`User with ID ${targetId}:`, foundUser);
console.log("\n");

// Build summary
const userSummary = {
    total: users.length,
    active: users.filter(u => u.status === "active").length,
    inactive: users.filter(u => u.status === "inactive").length,
    emails: users.map(u => u.email)
};

console.log("User Summary:", userSummary);
console.log("\n");