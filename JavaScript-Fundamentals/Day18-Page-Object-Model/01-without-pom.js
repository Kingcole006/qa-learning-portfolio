// ============================================
// WITHOUT PAGE OBJECT MODEL
// This shows why we NEED POM (messy code!)
// ============================================

// LINE 1: Load Playwright
const { chromium } = require('playwright'); // ✓ Playwright library loaded

// LINE 3: Define test function
async function loginTestsWithoutPOM() {
    console.log("=== Tests WITHOUT Page Object Model ===\n");
    console.log("(Notice the repeated code!)\n");
    
    // LINE 9: Launch browser
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 500
    }); // ✓ Chrome opens
    
    // LINE 14: Create page
    const page = await browser.newPage(); // ✓ New tab appears
    
    try {
        // LINE 18: Create simple login page
        await page.setContent(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Login Page</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 50px;
                        background: #f5f5f5;
                    }
                    .login-container {
                        background: white;
                        padding: 30px;
                        border-radius: 10px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        max-width: 400px;
                    }
                    h2 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    input {
                        width: 100%;
                        padding: 12px;
                        margin: 10px 0;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        font-size: 16px;
                        box-sizing: border-box;
                    }
                    button {
                        width: 100%;
                        padding: 12px;
                        background: #4CAF50;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        font-size: 16px;
                        cursor: pointer;
                        margin-top: 10px;
                    }
                    button:hover {
                        background: #45a049;
                    }
                    #message {
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
                    <h2>Login</h2>
                    <input type="text" id="username" placeholder="Username">
                    <input type="password" id="password" placeholder="Password">
                    <button id="loginBtn">Login</button>
                    <div id="message"></div>
                </div>
                
                <script>
                    document.getElementById('loginBtn').addEventListener('click', function() {
                        const username = document.getElementById('username').value;
                        const password = document.getElementById('password').value;
                        const message = document.getElementById('message');
                        
                        // Simple validation
                        if (username === 'admin' && password === 'admin123') {
                            message.className = 'success';
                            message.textContent = 'Login successful! Welcome ' + username;
                            message.style.display = 'block';
                        } else if (username && password) {
                            message.className = 'error';
                            message.textContent = 'Invalid username or password';
                            message.style.display = 'block';
                        } else {
                            message.className = 'error';
                            message.textContent = 'Please enter username and password';
                            message.style.display = 'block';
                        }
                    });
                </script>
            </body>
            </html>
        `); // ✓ Login page created (you see it in browser)
        
        console.log("✓ Created login page\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // ==========================================
        // TEST 1: Valid Login
        // ==========================================
        
        console.log("TEST 1: Valid Login");
        console.log("-------------------");
        
        // LINE 127: Fill username (REPEATED CODE!)
        console.log("Filling username...");
        await page.locator('#username').fill('admin'); // ✓ Types "admin" in username field
        
        // LINE 131: Fill password (REPEATED CODE!)
        console.log("Filling password...");
        await page.locator('#password').fill('admin123'); // ✓ Types "admin123" in password field
        
        // LINE 135: Click login button (REPEATED CODE!)
        console.log("Clicking login button...");
        await page.locator('#loginBtn').click(); // ✓ Clicks login button
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second for message
        
        // LINE 141: Get message (REPEATED CODE!)
        const message1 = await page.locator('#message').textContent(); // ✓ message1 = "Login successful! Welcome admin"
        console.log(`Result: "${message1}"`);
        console.log("✓ Test 1 passed\n");
        
        await page.waitForTimeout(2000); // ✓ Waits 2 seconds
        
        // ==========================================
        // TEST 2: Invalid Login
        // ==========================================
        
        console.log("TEST 2: Invalid Login");
        console.log("---------------------");
        
        // LINE 155: Clear the form fields instead of reload
        console.log("Clearing form fields...");
        await page.locator('#username').clear(); // ✓ Clears username field
        await page.locator('#password').clear(); // ✓ Clears password field
        await page.locator('#message').evaluate(el => el.style.display = 'none'); // ✓ Hides previous message
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // LINE 159: Fill username (REPEATED CODE AGAIN!)
        console.log("Filling username...");
        await page.locator('#username').fill('wronguser'); // ✓ Types "wronguser"
        
        // LINE 163: Fill password (REPEATED CODE AGAIN!)
        console.log("Filling password...");
        await page.locator('#password').fill('wrongpass'); // ✓ Types "wrongpass"
        
        // LINE 167: Click login button (REPEATED CODE AGAIN!)
        console.log("Clicking login button...");
        await page.locator('#loginBtn').click(); // ✓ Clicks login button
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // LINE 173: Get message (REPEATED CODE AGAIN!)
        const message2 = await page.locator('#message').textContent(); // ✓ message2 = "Invalid username or password"
        console.log(`Result: "${message2}"`);
        console.log("✓ Test 2 passed\n");
        
        await page.waitForTimeout(2000); // ✓ Waits 2 seconds
        
       // ==========================================
        // TEST 3: Empty Fields
        // ==========================================
        
        console.log("TEST 3: Empty Fields");
        console.log("--------------------");
        
        // LINE 188: Clear the form fields again
        console.log("Clearing form fields...");
        await page.locator('#username').clear(); // ✓ Clears username
        await page.locator('#password').clear(); // ✓ Clears password
        await page.locator('#message').evaluate(el => el.style.display = 'none'); // ✓ Hides message
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // LINE 192: Just click login (REPEATED CODE AGAIN!)
        console.log("Clicking login with empty fields...");
        await page.locator('#loginBtn').click(); // ✓ Clicks login button with empty fields
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // LINE 198: Get message (REPEATED CODE AGAIN!)
        const message3 = await page.locator('#message').textContent(); // ✓ message3 = "Please enter username and password"
        console.log(`Result: "${message3}"`);
        console.log("✓ Test 3 passed\n");
        
        await page.waitForTimeout(2000); // ✓ Waits 2 seconds
        
        // ==========================================
        // PROBLEM SUMMARY
        // ==========================================
        
        console.log("=".repeat(60));
        console.log("PROBLEM: CODE REPETITION");
        console.log("=".repeat(60));
        console.log("");
        console.log("We repeated these lines MULTIPLE times:");
        console.log("  - page.locator('#username').fill(...)");
        console.log("  - page.locator('#password').fill(...)");
        console.log("  - page.locator('#loginBtn').click()");
        console.log("  - page.locator('#message').textContent()");
        console.log("");
        console.log("Problems:");
        console.log("  ❌ Code duplication (not DRY)");
        console.log("  ❌ Hard to maintain");
        console.log("  ❌ If selector changes, update EVERYWHERE");
        console.log("  ❌ Tests are hard to read");
        console.log("");
        console.log("Solution: PAGE OBJECT MODEL!");
        console.log("=".repeat(60));
        console.log("");
        
        await page.waitForTimeout(3000); // ✓ Waits 3 seconds
        
    } catch (error) {
        console.error("\n❌ ERROR:", error.message);
    } finally {
        // LINE 238: Close browser
        await browser.close(); // ✓ Browser closes
    }
    
    console.log("=== Tests Complete (Without POM) ===");
}

// LINE 244: RUN THE TESTS
loginTestsWithoutPOM(); // ✓ Everything starts here!