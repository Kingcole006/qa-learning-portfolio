// ============================================
// PLAYWRIGHT BASICS
// Your first browser automation!
// ============================================

// LINE 1: Load Playwright
const { chromium } = require('playwright'); // ✓ Playwright library loaded

// LINE 3: Define function
async function myFirstTest() {
    console.log("=== Starting Browser Automation ===\n");
    
    // LINE 7: Launch browser
    console.log("Step 1: Launching Chrome browser...");
    const browser = await chromium.launch({ 
        headless: false,  // Show the browser (so you can see it!)
        slowMo: 500       // Slow down by 500ms (easier to watch)
    });
    console.log("✓ Browser launched!\n");
    
    // LINE 10: Create new page (tab)
    console.log("Step 2: Opening new tab...");
    const page = await browser.newPage();
    console.log("✓ Tab ready!\n");
    
    // LINE 13: Navigate to website
    console.log("Step 3: Going to Example.com...");
    await page.goto('https://example.com');
    console.log("✓ Page loaded!\n");
    
    // LINE 16: Get page title
    console.log("Step 4: Getting page title...");
    const title = await page.title();
    console.log(`✓ Title: "${title}"\n`);
    
    // LINE 19: Take a screenshot
    console.log("Step 5: Taking screenshot...");
    await page.screenshot({ path: 'example-page.png' });
    console.log("✓ Screenshot saved as 'example-page.png'\n");
    
    // LINE 22: Wait so you can see
    console.log("Step 6: Waiting 3 seconds...");
    await page.waitForTimeout(3000);
    console.log("✓ Done!\n");
    
    // LINE 25: Close browser
    console.log("Step 7: Closing browser...");
    await browser.close();
    console.log("✓ Browser closed!\n");
    
    console.log("=== Test Complete! ===");
}

// Run it!
myFirstTest();