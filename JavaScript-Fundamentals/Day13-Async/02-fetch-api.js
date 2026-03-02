// ============================================
// MAKING REAL API CALLS WITH FETCH
// ============================================

console.log("=== Real API Calls with Fetch ===\n");

// ============================================
// Part 1: Basic GET Request
// ============================================

async function getUsers() {
    console.log("Fetching users from real API...");
    
    try {
        // fetch returns a Promise
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Check if request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse JSON from response
        const users = await response.json();
        
        console.log(`Got ${users.length} users!`);
        console.log("First user:", users[0]);
        
        return users;
        
    } catch (error) {
        console.log("Error fetching users:", error.message);
        return null;
    }
}

// Call it!
getUsers().then(() => {
    console.log("\n--- Part 1 Complete ---\n");
});

// ============================================
// Part 2: GET Single User by ID
// ============================================

async function getUserById(userId) {
    console.log(`Fetching user ${userId}...`);
    
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        if (!response.ok) {
            throw new Error(`User not found! Status: ${response.status}`);
        }
        
        const user = await response.json();
        
        console.log("User details:");
        console.log(`- ID: ${user.id}`);
        console.log(`- Name: ${user.name}`);
        console.log(`- Email: ${user.email}`);
        console.log(`- City: ${user.address.city}`);
        
        return user;
        
    } catch (error) {
        console.log("Error:", error.message);
        return null;
    }
}

// Wait for Part 1, then run Part 2
setTimeout(() => {
    getUserById(1).then(() => {
        console.log("\n--- Part 2 Complete ---\n");
    });
}, 2000);

// ============================================
// Part 3: Process API Response with Array Methods
// ============================================

async function analyzeUsers() {
    console.log("Analyzing users from API...");
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        // Use Day 12 skills! (map, filter, etc.)
        
        // Get all emails
        const emails = users.map(user => user.email);
        console.log("All emails:", emails);
        
        // Get users from specific city
        const usersInGwenborough = users.filter(user => 
            user.address.city === "Gwenborough"
        );
        console.log(`\nUsers in Gwenborough: ${usersInGwenborough.length}`);
        
        // Get just names
        const names = users.map(user => user.name);
        console.log("All names:", names);
        
        // Count total users
        const totalUsers = users.length;
        console.log(`\nTotal users: ${totalUsers}`);
        
        return users;
        
    } catch (error) {
        console.log("Error:", error.message);
        return null;
    }
}

setTimeout(() => {
    analyzeUsers().then(() => {
        console.log("\n--- Part 3 Complete ---\n");
    });
}, 4000);

// ============================================
// Part 4: Multiple Sequential API Calls
// ============================================

async function getUserWithPosts(userId) {
    console.log(`Getting user ${userId} and their posts...`);
    
    try {
        // First API call - get user
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await userResponse.json();
        
        console.log(`Got user: ${user.name}`);
        
        // Second API call - get their posts
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await postsResponse.json();
        
        console.log(`User has ${posts.length} posts`);
        
        // Return combined data
        return {
            user: user,
            posts: posts,
            postCount: posts.length
        };
        
    } catch (error) {
        console.log("Error:", error.message);
        return null;
    }
}

setTimeout(() => {
    getUserWithPosts(1).then((result) => {
        if (result) {
            console.log("\nSummary:");
            console.log(`${result.user.name} has written ${result.postCount} posts`);
        }
        console.log("\n--- Part 4 Complete ---\n");
    });
}, 6000);

// ============================================
// Part 5: Handling Different HTTP Status Codes
// ============================================

async function testEndpoint(userId) {
    console.log(`Testing endpoint for user ${userId}...`);
    
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        // Check different status codes
        if (response.status === 200) {
            const user = await response.json();
            console.log("✓ 200 OK - User found:", user.name);
            return { status: "PASS", data: user };
        } else if (response.status === 404) {
            console.log("✗ 404 Not Found - User doesn't exist");
            return { status: "FAIL", error: "Not Found" };
        } else if (response.status >= 500) {
            console.log("✗ 500+ Server Error");
            return { status: "FAIL", error: "Server Error" };
        } else {
            console.log(`✗ Unexpected status: ${response.status}`);
            return { status: "FAIL", error: `Status ${response.status}` };
        }
        
    } catch (error) {
        console.log("✗ Network Error:", error.message);
        return { status: "ERROR", error: error.message };
    }
}

// Test valid user
setTimeout(() => {
    testEndpoint(1).then(() => {
        // Test invalid user (will get 404 or empty response)
        return testEndpoint(999);
    }).then(() => {
        console.log("\n--- Part 5 Complete ---\n");
        console.log("=== All API Tests Complete! ===");
    });
}, 8000);