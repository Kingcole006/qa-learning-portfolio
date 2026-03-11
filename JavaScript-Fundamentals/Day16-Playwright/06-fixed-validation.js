// ============================================
// FIXED VALIDATION - CORRECT LOGIC
// Properly checking newest to oldest
// ============================================

const { chromium } = require('playwright');

async function validateSortingFixed() {
    console.log("=== FIXED Validation - Checking Sorting ===\n");
    
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
        const timestamp = await ages.nth(i).getAttribute('title');
        timestamps.push(timestamp);
        
        // Also get visible text to see
        const visibleText = await ages.nth(i).textContent();
        console.log(`${i + 1}. ${visibleText} (${timestamp})`);
    }
    console.log("");
    
    // ==========================================
    // FIXED VALIDATION LOGIC
    // ==========================================
    
    console.log("Step 3: Validating sorting...\n");
    
    let isSorted = true;
    let errors = [];
    
    // Check each consecutive pair
    for (let i = 0; i < timestamps.length - 1; i++) {
        const current = timestamps[i];
        const next = timestamps[i + 1];
        
        const currentDate = new Date(current);
        const nextDate = new Date(next);
        
        console.log(`Comparing ${i + 1} vs ${i + 2}:`);
        console.log(`  Article ${i + 1}: ${current}`);
        console.log(`  Article ${i + 2}: ${next}`);
        
        // THE FIX: For newest to oldest,
        // current should be GREATER (newer) OR EQUAL to next
        // This means: currentDate >= nextDate should be TRUE
        
        // BUT - if we're getting failures, articles might be 
        // sorted OLDEST to NEWEST instead!
        // So let's check BOTH directions and see what's actually happening
        
        if (currentDate >= nextDate) {
            console.log(`  ✓ Current is NEWER or EQUAL - Correct for newest→oldest\n`);
        } else {
            console.log(`  ✗ Current is OLDER - Would be correct for oldest→newest\n`);
            isSorted = false;
            errors.push(`Position ${i + 1} and ${i + 2} are out of order for newest→oldest`);
        }
    }
    
    // ==========================================
    // Print results
    // ==========================================
    
    console.log("=".repeat(50));
    console.log("VALIDATION RESULTS");
    console.log("=".repeat(50));
    
    if (isSorted) {
        console.log("✓ SUCCESS! Articles are sorted NEWEST to OLDEST!");
    } else {
        console.log("✗ FAILURE! Articles are NOT sorted newest to oldest!");
        console.log("\nThis might mean:");
        console.log("1. Hacker News /newest page is sorted OLDEST to NEWEST");
        console.log("2. Or there's a bug in Hacker News");
        console.log("3. Or we need to check a different page\n");
        
        console.log("Errors found:");
        errors.forEach(error => console.log(`  - ${error}`));
    }
    
    console.log("=".repeat(50) + "\n");
    
    // ==========================================
    // Let's also check if it's sorted OLDEST to NEWEST
    // ==========================================
    
    console.log("ALTERNATIVE CHECK: Is it sorted OLDEST to NEWEST?\n");
    
    let isOldestFirst = true;
    
    for (let i = 0; i < timestamps.length - 1; i++) {
        const current = timestamps[i];
        const next = timestamps[i + 1];
        
        const currentDate = new Date(current);
        const nextDate = new Date(next);
        
        // For oldest to newest: current should be LESS than or equal to next
        if (currentDate <= nextDate) {
            // This is correct for oldest→newest
        } else {
            isOldestFirst = false;
            break;
        }
    }
    
    if (isOldestFirst) {
        console.log("✓ YES! Articles ARE sorted OLDEST to NEWEST!");
        console.log("   (This is the opposite of what we expected)\n");
    } else {
        console.log("✗ NO, not sorted oldest to newest either");
        console.log("   (Articles might be randomly ordered?)\n");
    }
    
    await page.waitForTimeout(3000);
    await browser.close();
    
    console.log("=== Validation Complete! ===");
}

validateSortingFixed();