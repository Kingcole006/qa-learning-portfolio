// ============================================
// FINDING ELEMENTS
// Learning selectors - the key to Playwright!
// ============================================

// LINE 1: Load Playwright
const { chromium } = require('playwright'); // ✓ Playwright library loaded

// LINE 3: Define function
async function learnSelectors() {
    console.log("=== Learning to Find Elements ===\n");
    
    // LINE 7: Launch browser
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 1000  // 1 second delay so you can see!
    }); // ✓ Chrome opens (you see it!)

    // LINE 10: Create page
    const page = await browser.newPage(); // ✓ New tab appears
    
    // LINE 13: Navigate - go to example.com
    await page.goto('https://example.com');
    console.log("✓ Page loaded\n"); // ✓ Loads example.com (you see the page)
    
    // ==========================================
    // METHOD 1: Find by Text
    // ==========================================
    
    console.log("Method 1: Finding by text...");

    const heading = page.getByText('Example Domain'); // ✓ Finds the heading (h1) element (you see it highlighted)
    const headingText = await heading.textContent(); // ✓ Gets "Example Domain" - Read what it says
    console.log(`Found: "${headingText}"`); // ✓ Prints: "Example Domain" - headingText = "Example Domain"
    console.log("✓ Found element by text!\n");
    
    // ==========================================
    // METHOD 2: Find by Role
    // ==========================================
    
    console.log("Method 2: Finding by role...");
    
    const link = page.getByRole('link'); // ✓ Finds the <a> tag (you see it highlighted)
    const linkText = await link.textContent(); // ✓ Gets "More information..."
    console.log(`Found link: "${linkText}"`); // ✓ Prints: "More information..." - linkText = "More information..."
    console.log("✓ Found element by role!\n");
    
    // ==========================================
    // METHOD 3: Find by CSS Selector
    // ==========================================
    
    console.log("Method 3: Finding by CSS selector...");
    
    const h1 = page.locator('h1'); // ✓ Finds the h1 tag (you see it highlighted)
    const h1Text = await h1.textContent(); // ✓ Gets "Example Domain"
    console.log(`Found h1: "${h1Text}"`); // ✓ Prints: "Example Domain" - h1Text = "Example Domain"
    console.log("✓ Found element by CSS!\n");
    
    // ==========================================
    // METHOD 4: Getting Multiple Elements
    // ==========================================
    
    console.log("Method 4: Finding ALL paragraphs...");
    
    const paragraphs = page.locator('p'); // ✓ Finds all <p> tags (2 of them)
    const count = await paragraphs.count(); // ✓ count = 2
    console.log(`Found ${count} paragraphs`);
    
    // Get text from each paragraph
    for (let i = 0; i < count; i++) {  // Loop 1: i = 0
        const text = await paragraphs.nth(i).textContent(); // Gets first paragraph text
        console.log(`  Paragraph ${i + 1}: "${text.substring(0, 50)}..."`);
    }
    console.log("✓ Found all paragraphs!\n");
    
    // 8. Wait and close
    await page.waitForTimeout(3000); // ✓ Waits 3 seconds
    await browser.close(); // ✓ Browser closes
    
    console.log("=== Selector Learning Complete! ===");
}

learnSelectors();
