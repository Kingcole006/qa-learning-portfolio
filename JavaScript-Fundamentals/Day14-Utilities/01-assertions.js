// ============================================
// CUSTOM ASSERTION FUNCTIONS
// ============================================

console.log("=== Building Custom Assertions ===\n");

// ============================================
// Part 1: Basic Expect Function
// ============================================

function expect(actual) {
    return {
        toBe: function(expected) {
            if (actual === expected) {
                console.log(`✓ PASS: Expected ${expected}, got ${actual}`);
                return true;
            } else {
                console.log(`✗ FAIL: Expected ${expected}, got ${actual}`);
                return false;
            }
        }
    };
}

// Test it!
console.log("Basic Assertions:");
expect(5).toBe(5);           // Pass
expect("hello").toBe("hello"); // Pass
expect(10).toBe(5);          // Fail

console.log("\n");

// ============================================
// Part 2: Multiple Assertion Methods
// ============================================

function expect(actual) {
    return {
        // Strict equality (===)
        toBe: function(expected) {
            const passed = actual === expected;
            if (passed) {
                console.log(`✓ PASS: ${actual} === ${expected}`);
            } else {
                console.log(`✗ FAIL: Expected ${expected}, got ${actual}`);
            }
            return passed;
        },
        
        // Not equal (!==)
        notToBe: function(expected) {
            const passed = actual !== expected;
            if (passed) {
                console.log(`✓ PASS: ${actual} !== ${expected}`);
            } else {
                console.log(`✗ FAIL: Expected not ${expected}, got ${actual}`);
            }
            return passed;
        },
        
        // Greater than
        toBeGreaterThan: function(expected) {
            const passed = actual > expected;
            if (passed) {
                console.log(`✓ PASS: ${actual} > ${expected}`);
            } else {
                console.log(`✗ FAIL: Expected ${actual} to be greater than ${expected}`);
            }
            return passed;
        },
        
        // Less than
        toBeLessThan: function(expected) {
            const passed = actual < expected;
            if (passed) {
                console.log(`✓ PASS: ${actual} < ${expected}`);
            } else {
                console.log(`✗ FAIL: Expected ${actual} to be less than ${expected}`);
            }
            return passed;
        },
        
        // Contains (for strings or arrays)
        toContain: function(expected) {
            let passed = false;
            
            if (typeof actual === 'string') {
                passed = actual.includes(expected);
            } else if (Array.isArray(actual)) {
                passed = actual.includes(expected);
            }
            
            if (passed) {
                console.log(`✓ PASS: ${JSON.stringify(actual)} contains ${expected}`);
            } else {
                console.log(`✗ FAIL: Expected ${JSON.stringify(actual)} to contain ${expected}`);
            }
            return passed;
        },
        
        // Truthy/Falsy
        toBeTruthy: function() {
            const passed = !!actual;
            if (passed) {
                console.log(`✓ PASS: ${actual} is truthy`);
            } else {
                console.log(`✗ FAIL: Expected ${actual} to be truthy`);
            }
            return passed;
        },
        
        toBeFalsy: function() {
            const passed = !actual;
            if (passed) {
                console.log(`✓ PASS: ${actual} is falsy`);
            } else {
                console.log(`✗ FAIL: Expected ${actual} to be falsy`);
            }
            return passed;
        }
    };
}

console.log("Multiple Assertion Types:");

// Test toBe
expect(10).toBe(10);
expect(10).notToBe(5);

// Test comparisons
expect(10).toBeGreaterThan(5);
expect(5).toBeLessThan(10);

// Test contains
expect("hello world").toContain("world");
expect([1, 2, 3]).toContain(2);

// Test truthy/falsy
expect(true).toBeTruthy();
expect(0).toBeFalsy();

console.log("\n");

// ============================================
// Part 3: API-Specific Assertions
// ============================================

function expectResponse(response) {
    return {
        toHaveStatus: function(expectedStatus) {
            const passed = response.status === expectedStatus;
            if (passed) {
                console.log(`✓ PASS: Response status is ${expectedStatus}`);
            } else {
                console.log(`✗ FAIL: Expected status ${expectedStatus}, got ${response.status}`);
            }
            return passed;
        },
        
        toHaveProperty: function(propertyPath) {
            const keys = propertyPath.split('.');
            let current = response.data;
            let passed = true;
            
            for (const key of keys) {
                if (current && current[key] !== undefined) {
                    current = current[key];
                } else {
                    passed = false;
                    break;
                }
            }
            
            if (passed) {
                console.log(`✓ PASS: Response has property '${propertyPath}'`);
            } else {
                console.log(`✗ FAIL: Response missing property '${propertyPath}'`);
            }
            return passed;
        },
        
        toHaveResponseTime: function(maxTime) {
            const passed = response.responseTime <= maxTime;
            if (passed) {
                console.log(`✓ PASS: Response time ${response.responseTime}ms <= ${maxTime}ms`);
            } else {
                console.log(`✗ FAIL: Response time ${response.responseTime}ms > ${maxTime}ms`);
            }
            return passed;
        }
    };
}

// Test it with mock response
console.log("API Response Assertions:");

const mockResponse = {
    status: 200,
    data: {
        user: {
            id: 1,
            name: "Alice",
            email: "alice@test.com"
        }
    },
    responseTime: 150
};

expectResponse(mockResponse).toHaveStatus(200);
expectResponse(mockResponse).toHaveProperty('user.name');
expectResponse(mockResponse).toHaveProperty('user.email');
expectResponse(mockResponse).toHaveResponseTime(200);

// Test failure
expectResponse(mockResponse).toHaveProperty('user.phone'); // Fail

console.log("\n");

// ============================================
// Part 4: Test Result Tracker
// ============================================

class TestTracker {
    constructor() {
        this.results = [];
        this.currentTest = null;
    }
    
    startTest(testName) {
        this.currentTest = {
            name: testName,
            assertions: [],
            passed: true,
            startTime: Date.now()
        };
    }
    
    recordAssertion(passed, message) {
        this.currentTest.assertions.push({ passed, message });
        if (!passed) {
            this.currentTest.passed = false;
        }
    }
    
    endTest() {
        this.currentTest.endTime = Date.now();
        this.currentTest.duration = this.currentTest.endTime - this.currentTest.startTime;
        this.results.push(this.currentTest);
        this.currentTest = null;
    }
    
    getReport() {
        const total = this.results.length;
        const passed = this.results.filter(r => r.passed).length;
        const failed = total - passed;
        const totalAssertions = this.results.reduce((sum, r) => sum + r.assertions.length, 0);
        
        return {
            total,
            passed,
            failed,
            passRate: ((passed / total) * 100).toFixed(1),
            totalAssertions,
            tests: this.results
        };
    }
    
    printReport() {
        const report = this.getReport();
        
        console.log("\n=== TEST REPORT ===");
        console.log(`Total Tests: ${report.total}`);
        console.log(`Passed: ${report.passed} ✓`);
        console.log(`Failed: ${report.failed} ✗`);
        console.log(`Pass Rate: ${report.passRate}%`);
        console.log(`Total Assertions: ${report.totalAssertions}`);
        
        console.log("\nTest Details:");
        report.tests.forEach((test, index) => {
            const status = test.passed ? '✓' : '✗';
            console.log(`${index + 1}. ${status} ${test.name} (${test.duration}ms)`);
            console.log(`   Assertions: ${test.assertions.length}`);
        });
    }
}

// Create tracker
const tracker = new TestTracker();

// Run tests
tracker.startTest("User API Test");
expect(200).toBe(200);
expect("alice@test.com").toContain("@");
tracker.recordAssertion(true, "Status is 200");
tracker.recordAssertion(true, "Email is valid");
tracker.endTest();

tracker.startTest("Response Time Test");
expect(150).toBeLessThan(200);
tracker.recordAssertion(true, "Response time acceptable");
tracker.endTest();

tracker.startTest("Failing Test Example");
expect(10).toBe(5);
tracker.recordAssertion(false, "Values don't match");
tracker.endTest();

// Print report
tracker.printReport();