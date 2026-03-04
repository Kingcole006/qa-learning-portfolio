// ============================================
// TEST DATA GENERATORS
// ============================================

console.log("=== Building Test Data Generators ===\n");

// ============================================
// Part 1: Random Data Generators
// ============================================

const DataGenerator = {
    // Random number between min and max
    randomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    // Random item from array
    randomItem: function(array) {
        return array[Math.floor(Math.random() * array.length)];
    },
    
    // Random string of specified length
    randomString: function(length) {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    },
    
    // Random email
    randomEmail: function() {
        const domains = ['test.com', 'example.com', 'demo.org'];
        const username = this.randomString(8);
        const domain = this.randomItem(domains);
        return `${username}@${domain}`;
    },
    
    // Random boolean
    randomBoolean: function() {
        return Math.random() > 0.5;
    },
    
    // Random date in the past N days
    randomPastDate: function(daysAgo) {
        const now = new Date();
        const past = new Date(now.getTime() - (daysAgo * 24 * 60 * 60 * 1000));
        return past.toISOString();
    }
};

// Test the generators
console.log("Random Data Examples:");
console.log("Number (1-100):", DataGenerator.randomNumber(1, 100));
console.log("String (10 chars):", DataGenerator.randomString(10));
console.log("Email:", DataGenerator.randomEmail());
console.log("Boolean:", DataGenerator.randomBoolean());
console.log("Past Date (30 days):", DataGenerator.randomPastDate(30));
console.log("\n");

// ============================================
// Part 2: User Generator
// ============================================

class UserGenerator {
    constructor() {
        this.firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'];
        this.lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia'];
        this.cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
        this.states = ['NY', 'CA', 'IL', 'TX', 'AZ'];
        this.userIdCounter = 1;
    }
    
    generateUser(overrides = {}) {
        const firstName = overrides.firstName || DataGenerator.randomItem(this.firstNames);
        const lastName = overrides.lastName || DataGenerator.randomItem(this.lastNames);
        const username = overrides.username || `${firstName.toLowerCase()}${DataGenerator.randomNumber(100, 999)}`;
        
        return {
            id: overrides.id || this.userIdCounter++,
            firstName: firstName,
            lastName: lastName,
            fullName: `${firstName} ${lastName}`,
            username: username,
            email: overrides.email || `${username}@test.com`,
            age: overrides.age || DataGenerator.randomNumber(18, 65),
            isActive: overrides.isActive !== undefined ? overrides.isActive : true,
            address: {
                city: overrides.city || DataGenerator.randomItem(this.cities),
                state: overrides.state || DataGenerator.randomItem(this.states),
                zip: DataGenerator.randomString(5)
            },
            createdAt: DataGenerator.randomPastDate(30)
        };
    }
    
    generateUsers(count, overrides = {}) {
        const users = [];
        for (let i = 0; i < count; i++) {
            users.push(this.generateUser(overrides));
        }
        return users;
    }
}

// Test user generator
console.log("Generated Users:");
const userGen = new UserGenerator();

const user1 = userGen.generateUser();
console.log("User 1:", user1);

const user2 = userGen.generateUser({ firstName: "Cole", age: 28 });
console.log("\nUser 2 (with overrides):", user2);

const batchUsers = userGen.generateUsers(3);
console.log("\nBatch of 3 users:");
batchUsers.forEach((user, index) => {
    console.log(`${index + 1}. ${user.fullName} (${user.email})`);
});

console.log("\n");

// ============================================
// Part 3: API Payload Generator
// ============================================

class PayloadGenerator {
    static createUserPayload(userData = {}) {
        return {
            firstName: userData.firstName || "Test",
            lastName: userData.lastName || "User",
            email: userData.email || DataGenerator.randomEmail(),
            password: userData.password || "Password123!",
            age: userData.age || DataGenerator.randomNumber(18, 65),
            acceptTerms: userData.acceptTerms !== undefined ? userData.acceptTerms : true
        };
    }
    
    static createLoginPayload(email, password) {
        return {
            email: email || DataGenerator.randomEmail(),
            password: password || "Password123!"
        };
    }
    
    static createPostPayload(postData = {}) {
        return {
            title: postData.title || `Test Post ${DataGenerator.randomString(5)}`,
            body: postData.body || "This is a test post body with some content.",
            userId: postData.userId || DataGenerator.randomNumber(1, 10),
            tags: postData.tags || ['test', 'automation'],
            published: postData.published !== undefined ? postData.published : true
        };
    }
    
    static createCommentPayload(commentData = {}) {
        return {
            postId: commentData.postId || DataGenerator.randomNumber(1, 100),
            name: commentData.name || "Test Commenter",
            email: commentData.email || DataGenerator.randomEmail(),
            body: commentData.body || "This is a test comment."
        };
    }
}

// Test payload generator
console.log("API Payloads:");

const userPayload = PayloadGenerator.createUserPayload();
console.log("User Registration Payload:", userPayload);

const loginPayload = PayloadGenerator.createLoginPayload("test@example.com", "pass123");
console.log("\nLogin Payload:", loginPayload);

const postPayload = PayloadGenerator.createPostPayload({ title: "My Test Post" });
console.log("\nPost Payload:", postPayload);

console.log("\n");

// ============================================
// Part 4: Test Data Factory
// ============================================

class TestDataFactory {
    static createValidUser() {
        return {
            firstName: "Valid",
            lastName: "User",
            email: "valid.user@test.com",
            age: 25,
            isActive: true
        };
    }
    
    static createInvalidUser() {
        return {
            firstName: "",           // Invalid - empty
            lastName: "User",
            email: "invalid-email",  // Invalid - no @
            age: -5,                 // Invalid - negative
            isActive: true
        };
    }
    
    static createEdgeCaseUser() {
        return {
            firstName: "A",          // Edge - minimum length
            lastName: "B",
            email: "a@b.c",         // Edge - minimal email
            age: 18,                // Edge - minimum age
            isActive: true
        };
    }
    
    static createTestScenarios() {
        return {
            valid: this.createValidUser(),
            invalid: this.createInvalidUser(),
            edgeCase: this.createEdgeCaseUser(),
            maxLength: {
                firstName: "A".repeat(50),
                lastName: "B".repeat(50),
                email: `${"a".repeat(50)}@test.com`,
                age: 120,
                isActive: true
            }
        };
    }
}

// Test data factory
console.log("Test Scenarios:");

const scenarios = TestDataFactory.createTestScenarios();
console.log("Valid User:", scenarios.valid);
console.log("Invalid User:", scenarios.invalid);
console.log("Edge Case User:", scenarios.edgeCase);
console.log("Max Length User:", scenarios.maxLength);

console.log("\n");

// ============================================
// Part 5: Practical Example - Complete Test Data Setup
// ============================================

console.log("=== Practical Example: Test Data Setup ===\n");

// Generate a complete test dataset
const testDataSet = {
    users: new UserGenerator().generateUsers(5),
    adminUser: new UserGenerator().generateUser({ 
        firstName: "Admin", 
        email: "admin@test.com",
        isActive: true
    }),
    testPayloads: {
        registration: PayloadGenerator.createUserPayload(),
        login: PayloadGenerator.createLoginPayload(),
        post: PayloadGenerator.createPostPayload()
    },
    scenarios: TestDataFactory.createTestScenarios()
};

console.log("Complete Test Dataset:");
console.log(`- ${testDataSet.users.length} regular users generated`);
console.log(`- 1 admin user: ${testDataSet.adminUser.email}`);
console.log(`- ${Object.keys(testDataSet.testPayloads).length} test payloads ready`);
console.log(`- ${Object.keys(testDataSet.scenarios).length} test scenarios prepared`);

console.log("\nFirst regular user:");
console.log(testDataSet.users[0]);

console.log("\n=== All Data Generators Complete! ===");