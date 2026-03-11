// ============================================
// DEBUG TIMESTAMPS
// Let's see what we're actually getting!
// ============================================

const { chromium } = require('playwright');

async function debugTimestamps() {
    console.log("=== Debugging Timestamps ===\n");
    
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 500
    });
    const page = await browser.newPage();
    
    await page.goto('https://news.ycombinator.com/newest');
    console.log("✓ Page loaded!\n");
    
    // Get first 5 timestamps
    const ages = page.locator('.age');
    
    console.log("First 5 articles:\n");
    
    for (let i = 0; i < 5; i++) {
        // Get the visible text
        const visibleText = await ages.nth(i).textContent();
        
        // Get the title attribute
        const timestamp = await ages.nth(i).getAttribute('title');
        
        console.log(`Article ${i + 1}:`);
        console.log(`  Visible: ${visibleText}`);
        console.log(`  Timestamp: ${timestamp}`);
        
        // Convert to Date
        const date = new Date(timestamp);
        console.log(`  As Date: ${date}`);
        console.log("");
    }
    
    // Now let's compare first two
    console.log("=".repeat(50));
    console.log("COMPARISON TEST");
    console.log("=".repeat(50) + "\n");
    
    const first = await ages.nth(0).getAttribute('title');
    const second = await ages.nth(1).getAttribute('title');
    
    const date1 = new Date(first);
    const date2 = new Date(second);
    
    console.log(`First article:  ${first}`);
    console.log(`Second article: ${second}\n`);
    
    console.log(`As dates:`);
    console.log(`First:  ${date1}`);
    console.log(`Second: ${date2}\n`);
    
    console.log(`Comparisons:`);
    console.log(`date1 > date2:  ${date1 > date2}`);
    console.log(`date1 < date2:  ${date1 < date2}`);
    console.log(`date1 >= date2: ${date1 >= date2}`);
    console.log(`date1 <= date2: ${date1 <= date2}`);
    console.log(`date1 == date2: ${date1 == date2}\n`);
    
    console.log(`Which is newer?`);
    if (date1 > date2) {
        console.log(`Article 1 is NEWER (more recent)`);
    } else if (date2 > date1) {
        console.log(`Article 2 is NEWER (more recent)`);
    } else {
        console.log(`They are the SAME time`);
    }
    
    await page.waitForTimeout(5000);
    await browser.close();
}

debugTimestamps();