// ============================================
// ADVANCED API TESTING PATTERNS
// Building on what you just learned!
// ============================================

// Our simple expect from before
function expect(actual) {
    return {
        toBe: function(expected) {
            const passed = actual === expected;
            if (passed) {
                console.log(`    ✓ ${actual} === ${expected}`);
            } else {
                console.log(`    ✗ Expected ${expected}, got ${actual}`);
                throw new Error(`Failed: ${actual} !== ${expected}`);
            }
            return passed;
        },
        
        toBeGreaterThan: function(expected) {
            const passed = actual > expected;
            if (passed) {
                console.log(`    ✓ ${actual} > ${expected}`);
            } else {
                console.log(`    ✗ ${actual} should be > ${expected}`);
                throw new Error(`Failed: ${actual} <= ${expected}`);
            }
            return passed;
        },
        
        toContain: function(expected) {
            let passed = false;
            if (typeof actual === 'string') {
                passed = actual.includes(expected);
            } else if (Array.isArray(actual)) {
                passed = actual.includes(expected);
            }
            
            if (passed) {
                console.log(`    ✓ Contains "${expected}"`);
            } else {
                console.log(`    ✗ Should contain "${expected}"`);
                throw new Error(`Failed: does not contain ${expected}`);
            }
            return passed;
        }
    };
}

// ============================================
// PATTERN 1: Testing Data Relationships
// ============================================

async function testDataRelationships() {
    console.log("\n=== Pattern 1: Testing Data Relationships ===\n");
    
    console.log("Test: User's posts actually belong to that user\n");
    
    // Step 1: Get a user
    console.log("  Step 1: Getting user 1...");
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await userResponse.json();
    console.log(`  ✓ Got user: ${user.name}\n`);
    
    // Step 2: Get that user's posts
    console.log("  Step 2: Getting posts for user 1...");
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
    const posts = await postsResponse.json();
    console.log(`  ✓ Got ${posts.length} posts\n`);
    
    // Step 3: Verify ALL posts belong to user 1
    console.log("  Step 3: Checking all posts belong to user 1...");
    const allBelongToUser = posts.every(post => post.userId === 1);
    expect(allBelongToUser).toBe(true);
    console.log(`  ✓ All ${posts.length} posts belong to user 1!\n`);
    
    console.log("✓ RELATIONSHIP TEST PASSED\n");
}

// ============================================
// PATTERN 2: Testing Data Consistency
// ============================================

async function testDataConsistency() {
    console.log("\n=== Pattern 2: Testing Data Consistency ===\n");
    
    console.log("Test: All users have required fields\n");
    
    // Get all users
    console.log("  Getting all users...");
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(`  ✓ Got ${users.length} users\n`);
    
    // Check each user
    console.log("  Checking each user has required fields...\n");
    
    const requiredFields = ['id', 'name', 'username', 'email'];
    
    users.forEach((user, index) => {
        console.log(`    User ${index + 1}: ${user.name}`);
        
        // Check each required field exists
        requiredFields.forEach(field => {
            const hasField = user[field] !== undefined && user[field] !== null;
            expect(hasField).toBe(true);
        });
        
        // Extra check: email has @
        expect(user.email).toContain('@');
        
        console.log(`    ✓ User ${index + 1} valid\n`);
    });
    
    console.log("✓ CONSISTENCY TEST PASSED\n");
}

// ============================================
// PATTERN 3: Testing Error Cases
// ============================================

async function testErrorHandling() {
    console.log("\n=== Pattern 3: Testing Error Cases ===\n");
    
    console.log("Test: Requesting non-existent resource\n");
    
    // Try to get user that doesn't exist
    console.log("  Requesting user 99999 (doesn't exist)...");
    const response = await fetch('https://jsonplaceholder.typicode.com/users/99999');
    
    console.log(`  Response status: ${response.status}`);
    
    // Note: JSONPlaceholder returns 200 with empty object
    // Real APIs would return 404
    console.log("  (JSONPlaceholder returns 200 even for missing data)\n");
    
    const data = await response.json();
    console.log("  Response data:", JSON.stringify(data));
    console.log("\n✓ ERROR HANDLING TEST COMPLETE\n");
}

// ============================================
// PATTERN 4: Testing with Multiple Requests
// ============================================

async function testMultipleRequests() {
    console.log("\n=== Pattern 4: Testing Multiple Requests ===\n");
    
    console.log("Test: Get user, then their posts, then first post's comments\n");
    
    // Request 1: Get user
    console.log("  Request 1: Getting user 1...");
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await userResponse.json();
    console.log(`  ✓ User: ${user.name}\n`);
    
    // Request 2: Get their posts
    console.log("  Request 2: Getting user's posts...");
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await postsResponse.json();
    console.log(`  ✓ Found ${posts.length} posts\n`);
    
    // Request 3: Get comments on first post
    const firstPost = posts[0];
    console.log(`  Request 3: Getting comments on post "${firstPost.title}"...`);
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`);
    const comments = await commentsResponse.json();
    console.log(`  ✓ Found ${comments.length} comments\n`);
    
    // Verify the chain
    console.log("  Verifying the chain:");
    console.log(`    User ${user.name} (ID: ${user.id})`);
    console.log(`    → Has ${posts.length} posts`);
    console.log(`    → First post has ${comments.length} comments`);
    
    expect(posts.length).toBeGreaterThan(0);
    expect(comments.length).toBeGreaterThan(0);
    
    console.log("\n✓ MULTIPLE REQUESTS TEST PASSED\n");
}

// ============================================
// RUN ALL PATTERNS
// ============================================

async function runAdvancedTests() {
    console.log("╔════════════════════════════════════════════╗");
    console.log("║   ADVANCED API TESTING PATTERNS            ║");
    console.log("╚════════════════════════════════════════════╝");
    
    await testDataRelationships();
    await testDataConsistency();
    await testErrorHandling();
    await testMultipleRequests();
    
    console.log("╔════════════════════════════════════════════╗");
    console.log("║   ALL ADVANCED TESTS COMPLETE! ✓           ║");
    console.log("╚════════════════════════════════════════════╝\n");
}

runAdvancedTests();