// ============================================
// EXTRACTING DATA
// Getting information from web pages
// ============================================

// LINE 1: Load Playwright
const { chromium } = require('playwright'); // ✓ Playwright library loaded

// LINE 3: Define function
async function extractData() {
    console.log("=== Extracting Data from Hacker News ===\n");
    
    // Line 7: Launch browser
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 500
    }); // ✓ Chrome window opens on screen (takes 2 seconds)

    // LINE 13: Create tab
    const page = await browser.newPage(); // ✓ New tab created
    
    // Go to Hacker News (the site QA Wolf uses!)
    console.log("Going to Hacker News...");
    await page.goto('https://news.ycombinator.com/newest'); // ✓ Hacker News loads
    console.log("✓ Page loaded!\n");
    
    // ==========================================
    // EXTRACT: Get first article title
    // ==========================================
    
    console.log("Getting first article title...");
    
    // Find the first article title
    const firstTitle = page.locator('.titleline').first(); // ✓ Finds first <span class="titleline">
    const titleText = await firstTitle.textContent(); // ✓ Gets: "Show HN: I built a new app"
    console.log(`First article: "${titleText}"\n`); // ✓ Prints: First article: "Show HN: I built a new app"
    
    // ==========================================
    // EXTRACT: Get ALL article titles
    // ==========================================
    
    console.log("Getting first 10 article titles...");
    
    // Find ALL articles
    const allTitles = page.locator('.titleline'); // ✓ Finds ALL 30 titleline elements
    const count = await allTitles.count(); // ✓ count = 30 (there are 30 articles on the page)
    console.log(`Total articles on page: ${count}\n`);
    
    // Get first 10 titles
    console.log("First 10 articles:");
    for (let i = 0; i < 10; i++) {
        const title = await allTitles.nth(i).textContent(); 
        console.log(`${i + 1}. ${title}`);
    } 
    // ✓ Prints first 10 titles:
    // 1. Show HN: I built a new app
    // 2. Ask HN: What tools do you use?
    // 3. Why Python is slow
    // ...

    console.log("");
    
    // ==========================================
    // EXTRACT: Get article ages (timestamps)
    // ==========================================
    
    console.log("Getting article ages (timestamps)...");
    
    // Find age elements
    const ages = page.locator('.age'); // ✓ Finds ALL 30 age elements
    const ageCount = await ages.count(); // ✓ ageCount = 30 (there are 30 articles, so 30 ages)
    
    console.log(`Found ${ageCount} timestamps\n`);
    
    // Get first 10 ages
    console.log("First 10 article ages:");
    for (let i = 0; i < 10; i++) {
        const age = await ages.nth(i).getAttribute('title'); // Result: "2024-03-01T10:30:00" (Exact timestamp in ISO format)
        console.log(`${i + 1}. ${age}`);
    }
    // ✓ Prints first 10 timestamps:
    // 1. 2024-03-01T10:30:00
    // 2. 2024-03-01T10:27:00
    // 3. 2024-03-01T10:15:00
    // ...

    console.log("");
    
    await page.waitForTimeout(3000); // ✓ Waits 3 seconds (so you can see)
    await browser.close(); // ✓ Browser closes
    
    console.log("=== Data Extraction Complete! ===");
}

extractData();