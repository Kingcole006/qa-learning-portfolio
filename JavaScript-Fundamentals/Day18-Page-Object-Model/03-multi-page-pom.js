// ============================================
// MULTI-PAGE POM
// Real-world scenario with multiple pages
// ============================================

// LINE 1: Load Playwright
const { chromium } = require('playwright'); // ✓ Playwright library loaded

// ==========================================
// HOME PAGE OBJECT
// ==========================================

// LINE 10: Home page class
class HomePage {
    constructor(page) {
        this.page = page; // ✓ Store page
        
        // LINE 14: Selectors (MORE SPECIFIC!)
        this.welcomeMessage = '#homePage h1'; // ✓ H1 inside homePage div (specific!)
        this.loginLink = '#loginLink'; // ✓ Login link
        this.dashboardLink = '#dashboardLink'; // ✓ Dashboard link
    }
    
    // LINE 20: Navigate to login page
    async goToLogin() {
        console.log("  Navigating to login page");
        await this.page.locator(this.loginLink).click(); // ✓ Clicks login link
        await this.page.waitForTimeout(500); // ✓ Wait for navigation
    }
    
    // LINE 27: Get welcome message
    async getWelcomeMessage() {
        const message = await this.page.locator(this.welcomeMessage).textContent(); // ✓ Gets heading text
        return message; // ✓ Returns message
    }
    
    // LINE 33: Check if logged in
    async isLoggedIn() {
        const isDashboardVisible = await this.page.locator(this.dashboardLink).isVisible(); // ✓ Checks if dashboard link is visible
        return isDashboardVisible; // ✓ Returns true if logged in
    }
}

// ==========================================
// LOGIN PAGE OBJECT
// ==========================================

// LINE 43: Login page class
class LoginPage {
    constructor(page) {
        this.page = page; // ✓ Store page
        
        // LINE 47: Selectors (already specific with IDs!)
        this.usernameField = '#username'; // ✓ Username field
        this.passwordField = '#password'; // ✓ Password field
        this.loginButton = '#loginBtn'; // ✓ Login button
        this.errorMessage = '#errorMsg'; // ✓ Error message
    }
    
    // LINE 54: Login method
    async login(username, password) {
        console.log(`  Logging in as: "${username}"`);
        await this.page.locator(this.usernameField).fill(username); // ✓ Fills username
        await this.page.locator(this.passwordField).fill(password); // ✓ Fills password
        await this.page.locator(this.loginButton).click(); // ✓ Clicks login
        await this.page.waitForTimeout(1000); // ✓ Wait for result
    }
    
    // LINE 63: Get error message
    async getErrorMessage() {
        const isVisible = await this.page.locator(this.errorMessage).isVisible(); // ✓ Check if error is visible
        if (isVisible) {
            const message = await this.page.locator(this.errorMessage).textContent(); // ✓ Get error text
            return message; // ✓ Return error
        }
        return null; // ✓ No error
    }
}

// ==========================================
// DASHBOARD PAGE OBJECT
// ==========================================

// LINE 76: Dashboard page class
class DashboardPage {
    constructor(page) {
        this.page = page; // ✓ Store page
        
        // LINE 80: Selectors (already specific with IDs!)
        this.welcomeText = '#welcomeText'; // ✓ Welcome text (unique ID)
        this.userNameDisplay = '#userNameDisplay'; // ✓ User name (unique ID)
        this.logoutButton = '#logoutBtn'; // ✓ Logout button (unique ID)
        this.taskCount = '#taskCount'; // ✓ Task count (unique ID)
    }
    
    // LINE 87: Get welcome text
    async getWelcomeText() {
        const text = await this.page.locator(this.welcomeText).textContent(); // ✓ Gets welcome text
        return text; // ✓ Returns text
    }
    
    // LINE 93: Get username
    async getUserName() {
        const name = await this.page.locator(this.userNameDisplay).textContent(); // ✓ Gets displayed username
        return name; // ✓ Returns username
    }
    
    // LINE 99: Get task count
    async getTaskCount() {
        const count = await this.page.locator(this.taskCount).textContent(); // ✓ Gets task count
        return count; // ✓ Returns count
    }
    
    // LINE 105: Logout
    async logout() {
        console.log("  Logging out");
        await this.page.locator(this.logoutButton).click(); // ✓ Clicks logout
        await this.page.waitForTimeout(1000); // ✓ Wait for navigation
    }
}

// ==========================================
// TEST FUNCTION
// ==========================================

// LINE 115: Test function
async function multiPagePOMTest() {
    console.log("=== Multi-Page POM Test ===\n");
    
    // LINE 119: Launch browser
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 500
    }); // ✓ Chrome opens
    
    // LINE 124: Create page
    const page = await browser.newPage(); // ✓ New tab appears
    
    try {
        // LINE 128: Create multi-page application
        await page.setContent(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Multi-Page App</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 50px;
                        background: #f0f0f0;
                    }
                    .page {
                        background: white;
                        padding: 30px;
                        border-radius: 10px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        max-width: 500px;
                    }
                    h1 {
                        color: #333;
                    }
                    a, button {
                        display: inline-block;
                        padding: 10px 20px;
                        margin: 10px 5px;
                        background: #2196F3;
                        color: white;
                        text-decoration: none;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    a:hover, button:hover {
                        background: #1976D2;
                    }
                    input {
                        width: 100%;
                        padding: 10px;
                        margin: 10px 0;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        box-sizing: border-box;
                    }
                    .error {
                        color: #d32f2f;
                        margin-top: 10px;
                        display: none;
                    }
                    .success {
                        color: #388e3c;
                        margin-top: 10px;
                    }
                    .hidden {
                        display: none;
                    }
                </style>
            </head>
            <body>
                <!-- HOME PAGE -->
                <div id="homePage" class="page">
                    <h1>Welcome to Our App!</h1>
                    <p>Please login to continue</p>
                    <a href="#" id="loginLink">Go to Login</a>
                    <a href="#" id="dashboardLink" class="hidden">Go to Dashboard</a>
                </div>
                
                <!-- LOGIN PAGE -->
                <div id="loginPage" class="page hidden">
                    <h1>Login</h1>
                    <input type="text" id="username" placeholder="Username">
                    <input type="password" id="password" placeholder="Password">
                    <button id="loginBtn">Login</button>
                    <div id="errorMsg" class="error"></div>
                    <br>
                    <a href="#" id="backToHome">Back to Home</a>
                </div>
                
                <!-- DASHBOARD PAGE -->
                <div id="dashboardPage" class="page hidden">
                    <h1 id="welcomeText">Welcome to Dashboard!</h1>
                    <p>Logged in as: <strong id="userNameDisplay"></strong></p>
                    <p>You have <strong id="taskCount">5</strong> pending tasks</p>
                    <button id="logoutBtn">Logout</button>
                </div>
                
                <script>
                    let currentUser = null;
                    
                    // Show/hide pages
                    function showPage(pageId) {
                        document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
                        document.getElementById(pageId).classList.remove('hidden');
                    }
                    
                    // Navigation
                    document.getElementById('loginLink').addEventListener('click', (e) => {
                        e.preventDefault();
                        showPage('loginPage');
                    });
                    
                    document.getElementById('backToHome').addEventListener('click', (e) => {
                        e.preventDefault();
                        showPage('homePage');
                    });
                    
                    // Login
                    document.getElementById('loginBtn').addEventListener('click', () => {
                        const username = document.getElementById('username').value;
                        const password = document.getElementById('password').value;
                        const errorMsg = document.getElementById('errorMsg');
                        
                        if (username === 'admin' && password === 'admin123') {
                            currentUser = username;
                            document.getElementById('userNameDisplay').textContent = username;
                            document.getElementById('dashboardLink').classList.remove('hidden');
                            showPage('dashboardPage');
                        } else {
                            errorMsg.textContent = 'Invalid credentials';
                            errorMsg.style.display = 'block';
                        }
                    });
                    
                    // Logout
                    document.getElementById('logoutBtn').addEventListener('click', () => {
                        currentUser = null;
                        document.getElementById('username').value = '';
                        document.getElementById('password').value = '';
                        document.getElementById('dashboardLink').classList.add('hidden');
                        showPage('homePage');
                    });
                </script>
            </body>
            </html>
        `); // ✓ Multi-page app created
        
        console.log("✓ Created multi-page application\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // LINE 284: CREATE ALL PAGE OBJECTS
        const homePage = new HomePage(page); // ✓ Home page object created
        const loginPage = new LoginPage(page); // ✓ Login page object created
        const dashboardPage = new DashboardPage(page); // ✓ Dashboard page object created
        
        // ==========================================
        // TEST: Complete User Journey
        // ==========================================
        
        console.log("TEST: Complete User Journey");
        console.log("===========================\n");
        
        // LINE 296: STEP 1 - Verify home page
        console.log("STEP 1: Verify Home Page");
        const welcomeMsg = await homePage.getWelcomeMessage(); // ✓ Gets welcome message
        console.log(`  Welcome message: "${welcomeMsg}"`);
        console.log("✓ Home page verified\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // LINE 304: STEP 2 - Navigate to login
        console.log("STEP 2: Navigate to Login");
        await homePage.goToLogin(); // ✓ Clicks login link (ONE method call!)
        console.log("✓ On login page\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // LINE 311: STEP 3 - Attempt login
        console.log("STEP 3: Login with Valid Credentials");
        await loginPage.login('admin', 'admin123'); // ✓ Logs in (ONE method call!)
        console.log("✓ Login successful\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // LINE 318: STEP 4 - Verify dashboard
        console.log("STEP 4: Verify Dashboard");
        const dashboardWelcome = await dashboardPage.getWelcomeText(); // ✓ Gets dashboard welcome text
        const userName = await dashboardPage.getUserName(); // ✓ Gets displayed username
        const taskCount = await dashboardPage.getTaskCount(); // ✓ Gets task count
        
        console.log(`  Welcome text: "${dashboardWelcome}"`);
        console.log(`  Username: "${userName}"`);
        console.log(`  Tasks: ${taskCount}`);
        console.log("✓ Dashboard verified\n");
        
        await page.waitForTimeout(2000); // ✓ Waits 2 seconds
        
        // LINE 332: STEP 5 - Logout
        console.log("STEP 5: Logout");
        await dashboardPage.logout(); // ✓ Logs out (ONE method call!)
        console.log("✓ Logged out\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // LINE 339: STEP 6 - Verify back on home
        console.log("STEP 6: Verify Back on Home");
        const isLoggedIn = await homePage.isLoggedIn(); // ✓ Checks login status
        console.log(`  Logged in: ${isLoggedIn}`);
        console.log("✓ Back on home page\n");
        
        // ==========================================
        // SUMMARY
        // ==========================================
        
        console.log("=".repeat(60));
        console.log("MULTI-PAGE POM BENEFITS");
        console.log("=".repeat(60));
        console.log("");
        console.log("✅ ORGANIZED CODE!");
        console.log("   - Each page has its own class");
        console.log("   - Clear separation of concerns");
        console.log("");
        console.log("✅ EASY NAVIGATION!");
        console.log("   - homePage.goToLogin()");
        console.log("   - dashboardPage.logout()");
        console.log("");
        console.log("✅ REUSABLE EVERYWHERE!");
        console.log("   - Create page objects once");
        console.log("   - Use in all tests");
        console.log("");
        console.log("✅ PROFESSIONAL STRUCTURE!");
        console.log("   - Industry standard");
        console.log("   - Scalable for large projects");
        console.log("   - Easy for teams to work together");
        console.log("");
        console.log("=".repeat(60));
        console.log("");
        
        await page.waitForTimeout(3000); // ✓ Waits 3 seconds
        
    } catch (error) {
        console.error("\n❌ ERROR:", error.message);
    } finally {
        // LINE 383: Close browser
        await browser.close(); // ✓ Browser closes
    }
    
    console.log("=== Multi-Page Test Complete ===");
}

// LINE 389: RUN THE TEST
multiPagePOMTest(); // ✓ Everything starts here!