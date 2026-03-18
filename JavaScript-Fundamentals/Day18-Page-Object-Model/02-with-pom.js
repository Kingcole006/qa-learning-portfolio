// ============================================
// WITH PAGE OBJECT MODEL
// Professional code organization!
// ============================================

// LINE 1: Load Playwright
const { chromium } = require('playwright'); // ✓ Playwright library loaded

// ==========================================
// PAGE OBJECT CLASS
// This is where the MAGIC happens!
// ==========================================

// LINE 10: Define LoginPage class
class LoginPage {
    // LINE 12: Constructor - runs when we create a new LoginPage
    constructor(page) {
        this.page = page; // ✓ Store the page so we can use it in methods
        
        // LINE 16: Define all selectors in ONE place
        this.usernameField = '#username'; // ✓ Username field selector
        this.passwordField = '#password'; // ✓ Password field selector
        this.loginButton = '#loginBtn'; // ✓ Login button selector
        this.messageBox = '#message'; // ✓ Message box selector
    }
    
    // LINE 23: Method to fill username
    async fillUsername(username) {
        console.log(`  Filling username: "${username}"`);
        await this.page.locator(this.usernameField).fill(username); // ✓ Fills username field
    }
    
    // LINE 29: Method to fill password
    async fillPassword(password) {
        console.log(`  Filling password: "${password}"`);
        await this.page.locator(this.passwordField).fill(password); // ✓ Fills password field
    }
    
    // LINE 35: Method to click login button
    async clickLogin() {
        console.log("  Clicking login button");
        await this.page.locator(this.loginButton).click(); // ✓ Clicks login button
    }
    
    // LINE 41: Method to get message text
    async getMessage() {
        await this.page.waitForTimeout(500); // ✓ Wait for message to appear
        const message = await this.page.locator(this.messageBox).textContent(); // ✓ Gets message text
        return message; // ✓ Returns the message
    }
    
    // LINE 48: Method to clear form
    async clearForm() {
        console.log("  Clearing form fields");
        await this.page.locator(this.usernameField).clear(); // ✓ Clears username
        await this.page.locator(this.passwordField).clear(); // ✓ Clears password
        await this.page.locator(this.messageBox).evaluate(el => el.style.display = 'none'); // ✓ Hides message
    }
    
    // LINE 56: HIGH-LEVEL METHOD - This is the power of POM!
    async login(username, password) {
        console.log(`Attempting login with username: "${username}"`);
        await this.fillUsername(username); // ✓ Fills username
        await this.fillPassword(password); // ✓ Fills password
        await this.clickLogin(); // ✓ Clicks login
        await this.page.waitForTimeout(1000); // ✓ Wait for result
        const message = await this.getMessage(); // ✓ Gets the message
        return message; // ✓ Returns message
    }
}

// ==========================================
// TEST FUNCTION
// ==========================================

// LINE 70: Define test function
async function loginTestsWithPOM() {
    console.log("=== Tests WITH Page Object Model ===\n");
    console.log("(Notice how clean the code is!)\n");
    
    // LINE 75: Launch browser
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 500
    }); // ✓ Chrome opens
    
    // LINE 80: Create page
    const page = await browser.newPage(); // ✓ New tab appears
    
    try {
        // LINE 84: Create the login page HTML
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
        `); // ✓ Login page created
        
        console.log("✓ Created login page\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // LINE 188: CREATE PAGE OBJECT (This is the key!)
        const loginPage = new LoginPage(page); // ✓ loginPage object created with all methods
        
        // ==========================================
        // TEST 1: Valid Login (CLEAN CODE!)
        // ==========================================
        
        console.log("TEST 1: Valid Login");
        console.log("-------------------");
        
        // LINE 198: ONE LINE instead of 4! (This is the power of POM!)
        const message1 = await loginPage.login('admin', 'admin123'); // ✓ Logs in with valid credentials
        
        console.log(`Result: "${message1}"`);
        console.log("✓ Test 1 passed\n");
        
        await page.waitForTimeout(2000); // ✓ Waits 2 seconds
        
        // ==========================================
        // TEST 2: Invalid Login (CLEAN CODE!)
        // ==========================================
        
        console.log("TEST 2: Invalid Login");
        console.log("---------------------");
        
        // LINE 213: Clear form (one method call!)
        await loginPage.clearForm(); // ✓ Form cleared
        
        // LINE 216: ONE LINE for login attempt!
        const message2 = await loginPage.login('wronguser', 'wrongpass'); // ✓ Logs in with invalid credentials
        
        console.log(`Result: "${message2}"`);
        console.log("✓ Test 2 passed\n");
        
        await page.waitForTimeout(2000); // ✓ Waits 2 seconds
        
        // ==========================================
        // TEST 3: Empty Fields (CLEAN CODE!)
        // ==========================================
        
        console.log("TEST 3: Empty Fields");
        console.log("--------------------");
        
        // LINE 231: Clear form
        await loginPage.clearForm(); // ✓ Form cleared
        
        // LINE 234: Just click login (no filling)
        await loginPage.clickLogin(); // ✓ Clicks login with empty fields
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // LINE 238: Get message
        const message3 = await loginPage.getMessage(); // ✓ Gets error message
        
        console.log(`Result: "${message3}"`);
        console.log("✓ Test 3 passed\n");
        
        await page.waitForTimeout(2000); // ✓ Waits 2 seconds
        
        // ==========================================
        // BENEFITS SUMMARY
        // ==========================================
        
        console.log("=".repeat(60));
        console.log("BENEFITS OF PAGE OBJECT MODEL");
        console.log("=".repeat(60));
        console.log("");
        console.log("✅ NO CODE REPETITION!");
        console.log("   - Selectors defined ONCE in the class");
        console.log("   - Methods reused everywhere");
        console.log("");
        console.log("✅ EASY TO MAINTAIN!");
        console.log("   - Selector changes? Update ONE place (the class)");
        console.log("   - All tests automatically use new selector");
        console.log("");
        console.log("✅ CLEAN, READABLE TESTS!");
        console.log("   - loginPage.login('admin', 'admin123')");
        console.log("   - Anyone can understand what this does!");
        console.log("");
        console.log("✅ PROFESSIONAL STANDARD!");
        console.log("   - Industry best practice");
        console.log("   - Used by all professional QA teams");
        console.log("   - Looks great in interviews!");
        console.log("");
        console.log("COMPARE:");
        console.log("  Without POM: 4 lines per login");
        console.log("  With POM:    1 line per login");
        console.log("");
        console.log("=".repeat(60));
        console.log("");
        
        await page.waitForTimeout(3000); // ✓ Waits 3 seconds
        
    } catch (error) {
        console.error("\n❌ ERROR:", error.message);
    } finally {
        // LINE 286: Close browser
        await browser.close(); // ✓ Browser closes
    }
    
    console.log("=== Tests Complete (With POM) ===");
}

// LINE 292: RUN THE TESTS
loginTestsWithPOM(); // ✓ Everything starts here!