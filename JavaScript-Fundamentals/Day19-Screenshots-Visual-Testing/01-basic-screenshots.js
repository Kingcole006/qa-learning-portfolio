// ============================================
// BASIC SCREENSHOTS
// Taking screenshots for test evidence
// ============================================

// LINE 1: Load Playwright
const { chromium } = require('playwright'); // ✓ Playwright library loaded

// LINE 3: Define function
async function basicScreenshots() {
    console.log("=== Basic Screenshots Demo ===\n");
    
    // LINE 7: Launch browser
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 500
    }); // ✓ Chrome opens
    
    // LINE 12: Create page
    const page = await browser.newPage(); // ✓ New tab appears
    
    try {
        // LINE 16: Create test page
        await page.setContent(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Screenshot Demo</title>
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
                        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                        max-width: 600px;
                        margin: 0 auto;
                    }
                    h1 {
                        color: #667eea;
                        margin-bottom: 20px;
                    }
                    .success-box {
                        background: #d4edda;
                        border: 2px solid #c3e6cb;
                        color: #155724;
                        padding: 20px;
                        border-radius: 10px;
                        margin: 20px 0;
                    }
                    .error-box {
                        background: #f8d7da;
                        border: 2px solid #f5c6cb;
                        color: #721c24;
                        padding: 20px;
                        border-radius: 10px;
                        margin: 20px 0;
                    }
                    .info-box {
                        background: #d1ecf1;
                        border: 2px solid #bee5eb;
                        color: #0c5460;
                        padding: 20px;
                        border-radius: 10px;
                        margin: 20px 0;
                    }
                    button {
                        padding: 12px 30px;
                        background: #667eea;
                        color: white;
                        border: none;
                        border-radius: 8px;
                        font-size: 16px;
                        cursor: pointer;
                        margin: 10px 5px;
                    }
                    button:hover {
                        background: #5568d3;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>📸 Screenshot Testing Demo</h1>
                    <p>This page demonstrates different screenshot scenarios.</p>
                    
                    <div class="success-box" id="successBox">
                        ✓ Success Message: Login successful!
                    </div>
                    
                    <div class="error-box" id="errorBox">
                        ✗ Error Message: Invalid credentials
                    </div>
                    
                    <div class="info-box" id="infoBox">
                        ℹ Info Message: Please verify your email
                    </div>
                    
                    <button id="testButton">Click Me</button>
                    <button id="errorButton">Trigger Error</button>
                </div>
            </body>
            </html>
        `); // ✓ Beautiful test page created
        
        console.log("✓ Created test page\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // ==========================================
        // SCREENSHOT 1: Full Page Screenshot
        // ==========================================
        
        console.log("Taking full page screenshot...");
        
        // LINE 118: Take full page screenshot
        await page.screenshot({ 
            path: 'screenshots/01-full-page.png'  // ✓ Save to screenshots folder
        }); // ✓ Screenshot saved
        
        console.log("✓ Saved: screenshots/01-full-page.png\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // ==========================================
        // SCREENSHOT 2: Element Screenshot
        // ==========================================
        
        console.log("Taking element screenshot (success box only)...");
        
        // LINE 132: Take screenshot of specific element
        const successBox = page.locator('#successBox'); // ✓ Find success box
        await successBox.screenshot({ 
            path: 'screenshots/02-success-element.png'  // ✓ Save element screenshot
        }); // ✓ Element screenshot saved
        
        console.log("✓ Saved: screenshots/02-success-element.png\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // ==========================================
        // SCREENSHOT 3: Error Box Screenshot
        // ==========================================
        
        console.log("Taking error box screenshot...");
        
        // LINE 148: Take screenshot of error element
        const errorBox = page.locator('#errorBox'); // ✓ Find error box
        await errorBox.screenshot({ 
            path: 'screenshots/03-error-element.png'  // ✓ Save error screenshot
        }); // ✓ Error screenshot saved
        
        console.log("✓ Saved: screenshots/03-error-element.png\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // ==========================================
        // SCREENSHOT 4: With Timestamp
        // ==========================================
        
        console.log("Taking screenshot with timestamp in filename...");
        
        // LINE 164: Create timestamp for unique filename
        const timestamp = new Date().toISOString().replace(/:/g, '-'); // ✓ timestamp = "2026-03-23T10-30-45.123Z"
        
        // LINE 167: Take screenshot with timestamp
        await page.screenshot({ 
            path: `screenshots/04-timestamped-${timestamp}.png`  // ✓ Unique filename
        }); // ✓ Screenshot saved with timestamp
        
        console.log(`✓ Saved: screenshots/04-timestamped-${timestamp}.png\n`);
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // ==========================================
        // SCREENSHOT 5: Specific Viewport Size
        // ==========================================
        
        console.log("Taking screenshot at specific size (mobile view)...");
        
        // LINE 182: Set viewport to mobile size
        await page.setViewportSize({ 
            width: 375,   // ✓ iPhone width
            height: 667   // ✓ iPhone height
        }); // ✓ Viewport resized to mobile
        
        await page.waitForTimeout(500); // ✓ Wait for resize
        
        // LINE 190: Take mobile screenshot
        await page.screenshot({ 
            path: 'screenshots/05-mobile-view.png'  // ✓ Mobile screenshot
        }); // ✓ Mobile screenshot saved
        
        console.log("✓ Saved: screenshots/05-mobile-view.png\n");
        
        // LINE 197: Reset viewport to desktop
        await page.setViewportSize({ 
            width: 1280,
            height: 720
        }); // ✓ Back to desktop size
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // ==========================================
        // SUMMARY
        // ==========================================
        
        console.log("=".repeat(60));
        console.log("SCREENSHOT TYPES DEMONSTRATED");
        console.log("=".repeat(60));
        console.log("");
        console.log("✓ Full Page Screenshot");
        console.log("  - Captures entire page");
        console.log("  - Good for overall view");
        console.log("");
        console.log("✓ Element Screenshot");
        console.log("  - Captures specific element");
        console.log("  - Focuses on important parts");
        console.log("");
        console.log("✓ Timestamped Screenshot");
        console.log("  - Unique filename with date/time");
        console.log("  - Prevents overwriting");
        console.log("");
        console.log("✓ Viewport-Specific Screenshot");
        console.log("  - Mobile, tablet, or desktop view");
        console.log("  - Tests responsive design");
        console.log("");
        console.log("All screenshots saved in: screenshots/");
        console.log("=".repeat(60));
        console.log("");
        
    } catch (error) {
        console.error("\n❌ ERROR:", error.message);
    } finally {
        // LINE 239: Close browser
        await browser.close(); // ✓ Browser closes
    }
    
    console.log("=== Screenshots Demo Complete! ===");
}

// LINE 245: RUN THE FUNCTION
basicScreenshots(); // ✓ Everything starts here!