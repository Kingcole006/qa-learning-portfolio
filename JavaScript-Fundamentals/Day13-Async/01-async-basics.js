// ============================================
// THE PROBLEM: Synchronous (Blocking) Code
// ============================================

console.log("=== Synchronous Example ===\n");

function getUserData() {
    console.log("Fetching user data...");
    // Imagine this takes 2 seconds (like an API call)
    // But this is fake - it happens instantly
    console.log("User data received!");
    return { id: 1, name: "Alice" };
}

console.log("Start");
const user = getUserData();
console.log("User:", user);
console.log("End");

console.log("\n");

// This runs instantly - no waiting
// But real API calls take time!

// ============================================
// ASYNCHRONOUS: setTimeout
// ============================================

console.log("=== Asynchronous Example (setTimeout) ===\n");

console.log("Start");

// This is asynchronous - it schedules code for later
setTimeout(() => {
    console.log("This happens after 2 seconds!");
}, 2000);

console.log("End");

// Output order: Start, End, (2 sec delay), This happens after 2 seconds!
// JavaScript didn't wait - it continued to "End"!

console.log("\n");

// ============================================
// CALLBACKS: The Old Way (Callback Hell)
// ============================================

console.log("=== Callbacks Example ===\n");

// Simulating an API call with callback
function fetchUser(callback) {
    console.log("Fetching user...");
    
    setTimeout(() => {
        const user = { id: 1, name: "Alice" };
        callback(user);  // Call the callback with the result
    }, 1000);
}

// Using the callback
console.log("Start");

fetchUser((user) => {
    console.log("Got user:", user);
});

console.log("End (doesn't wait for user!)");

console.log("\n");

// This is messy when you have multiple API calls!

// ============================================
// PROMISES: The Better Way
// ============================================

console.log("=== Promises Example ===\n");

// Creating a Promise
function fetchUserPromise() {
    console.log("Fetching user with Promise...");
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: 1, name: "Alice" };
            resolve(user);  // Success - send back user
            // reject("Error!");  // Failure - send back error
        }, 1000);
    });
}

// Using the Promise
console.log("Start");

fetchUserPromise()
    .then((user) => {
        console.log("Promise resolved! User:", user);
    })
    .catch((error) => {
        console.log("Promise rejected! Error:", error);
    });

console.log("End");

console.log("\n");

// ============================================
// ASYNC/AWAIT: The Modern Way (Best!)
// ============================================

console.log("=== Async/Await Example ===\n");

// Same Promise from before
function fetchUserAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Alice" });
        }, 1000);
    });
}

// Using async/await - looks synchronous!
async function getUser() {
    console.log("Start");
    
    const user = await fetchUserAsync();  // Wait here!
    console.log("Got user:", user);
    
    console.log("End");
}

// Call the async function
getUser();

console.log("\n");

// ============================================
// ERROR HANDLING: Try/Catch with Async/Await
// ============================================

console.log("=== Error Handling Example ===\n");

function fetchDataMightFail(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("API Error: Server returned 500");
            } else {
                resolve({ data: "Success!" });
            }
        }, 1000);
    });
}

// Good async function with error handling
async function testApiCall(shouldFail) {
    try {
        console.log("Making API call...");
        const response = await fetchDataMightFail(shouldFail);
        console.log("Success:", response);
        return response;
    } catch (error) {
        console.log("Error caught:", error);
        return null;
    }
}

// Test success
testApiCall(false).then(() => {
    console.log("First test done\n");
    
    // Test failure
    testApiCall(true);
});