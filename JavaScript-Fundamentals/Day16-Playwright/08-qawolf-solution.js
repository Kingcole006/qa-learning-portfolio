// ============================================
// QA WOLF SOLUTION
// Validate first 100 articles on Hacker News
// ============================================

const { chromium } = require('playwright');

async function validateHackerNews100() {
    console.log("=== QA WOLF: Hacker News Sorting Validation ===\n");
    
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 100  // Faster now that we know it works
    });
    const page = await browser.newPage();
    
    console.log("Navigating to Hacker News /newest...");
    await page.goto('https://news.ycombinator.com/newest');
    console.log("✓ Page loaded!\n");
    
    // ==========================================
    // Collect 100 timestamps
    // ==========================================
    
    console.log("Collecting first 100 article timestamps...\n");
    
    const timestamps = [];
    let currentPage = 1;
    
    // We need 100 articles total
    // Hacker News shows 30 per page
    // So: 30 + 30 + 30 + 10 = 100
    
    while (timestamps.length < 100) {
        console.log(`Page ${currentPage}: Getting articles...`);
        
        // Get all age elements on current page
        const ages = page.locator('.age');
        const count = await ages.count();
        
        console.log(`  Found ${count} articles on this page`);
        
        // Calculate how many we need from this page
        const needed = 100 - timestamps.length;
        const toGet = Math.min(needed, count);
        
        console.log(`  Taking ${toGet} articles (need ${needed} more total)`);
        
        // Get timestamps from this page
        for (let i = 0; i < toGet; i++) {
            const rawTimestamp = await ages.nth(i).getAttribute('title');
            const cleanTimestamp = rawTimestamp.split(' ')[0];
            timestamps.push(cleanTimestamp);
        }
        
        console.log(`  Total collected so far: ${timestamps.length}\n`);
        
        // If we need more, go to next page
        if (timestamps.length < 100) {
            console.log(`  Clicking "More" to go to next page...`);
            
            // Find and click the "More" link
            const moreLink = page.getByText('More');
            await moreLink.click();
            
            // Wait for new page to load
            await page.waitForLoadState('networkidle');
            
            currentPage++;
            console.log(`  ✓ Loaded page ${currentPage}\n`);
        }
    }
    
    console.log(`✓ Collected exactly ${timestamps.length} timestamps!\n`);
    
    // ==========================================
    // Validate sorting
    // ==========================================
    
    console.log("=".repeat(60));
    console.log("VALIDATING SORTING (NEWEST → OLDEST)");
    console.log("=".repeat(60) + "\n");
    
    let isSorted = true;
    let errors = [];
    let passCount = 0;
    
    // Check each consecutive pair
    for (let i = 0; i < timestamps.length - 1; i++) {
        const current = timestamps[i];
        const next = timestamps[i + 1];
        
        const currentDate = new Date(current);
        const nextDate = new Date(next);
        
        // For newest to oldest: current >= next
        if (currentDate >= nextDate) {
            passCount++;
            
            // Only print first 5 and last 5 to keep output clean
            if (i < 5 || i >= timestamps.length - 6) {
                console.log(`✓ Article ${i + 1} → ${i + 2}: PASS`);
            } else if (i === 5) {
                console.log(`  ... (${timestamps.length - 12} more comparisons) ...`);
            }
        } else {
            isSorted = false;
            errors.push({
                position: i + 1,
                current: current,
                next: next
            });
            console.log(`✗ Article ${i + 1} → ${i + 2}: FAIL`);
            console.log(`  ${current} is OLDER than ${next}`);
        }
    }
    
    // ==========================================
    // Print final results
    // ==========================================
    
    console.log("\n" + "=".repeat(60));
    console.log("FINAL RESULTS");
    console.log("=".repeat(60));
    
    console.log(`Total articles validated: ${timestamps.length}`);
    console.log(`Total comparisons made: ${timestamps.length - 1}`);
    console.log(`Comparisons passed: ${passCount}`);
    console.log(`Comparisons failed: ${errors.length}`);
    
    if (isSorted) {
        console.log("\n✓✓✓ SUCCESS! ✓✓✓");
        console.log(`All ${timestamps.length} articles are sorted NEWEST to OLDEST!`);
    } else {
        console.log("\n✗✗✗ FAILURE! ✗✗✗");
        console.log("Articles are NOT sorted correctly!");
        console.log("\nErrors found:");
        errors.forEach(error => {
            console.log(`  Position ${error.position}: ${error.current} > ${error.next}`);
        });
    }
    
    console.log("=".repeat(60) + "\n");
    
    // ==========================================
    // Show first 10 and last 10 for verification
    // ==========================================
    
    console.log("FIRST 10 ARTICLES:");
    for (let i = 0; i < 10; i++) {
        console.log(`  ${i + 1}. ${timestamps[i]}`);
    }
    
    console.log("\nLAST 10 ARTICLES:");
    for (let i = 90; i < 100; i++) {
        console.log(`  ${i + 1}. ${timestamps[i]}`);
    }
    
    console.log("");
    
    await page.waitForTimeout(3000);
    await browser.close();
    
    console.log("=== Test Complete! ===");
}

validateHackerNews100();