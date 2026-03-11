// ============================================
// VALIDATING SORTING
// Checking if articles are sorted newest to oldest
// ============================================

// LINE 1: Load Playwright 
const { chromium } = require('playwright'); // ✓ Playwright library loaded

// LINE 3: Define function
async function validateSorting() {
    console.log("=== Validating Article Sorting ===\n");
    
    // LINE 7: Launch browser
    const browser = await chromium.launch({ 
        headless: false, // Show the browser (so you can see it!)
        slowMo: 500 // Slow down by 500ms (easier to watch)
    });

    // LINE 10: Create new page (tab)
    const page = await browser.newPage();
    
    // Navigate to Hacker News
    console.log("Step 1: Going to Hacker News...");
    await page.goto('https://news.ycombinator.com/newest');
    console.log("✓ Page loaded!\n");
    
    // ==========================================
    // STEP 2: Get All Timestamps
    // ==========================================
    
    console.log("Step 2: Getting all timestamps...");
    
    const ages = page.locator('.age'); // Find all age elements
    const count = await ages.count(); // Count how many (usually 30)
    console.log(`Found ${count} articles\n`);
    
    // Start with empty array:
    const timestamps = [];
    
    // Get first 10 timestamps (keeping it simple for now)
    console.log("Getting first 10 timestamps:");
    for (let i = 0; i < 10; i++) {
        const timestamp = await ages.nth(i).getAttribute('title');
        timestamps.push(timestamp);
        console.log(`${i + 1}. ${timestamp}`);
    }
    console.log("");
    
    // ==========================================
    // STEP 3: Validate Sorting
    // ==========================================
    
    console.log("Step 3: Validating sorting...\n");
    
    let isSorted = true; // Start as true
    // ... later ...
    let errors = []; // Change to false if error found!
    
    // Check each pair of consecutive timestamps
    for (let i = 0; i < timestamps.length - 1; i++) {
         // Last iteration: i = 8
         // current = timestamps[8]
         // next = timestamps[9]  ← This exists! ✓

        const current = timestamps[i]; // index [number] - e.g. index 9 = "2024-06-15T12:34:56Z"
        const next = timestamps[i + 1]; // index 10 - DOESN'T EXIST! ERROR!
        
        // Convert to Date objects for comparison
        const currentDate = new Date(current);
        const nextDate = new Date(next);
        
        console.log(`Comparing ${i + 1} vs ${i + 2}:`);
        console.log(`  ${current}`);
        console.log(`  ${next}`);
        
        // Current should be NEWER (greater) than next
        if (currentDate >= nextDate) {
            console.log(`  ✓ PASS - Article ${i + 1} is newer than ${i + 2}\n`);
        } else {
            console.log(`  ✗ FAIL - Article ${i + 1} is OLDER than ${i + 2}!\n`);
            isSorted = false;
            errors.push(`Position ${i + 1} and ${i + 2} are out of order`);
        }
    }
    
    // ==========================================
    // STEP 4: Print Results
    // ==========================================
    
    console.log("=".repeat(50));
    console.log("VALIDATION RESULTS");
    console.log("=".repeat(50));
    
    if (isSorted) {
        console.log("✓ SUCCESS! All articles are sorted newest to oldest!");
    } else {
        console.log("✗ FAILURE! Articles are NOT sorted correctly!");
        console.log("\nErrors found:");
        errors.forEach(error => console.log(`  - ${error}`));
    }
    
    console.log("=".repeat(50) + "\n");
    
    await page.waitForTimeout(3000);
    await browser.close();
    
    console.log("=== Validation Complete! ===");
}

validateSorting();