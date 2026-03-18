// ============================================
// POM BEST PRACTICES
// Industry-standard organization
// ============================================

// LINE 1: Load Playwright
const { chromium } = require('playwright'); // ✓ Playwright library loaded

// ==========================================
// BASE PAGE CLASS
// Shared methods for ALL pages (DRY principle!)
// ==========================================

// LINE 10: Base page class (parent class)
class BasePage {
    constructor(page) {
        this.page = page; // ✓ Store page
    }
    
    // LINE 15: Wait for element to be visible (reusable!)
    async waitForElement(selector, timeout = 10000) {
        await this.page.locator(selector).waitFor({ 
            state: 'visible', 
            timeout 
        }); // ✓ Waits for element with smart wait
    }
    
    // LINE 23: Click element with waiting (reusable!)
    async clickElement(selector) {
        await this.waitForElement(selector); // ✓ Wait first
        await this.page.locator(selector).click(); // ✓ Then click
    }
    
    // LINE 29: Fill field with waiting (reusable!)
    async fillField(selector, text) {
        await this.waitForElement(selector); // ✓ Wait first
        await this.page.locator(selector).fill(text); // ✓ Then fill
    }
    
    // LINE 35: Get text with waiting (reusable!)
    async getText(selector) {
        await this.waitForElement(selector); // ✓ Wait first
        const text = await this.page.locator(selector).textContent(); // ✓ Then get text
        return text; // ✓ Return text
    }
    
    // LINE 42: Check if element is visible (reusable!)
    async isElementVisible(selector) {
        const isVisible = await this.page.locator(selector).isVisible(); // ✓ Check visibility
        return isVisible; // ✓ Return true/false
    }
}

// ==========================================
// LOGIN PAGE (extends BasePage)
// ==========================================

// LINE 52: LoginPage inherits from BasePage
class LoginPage extends BasePage {
    constructor(page) {
        super(page); // ✓ Call parent constructor (BasePage)
        
        // LINE 56: Selectors
        this.usernameField = '#username'; // ✓ Username field
        this.passwordField = '#password'; // ✓ Password field
        this.loginButton = '#loginBtn'; // ✓ Login button
        this.successMessage = '#successMsg'; // ✓ Success message
        this.errorMessage = '#errorMsg'; // ✓ Error message
    }
    
    // LINE 64: Login method (uses inherited methods!)
    async login(username, password) {
        console.log(`  Logging in as: "${username}"`);
        await this.fillField(this.usernameField, username); // ✓ Uses BasePage.fillField()
        await this.fillField(this.passwordField, password); // ✓ Uses BasePage.fillField()
        await this.clickElement(this.loginButton); // ✓ Uses BasePage.clickElement()
        await this.page.waitForTimeout(1000); // ✓ Wait for result
    }
    
    // LINE 73: Get success message (uses inherited method!)
    async getSuccessMessage() {
        const isVisible = await this.isElementVisible(this.successMessage); // ✓ Uses BasePage.isElementVisible()
        if (isVisible) {
            const message = await this.getText(this.successMessage); // ✓ Uses BasePage.getText()
            return message; // ✓ Return message
        }
        return null; // ✓ No message
    }
    
    // LINE 83: Get error message (uses inherited method!)
    async getErrorMessage() {
        const isVisible = await this.isElementVisible(this.errorMessage); // ✓ Uses BasePage.isElementVisible()
        if (isVisible) {
            const message = await this.getText(this.errorMessage); // ✓ Uses BasePage.getText()
            return message; // ✓ Return message
        }
        return null; // ✓ No message
    }
    
    // LINE 93: Verify successful login
    async isLoginSuccessful() {
        const successVisible = await this.isElementVisible(this.successMessage); // ✓ Check if success message visible
        return successVisible; // ✓ Return true if successful
    }
}

// ==========================================
// PROFILE PAGE (extends BasePage)
// ==========================================

// LINE 103: ProfilePage inherits from BasePage
class ProfilePage extends BasePage {
    constructor(page) {
        super(page); // ✓ Call parent constructor
        
        // LINE 107: Selectors
        this.profileHeader = '#profileHeader'; // ✓ Profile header
        this.usernameDisplay = '#usernameDisplay'; // ✓ Username display
        this.emailDisplay = '#emailDisplay'; // ✓ Email display
        this.editButton = '#editBtn'; // ✓ Edit button
    }
    
    // LINE 114: Get profile header (uses inherited method!)
    async getProfileHeader() {
        const header = await this.getText(this.profileHeader); // ✓ Uses BasePage.getText()
        return header; // ✓ Return header
    }
    
    // LINE 120: Get username (uses inherited method!)
    async getUsername() {
        const username = await this.getText(this.usernameDisplay); // ✓ Uses BasePage.getText()
        return username; // ✓ Return username
    }
    
    // LINE 126: Get email (uses inherited method!)
    async getEmail() {
        const email = await this.getText(this.emailDisplay); // ✓ Uses BasePage.getText()
        return email; // ✓ Return email
    }
}

// ==========================================
// TEST CONFIGURATION
// ==========================================

// LINE 136: Test config object (professional practice!)
const testConfig = {
    baseURL: 'about:blank',  // ✓ Starting URL
    timeout: 30000,           // ✓ Default timeout
    slowMo: 500,              // ✓ Slow motion
    headless: false           // ✓ Show browser
};

// LINE 143: Test data (separate from test logic!)
const testData = {
    validUser: {
        username: 'admin',
        password: 'admin123',
        email: 'admin@example.com'
    },
    invalidUser: {
        username: 'wronguser',
        password: 'wrongpass'
    }
};

// ==========================================
// TEST FUNCTION
// ==========================================

// LINE 158: Test function with config
async function pomBestPracticesTest() {
    console.log("=== POM Best Practices Test ===\n");
    
    // LINE 162: Launch browser with config
    const browser = await chromium.launch({ 
        headless: testConfig.headless,
        slowMo: testConfig.slowMo
    }); // ✓ Chrome opens
    
    // LINE 167: Create page
    const page = await browser.newPage(); // ✓ New tab appears
    
    try {
        // LINE 171: Create test application
        await page.setContent(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Best Practices Demo</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 50px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        min-height: 100vh;
                    }
                    .container {
                        background: white;
                        padding: 40px;
                        border-radius: 15px;
                        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                        max-width: 500px;
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
                        border: 2px solid #ddd;
                        border-radius: 8px;
                        font-size: 16px;
                        box-sizing: border-box;
                        transition: border-color 0.3s;
                    }
                    input:focus {
                        border-color: #667eea;
                        outline: none;
                    }
                    button {
                        width: 100%;
                        padding: 14px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        border: none;
                        border-radius: 8px;
                        font-size: 16px;
                        font-weight: bold;
                        cursor: pointer;
                        margin-top: 15px;
                        transition: transform 0.2s;
                    }
                    button:hover {
                        transform: translateY(-2px);
                    }
                    .message {
                        margin-top: 20px;
                        padding: 15px;
                        border-radius: 8px;
                        display: none;
                    }
                    .success {
                        background: #d4edda;
                        color: #155724;
                        border: 2px solid #c3e6cb;
                    }
                    .error {
                        background: #f8d7da;
                        color: #721c24;
                        border: 2px solid #f5c6cb;
                    }
                    .profile {
                        display: none;
                    }
                    .profile-info {
                        background: #f8f9fa;
                        padding: 20px;
                        border-radius: 8px;
                        margin: 15px 0;
                    }
                    .profile-info p {
                        margin: 10px 0;
                        color: #555;
                    }
                    .profile-info strong {
                        color: #333;
                    }
                </style>
            </head>
            <body>
                <!-- LOGIN FORM -->
                <div class="container" id="loginForm">
                    <h2>🔐 Secure Login</h2>
                    <input type="text" id="username" placeholder="Username">
                    <input type="password" id="password" placeholder="Password">
                    <button id="loginBtn">Login</button>
                    <div id="successMsg" class="message success"></div>
                    <div id="errorMsg" class="message error"></div>
                </div>
                
                <!-- PROFILE PAGE -->
                <div class="container profile" id="profilePage">
                    <h2 id="profileHeader">👤 User Profile</h2>
                    <div class="profile-info">
                        <p><strong>Username:</strong> <span id="usernameDisplay"></span></p>
                        <p><strong>Email:</strong> <span id="emailDisplay"></span></p>
                    </div>
                    <button id="editBtn">Edit Profile</button>
                </div>
                
                <script>
                    document.getElementById('loginBtn').addEventListener('click', () => {
                        const username = document.getElementById('username').value;
                        const password = document.getElementById('password').value;
                        const successMsg = document.getElementById('successMsg');
                        const errorMsg = document.getElementById('errorMsg');
                        
                        // Hide previous messages
                        successMsg.style.display = 'none';
                        errorMsg.style.display = 'none';
                        
                        if (username === 'admin' && password === 'admin123') {
                            successMsg.textContent = '✓ Login successful! Redirecting...';
                            successMsg.style.display = 'block';
                            
                            setTimeout(() => {
                                document.getElementById('loginForm').style.display = 'none';
                                document.getElementById('profilePage').style.display = 'block';
                                document.getElementById('usernameDisplay').textContent = username;
                                document.getElementById('emailDisplay').textContent = 'admin@example.com';
                            }, 1000);
                        } else {
                            errorMsg.textContent = '✗ Invalid username or password';
                            errorMsg.style.display = 'block';
                        }
                    });
                </script>
            </body>
            </html>
        `); // ✓ Beautiful app created
        
        console.log("✓ Created test application\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // LINE 329: CREATE PAGE OBJECTS
        const loginPage = new LoginPage(page); // ✓ Login page object created
        const profilePage = new ProfilePage(page); // ✓ Profile page object created
        
        // ==========================================
        // TEST 1: Successful Login
        // ==========================================
        
        console.log("TEST 1: Successful Login");
        console.log("========================\n");
        
        // LINE 340: Login with test data
        await loginPage.login(testData.validUser.username, testData.validUser.password); // ✓ Uses test data from config
        
        // LINE 343: Verify success
        const isSuccess = await loginPage.isLoginSuccessful(); // ✓ Check if login successful
        console.log(`  Login successful: ${isSuccess}`);
        
        if (isSuccess) {
            const successMsg = await loginPage.getSuccessMessage(); // ✓ Get success message
            console.log(`  Message: "${successMsg}"`);
        }
        
        console.log("✓ Test 1 passed\n");
        
        await page.waitForTimeout(2000); // ✓ Waits 2 seconds for redirect
        
        // ==========================================
        // TEST 2: Verify Profile Page
        // ==========================================
        
        console.log("TEST 2: Verify Profile Page");
        console.log("===========================\n");
        
        // LINE 363: Get profile data (uses inherited methods!)
        const profileHeader = await profilePage.getProfileHeader(); // ✓ Gets header
        const username = await profilePage.getUsername(); // ✓ Gets username
        const email = await profilePage.getEmail(); // ✓ Gets email
        
        console.log(`  Header: "${profileHeader}"`);
        console.log(`  Username: "${username}"`);
        console.log(`  Email: "${email}"`);
        console.log("✓ Test 2 passed\n");
        
        // ==========================================
        // BEST PRACTICES SUMMARY
        // ==========================================
        
        console.log("=".repeat(60));
        console.log("POM BEST PRACTICES DEMONSTRATED");
        console.log("=".repeat(60));
        console.log("");
        console.log("✅ BASE PAGE CLASS (DRY Principle)");
        console.log("   - Shared methods in one place");
        console.log("   - All page objects inherit them");
        console.log("   - No code duplication!");
        console.log("");
        console.log("✅ CLASS INHERITANCE (extends)");
        console.log("   - LoginPage extends BasePage");
        console.log("   - ProfilePage extends BasePage");
        console.log("   - Reuse all BasePage methods");
        console.log("");
        console.log("✅ TEST CONFIGURATION");
        console.log("   - Config object for settings");
        console.log("   - Test data separate from tests");
        console.log("   - Easy to change without touching test code");
        console.log("");
        console.log("✅ SMART WAITING");
        console.log("   - waitForElement() in BasePage");
        console.log("   - Every action waits automatically");
        console.log("   - Reliable tests!");
        console.log("");
        console.log("✅ PROFESSIONAL STRUCTURE");
        console.log("   - Industry standard");
        console.log("   - Scalable for large projects");
        console.log("   - Easy team collaboration");
        console.log("");
        console.log("IN REAL PROJECTS:");
        console.log("   - Each page object in separate file");
        console.log("   - BasePage in shared/base.js");
        console.log("   - Tests import page objects");
        console.log("   - Config in config.js");
        console.log("");
        console.log("=".repeat(60));
        console.log("");
        
        await page.waitForTimeout(3000); // ✓ Waits 3 seconds
        
    } catch (error) {
        console.error("\n❌ ERROR:", error.message);
    } finally {
        // LINE 424: Close browser
        await browser.close(); // ✓ Browser closes
    }
    
    console.log("=== Best Practices Test Complete ===");
}

// LINE 430: RUN THE TEST
pomBestPracticesTest(); // ✓ Everything starts here!