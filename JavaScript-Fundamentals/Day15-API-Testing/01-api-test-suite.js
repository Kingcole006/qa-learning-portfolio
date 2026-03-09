// ============================================
// COMPLETE API TEST SUITE
// Combining Days 11-14 Skills
// ============================================

// ============================================
// PART 1: SETUP - Import Our Tools
// ============================================

console.log("=== API Test Suite ===\n");

// Our assertion library from Day 14
function expect(actual) {
    return {
        toBe: function(expected) {
            const passed = actual === expected;
            if (passed) {
                console.log(`    ✓ ${actual} === ${expected}`);
            } else {
                console.log(`    ✗ Expected ${expected}, got ${actual}`);
                throw new Error(`Assertion failed: ${actual} !== ${expected}`);
            }
            return passed;
        },
        
        toBeGreaterThan: function(expected) {
            const passed = actual > expected;
            if (passed) {
                console.log(`    ✓ ${actual} > ${expected}`);
            } else {
                console.log(`    ✗ ${actual} should be > ${expected}`);
                throw new Error(`Assertion failed: ${actual} <= ${expected}`);
            }
            return passed;
        },
        
        toBeLessThan: function(expected) {
            const passed = actual < expected;
            if (passed) {
                console.log(`    ✓ ${actual} < ${expected}`);
            } else {
                console.log(`    ✗ ${actual} should be < ${expected}`);
                throw new Error(`Assertion failed: ${actual} >= ${expected}`);
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
                throw new Error(`Assertion failed: does not contain ${expected}`);
            }
            return passed;
        },
        
        toHaveLength: function(expected) {
            const passed = actual.length === expected;
            if (passed) {
                console.log(`    ✓ Length is ${expected}`);
            } else {
                console.log(`    ✗ Expected length ${expected}, got ${actual.length}`);
                throw new Error(`Assertion failed: length ${actual.length} !== ${expected}`);
            }
            return passed;
        }
    };
}

// ============================================
// PART 2: API UTILITIES
// ============================================

class APITester {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.results = {
            total: 0,
            passed: 0,
            failed: 0
        };
    }
    
    // Make GET request
    async get(endpoint) {
        const url = `${this.baseURL}${endpoint}`;
        console.log(`  → GET ${url}`);
        
        const startTime = Date.now();
        const response = await fetch(url);
        const responseTime = Date.now() - startTime;
        
        const data = await response.json();
        
        return {
            status: response.status,
            data: data,
            responseTime: responseTime,
            headers: response.headers
        };
    }
    
    // Make POST request
    async post(endpoint, body) {
        const url = `${this.baseURL}${endpoint}`;
        console.log(`  → POST ${url}`);
        
        const startTime = Date.now();
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const responseTime = Date.now() - startTime;
        
        const data = await response.json();
        
        return {
            status: response.status,
            data: data,
            responseTime: responseTime
        };
    }
    
    // Validate response
    validateResponse(response, expectedStatus = 200, maxTime = 2000) {
        console.log(`  → Validating response...`);
        
        // Check status
        expect(response.status).toBe(expectedStatus);
        
        // Check response time
        expect(response.responseTime).toBeLessThan(maxTime);
        
        // Check has data
        const hasData = response.data !== null && response.data !== undefined;
        expect(hasData).toBe(true);
        
        console.log(`  ✓ Response valid\n`);
    }
}

// ============================================
// PART 3: TEST SUITE
// ============================================

class TestSuite {
    constructor(name) {
        this.name = name;
        this.tests = [];
        this.results = {
            total: 0,
            passed: 0,
            failed: 0
        };
    }
    
    test(name, testFn) {
        this.tests.push({ name, testFn });
    }
    
    async run() {
        console.log(`\n╔════════════════════════════════════════════╗`);
        console.log(`║  ${this.name.padEnd(42)}║`);
        console.log(`╚════════════════════════════════════════════╝\n`);
        
        for (const test of this.tests) {
            this.results.total++;
            
            try {
                console.log(`● ${test.name}`);
                const startTime = Date.now();
                
                await test.testFn();
                
                const duration = Date.now() - startTime;
                console.log(`  ✓ PASS (${duration}ms)\n`);
                this.results.passed++;
                
            } catch (error) {
                console.log(`  ✗ FAIL: ${error.message}\n`);
                this.results.failed++;
            }
        }
        
        this.printSummary();
    }
    
    printSummary() {
        console.log(`${'='.repeat(50)}`);
        console.log(`Test Suite: ${this.name}`);
        console.log(`${'='.repeat(50)}`);
        console.log(`Tests:   ${this.results.total} total`);
        console.log(`Passed:  ${this.results.passed} ✓`);
        console.log(`Failed:  ${this.results.failed} ✗`);
        
        if (this.results.total > 0) {
            const passRate = ((this.results.passed / this.results.total) * 100).toFixed(1);
            console.log(`Pass Rate: ${passRate}%`);
        }
        
        console.log(`${'='.repeat(50)}\n`);
    }
}

// ============================================
// PART 4: ACTUAL TESTS
// ============================================

async function runAllTests() {
    
    // Create API tester
    const api = new APITester('https://jsonplaceholder.typicode.com');
    
    // Create test suite
    const suite = new TestSuite('JSONPlaceholder API Tests');
    
    // ==========================================
    // Test 1: Get All Users
    // ==========================================
    
    suite.test('GET /users - Returns all users', async () => {
        const response = await api.get('/users');
        
        // Validate response
        api.validateResponse(response);
        
        // Check we got users
        expect(response.data.length).toBeGreaterThan(0);
        expect(response.data.length).toBe(10);
        
        // Check first user has required fields
        const firstUser = response.data[0];
        expect(firstUser.id).toBe(1);
        expect(firstUser.name).toContain('Leanne');
        expect(firstUser.email).toContain('@');
    });
    
    // ==========================================
    // Test 2: Get Single User
    // ==========================================
    
    suite.test('GET /users/1 - Returns specific user', async () => {
        const response = await api.get('/users/1');
        
        // Validate response
        api.validateResponse(response);
        
        // Check user details
        expect(response.data.id).toBe(1);
        expect(response.data.name).toContain('Leanne');
        expect(response.data.username).toContain('Bret');
        expect(response.data.email).toContain('@');
    });
    
    // ==========================================
    // Test 3: Get User Posts
    // ==========================================
    
    suite.test('GET /posts?userId=1 - Returns user posts', async () => {
        const response = await api.get('/posts?userId=1');
        
        // Validate response
        api.validateResponse(response);
        
        // Check we got posts
        expect(response.data.length).toBeGreaterThan(0);
        
        // Check all posts belong to user 1
        const allBelongToUser = response.data.every(post => post.userId === 1);
        expect(allBelongToUser).toBe(true);
    });
    
    // ==========================================
    // Test 4: Create New Post
    // ==========================================
    
    suite.test('POST /posts - Creates new post', async () => {
        const newPost = {
            title: 'Test Post',
            body: 'This is a test post body',
            userId: 1
        };
        
        const response = await api.post('/posts', newPost);
        
        // Validate response (201 for created)
        expect(response.status).toBe(201);
        expect(response.responseTime).toBeLessThan(2000);
        
        // Check returned data
        expect(response.data.title).toBe('Test Post');
        expect(response.data.body).toBe('This is a test post body');
        expect(response.data.userId).toBe(1);
        expect(response.data.id).toBeGreaterThan(0);
    });
    
    // ==========================================
    // Test 5: Data Validation
    // ==========================================
    
    suite.test('GET /users - Validates all users have email', async () => {
        const response = await api.get('/users');
        
        // Check every user has email with @
        const users = response.data;
        
        users.forEach((user, index) => {
            console.log(`    Checking user ${index + 1}...`);
            expect(user.email).toContain('@');
        });
        
        console.log(`    ✓ All ${users.length} users have valid emails`);
    });
    
    // ==========================================
    // Test 6: Performance Check
    // ==========================================
    
    suite.test('Performance - All endpoints under 1000ms', async () => {
        const endpoints = ['/users', '/posts', '/comments'];
        
        for (const endpoint of endpoints) {
            console.log(`    Testing ${endpoint}...`);
            const response = await api.get(endpoint);
            expect(response.responseTime).toBeLessThan(1000);
        }
        
        console.log(`    ✓ All endpoints performed well`);
    });
    
    // Run the suite!
    await suite.run();
}

// ============================================
// RUN IT!
// ============================================

runAllTests();