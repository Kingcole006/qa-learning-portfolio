// ============================================
// SCREENSHOT ON TEST FAILURE
// Automatically capture evidence when tests fail
// ============================================

// LINE 1: Load Playwright
const { chromium } = require('playwright'); // ✓ Playwright library loaded
const fs = require('fs'); // ✓ File system for creating folders

// LINE 4: Function to ensure screenshots folder exists
function ensureScreenshotFolder() {
    if (!fs.existsSync('screenshots/failures')) {
        fs.mkdirSync('screenshots/failures', { recursive: true }); // ✓ Creates folder if missing
        console.log("✓ Created screenshots/failures/ folder\n");
    }
}

// LINE 12: Test function with failure handling
async function testWithScreenshotOnFailure() {
    console.log("=== Screenshot on Failure Demo ===\n");
    
    // LINE 16: Ensure folder exists
    ensureScreenshotFolder(); // ✓ Creates folder if needed
    
    // LINE 19: Launch browser
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 500
    }); // ✓ Chrome opens
    
    // LINE 24: Create page
    const page = await browser.newPage(); // ✓ New tab appears
    
    // LINE 27: Track test results
    let testResults = {
        passed: 0,
        failed: 0,
        tests: []
    };
    
    try {
        // LINE 34: Create test application
        await page.setContent(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Login Test</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 50px;
                        background: #f5f5f5;
                    }
                    .login-container {
                        background: white;
                        padding: 40px;
                        border-radius: 10px;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                        max-width: 400px;
                        margin: 0 auto;
                    }
                    h2 {
                        color: #333;
                        margin-bottom: 30px;
                    }
                    input {
                        width: 100%;
                        padding: 12px;
                        margin: 10px 0;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        box-sizing: border-box;
                    }
                    button {
                        width: 100%;
                        padding: 12px;
                        background: #4CAF50;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        margin-top: 10px;
                    }
                    button:hover {
                        background: #45a049;
                    }
                    .message {
                        margin-top: 20px;
                        padding: 15px;
                        border-radius: 5px;
                        display: none;
                    }
                    .success {
                        background: #d4edda;
                        color: #155724;
                        border: 1px solid #c3e6cb;
                    }
                    .error {
                        background: #f8d7da;
                        color: #721c24;
                        border: 1px solid #f5c6cb;
                    }
                </style>
            </head>
            <body>
                <div class="login-container">
                    <h2>Login Test Page</h2>
                    <input type="text" id="username" placeholder="Username">
                    <input type="password" id="password" placeholder="Password">
                    <button id="loginBtn">Login</button>
                    <div id="message" class="message"></div>
                </div>
                
                <script>
                    document.getElementById('loginBtn').addEventListener('click', () => {
                        const username = document.getElementById('username').value;
                        const password = document.getElementById('password').value;
                        const message = document.getElementById('message');
                        
                        if (username === 'admin' && password === 'admin123') {
                            message.className = 'message success';
                            message.textContent = 'Login successful!';
                            message.style.display = 'block';
                        } else if (username && password) {
                            message.className = 'message error';
                            message.textContent = 'Invalid username or password';
                            message.style.display = 'block';
                        } else {
                            message.className = 'message error';
                            message.textContent = 'Please enter username and password';
                            message.style.display = 'block';
                        }
                    });
                </script>
            </body>
            </html>
        `); // ✓ Login page created
        
        console.log("✓ Created login test page\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // ==========================================
        // TEST 1: Valid Login (Should PASS)
        // ==========================================
        
        console.log("TEST 1: Valid Login");
        console.log("-------------------");
        
        try {
            // LINE 149: Perform login
            await page.locator('#username').fill('admin'); // ✓ Fill username
            await page.locator('#password').fill('admin123'); // ✓ Fill password
            await page.locator('#loginBtn').click(); // ✓ Click login
            
            await page.waitForTimeout(1000); // ✓ Wait for result
            
            // LINE 156: Check result
            const message = await page.locator('#message').textContent(); // ✓ Get message
            
            // LINE 159: Verify success message
            if (message.includes('Login successful')) {
                console.log("✓ TEST PASSED: Login successful");
                console.log(`  Message: "${message}"\n`);
                testResults.passed++; // ✓ Increment passed count
                testResults.tests.push({ name: 'Valid Login', status: 'PASSED' });
            } else {
                throw new Error(`Expected success message, got: "${message}"`);
            }
            
        } catch (error) {
            // LINE 169: Test failed - take screenshot!
            console.log("✗ TEST FAILED!");
            console.log(`  Error: ${error.message}`);
            
            // LINE 173: Generate timestamp
            const timestamp = new Date().toISOString().replace(/:/g, '-'); // ✓ timestamp for unique filename
            const screenshotPath = `screenshots/failures/test1-failed-${timestamp}.png`; // ✓ Failure screenshot path
            
            // LINE 177: Take screenshot of failure
            await page.screenshot({ path: screenshotPath }); // ✓ Screenshot saved
            
            console.log(`  📸 Screenshot saved: ${screenshotPath}\n`);
            
            testResults.failed++; // ✓ Increment failed count
            testResults.tests.push({ 
                name: 'Valid Login', 
                status: 'FAILED', 
                error: error.message,
                screenshot: screenshotPath
            });
        }
        
        await page.waitForTimeout(2000); // ✓ Waits 2 seconds
        
        // LINE 193: Clear form for next test
        await page.locator('#username').clear(); // ✓ Clear username
        await page.locator('#password').clear(); // ✓ Clear password
        await page.locator('#message').evaluate(el => el.style.display = 'none'); // ✓ Hide message
        
        // ==========================================
        // TEST 2: Invalid Login (Should FAIL on purpose)
        // ==========================================
        
        console.log("TEST 2: Invalid Login (Testing Screenshot on Failure)");
        console.log("-------------------------------------------------------");
        
        try {
            // LINE 206: Perform invalid login
            await page.locator('#username').fill('wronguser'); // ✓ Fill wrong username
            await page.locator('#password').fill('wrongpass'); // ✓ Fill wrong password
            await page.locator('#loginBtn').click(); // ✓ Click login
            
            await page.waitForTimeout(1000); // ✓ Wait for result
            
            // LINE 213: Check result
            const message = await page.locator('#message').textContent(); // ✓ Get message
            
            // LINE 216: Intentionally check for SUCCESS (will fail and trigger screenshot!)
            if (message.includes('Login successful')) {
                console.log("✓ TEST PASSED: Login successful");
                testResults.passed++; // ✓ Increment passed count
                testResults.tests.push({ name: 'Invalid Login Check', status: 'PASSED' });
            } else {
                // LINE 222: This will throw error because we're checking for wrong thing
                throw new Error(`Expected "Login successful" but got: "${message}"`);
            }
            
        } catch (error) {
            // LINE 227: Test failed - take screenshot!
            console.log("✗ TEST FAILED! (This is intentional to show screenshot capture)");
            console.log(`  Error: ${error.message}`);
            
            // LINE 231: Generate timestamp
            const timestamp = new Date().toISOString().replace(/:/g, '-'); // ✓ timestamp for unique filename
            const screenshotPath = `screenshots/failures/test2-failed-${timestamp}.png`; // ✓ Failure screenshot path
            
            // LINE 235: Take screenshot of failure
            await page.screenshot({ path: screenshotPath }); // ✓ Screenshot saved
            
            console.log(`  📸 Screenshot saved: ${screenshotPath}`);
            console.log("  (Open this screenshot to see the error state!)\n");
            
            testResults.failed++; // ✓ Increment failed count
            testResults.tests.push({ 
                name: 'Invalid Login Check', 
                status: 'FAILED', 
                error: error.message,
                screenshot: screenshotPath
            });
        }
        
        await page.waitForTimeout(2000); // ✓ Waits 2 seconds
        
        // LINE 252: Clear form for next test
        await page.locator('#username').clear(); // ✓ Clear username
        await page.locator('#password').clear(); // ✓ Clear password
        await page.locator('#message').evaluate(el => el.style.display = 'none'); // ✓ Hide message
        
        // ==========================================
        // TEST 3: Empty Fields (Should PASS)
        // ==========================================
        
        console.log("TEST 3: Empty Fields Validation");
        console.log("--------------------------------");
        
        try {
            // LINE 265: Click login with empty fields
            await page.locator('#loginBtn').click(); // ✓ Click login with empty fields
            
            await page.waitForTimeout(1000); // ✓ Wait for result
            
            // LINE 270: Check result
            const message = await page.locator('#message').textContent(); // ✓ Get message
            
            // LINE 273: Verify error message appears
            if (message.includes('Please enter')) {
                console.log("✓ TEST PASSED: Empty field validation works");
                console.log(`  Message: "${message}"\n`);
                testResults.passed++; // ✓ Increment passed count
                testResults.tests.push({ name: 'Empty Fields Validation', status: 'PASSED' });
            } else {
                throw new Error(`Expected validation message, got: "${message}"`);
            }
            
        } catch (error) {
            // LINE 283: Test failed - take screenshot!
            console.log("✗ TEST FAILED!");
            console.log(`  Error: ${error.message}`);
            
            // LINE 287: Generate timestamp
            const timestamp = new Date().toISOString().replace(/:/g, '-'); // ✓ timestamp for unique filename
            const screenshotPath = `screenshots/failures/test3-failed-${timestamp}.png`; // ✓ Failure screenshot path
            
            // LINE 291: Take screenshot of failure
            await page.screenshot({ path: screenshotPath }); // ✓ Screenshot saved
            
            console.log(`  📸 Screenshot saved: ${screenshotPath}\n`);
            
            testResults.failed++; // ✓ Increment failed count
            testResults.tests.push({ 
                name: 'Empty Fields Validation', 
                status: 'FAILED', 
                error: error.message,
                screenshot: screenshotPath
            });
        }
        
        await page.waitForTimeout(2000); // ✓ Waits 2 seconds
        
        // ==========================================
        // TEST SUMMARY
        // ==========================================
        
        console.log("=".repeat(60));
        console.log("TEST SUMMARY");
        console.log("=".repeat(60));
        console.log("");
        console.log(`Total Tests: ${testResults.passed + testResults.failed}`);
        console.log(`Passed: ${testResults.passed} ✓`);
        console.log(`Failed: ${testResults.failed} ✗`);
        console.log("");
        console.log("Test Details:");
        console.log("-".repeat(60));
        
        testResults.tests.forEach((test, index) => {
            console.log(`\n${index + 1}. ${test.name}`);
            console.log(`   Status: ${test.status}`);
            if (test.status === 'FAILED') {
                console.log(`   Error: ${test.error}`);
                console.log(`   Screenshot: ${test.screenshot}`);
            }
        });
        
        console.log("\n" + "=".repeat(60));
        console.log("KEY TAKEAWAY:");
        console.log("=".repeat(60));
        console.log("");
        console.log("✓ When tests PASS: No screenshot needed");
        console.log("✓ When tests FAIL: Screenshot automatically captured");
        console.log("");
        console.log("WHY THIS MATTERS:");
        console.log("  - You have proof of what went wrong");
        console.log("  - Developers can see the exact error state");
        console.log("  - Bug reports are more credible");
        console.log("  - Faster debugging and fixes");
        console.log("");
        console.log("Check screenshots/failures/ folder for failure evidence!");
        console.log("=".repeat(60));
        console.log("");
        
    } catch (error) {
        console.error("\n❌ UNEXPECTED ERROR:", error.message);
        
        // LINE 355: Take screenshot of unexpected error
        const timestamp = new Date().toISOString().replace(/:/g, '-');
        await page.screenshot({ 
            path: `screenshots/failures/unexpected-error-${timestamp}.png` 
        });
        console.log(`📸 Unexpected error screenshot saved`);
        
    } finally {
        // LINE 363: Close browser
        await browser.close(); // ✓ Browser closes
    }
    
    console.log("=== Screenshot on Failure Demo Complete! ===");
}

// LINE 369: RUN THE FUNCTION
testWithScreenshotOnFailure(); // ✓ Everything starts here!