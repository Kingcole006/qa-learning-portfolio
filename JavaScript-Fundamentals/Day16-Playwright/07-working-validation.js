// ============================================
// WORKING VALIDATION - FIXED TIMESTAMP PARSING
// Now we handle the timestamp format correctly!
// ============================================

const { chromium } = require('playwright');

async function validateSortingWorking() {
    console.log("=== WORKING Validation - Hacker News Sorting ===\n");
    
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 500
    });
    const page = await browser.newPage();
    
    console.log("Step 1: Going to Hacker News...");
    await page.goto('https://news.ycombinator.com/newest');
    console.log("✓ Page loaded!\n");
    
    // ==========================================
    // Get timestamps
    // ==========================================
    
    console.log("Step 2: Getting timestamps...");
    
    const ages = page.locator('.age');
    const count = await ages.count();
    console.log(`Found ${count} articles\n`);
    
    const timestamps = [];
    
    console.log("Getting first 10 timestamps:");
    for (let i = 0; i < 10; i++) {
        const rawTimestamp = await ages.nth(i).getAttribute('title');
        
        // FIX: Extract just the ISO part (before the space)
        const cleanTimestamp = rawTimestamp.split(' ')[0];
        
        timestamps.push(cleanTimestamp);
        
        // Also get visible text
        const visibleText = await ages.nth(i).textContent();
        console.log(`${i + 1}. ${visibleText.padEnd(20)} → ${cleanTimestamp}`);
    }
    console.log("");
    
    // ==========================================
    // Validate sorting (NEWEST to OLDEST)
    // ==========================================
    
    console.log("Step 3: Validating sorting (newest → oldest)...\n");
    
    let isSorted = true;
    let errors = [];
    
    for (let i = 0; i < timestamps.length - 1; i++) {
        const current = timestamps[i];
        const next = timestamps[i + 1];
        
        const currentDate = new Date(current);
        const nextDate = new Date(next);
        
        console.log(`Comparing ${i + 1} vs ${i + 2}:`);
        console.log(`  ${current} vs ${next}`);
        
        // For NEWEST to OLDEST:
        // Current should be >= (newer or equal) to next
        if (currentDate >= nextDate) {
            console.log(`  ✓ PASS - Article ${i + 1} is newer than or equal to ${i + 2}\n`);
        } else {
            console.log(`  ✗ FAIL - Article ${i + 1} is OLDER than ${i + 2}!\n`);
            isSorted = false;
            errors.push(`Position ${i + 1} (${current}) and ${i + 2} (${next}) are out of order`);
        }
    }
    
    // ==========================================
    // Print results
    // ==========================================
    
    console.log("=".repeat(60));
    console.log("VALIDATION RESULTS");
    console.log("=".repeat(60));
    
    if (isSorted) {
        console.log("✓ SUCCESS! All articles are sorted NEWEST to OLDEST!");
        console.log(`  Validated ${timestamps.length} articles`);
    } else {
        console.log("✗ FAILURE! Articles are NOT sorted correctly!");
        console.log("\nErrors found:");
        errors.forEach(error => console.log(`  - ${error}`));
    }
    
    console.log("=".repeat(60) + "\n");
    
    await page.waitForTimeout(3000);
    await browser.close();
    
    console.log("=== Validation Complete! ===");
}

validateSortingWorking();