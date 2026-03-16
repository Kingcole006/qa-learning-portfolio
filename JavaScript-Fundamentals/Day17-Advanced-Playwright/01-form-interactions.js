// ============================================
// ADVANCED FORM INTERACTIONS
// Typing, clicking, selecting, checking
// ============================================

const { chromium } = require('playwright');

async function advancedFormInteractions() {
    console.log("=== Advanced Form Interactions ===\n");
    
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 500,
        ignoreHTTPSErrors: true  // Ignore SSL certificate errors
    });
    const page = await browser.newPage();
    
    // ==========================================
    // PART 1: Basic Form Filling with DemoQA
    // ==========================================
    
    console.log("Part 1: Basic form filling\n");
    
    // Go to DemoQA practice form (more reliable!)
    await page.goto('https://demoqa.com/text-box');
    console.log("✓ Navigated to form demo\n");
    
    await page.waitForTimeout(1000);
    
    // Fill Full Name
    console.log("Filling full name...");
    await page.locator('#userName').fill('Cole Brown');
    console.log("✓ Name filled\n");
    
    await page.waitForTimeout(500);
    
    // Fill Email
    console.log("Filling email...");
    await page.locator('#userEmail').fill('cole@test.com');
    console.log("✓ Email filled\n");
    
    await page.waitForTimeout(500);
    
    // Fill Current Address
    console.log("Filling current address...");
    await page.locator('#currentAddress').fill('123 Main Street, Sugar Hill, GA');
    console.log("✓ Current address filled\n");
    
    await page.waitForTimeout(500);
    
    // Fill Permanent Address
    console.log("Filling permanent address...");
    await page.locator('#permanentAddress').fill('456 Oak Avenue, Sugar Hill, GA');
    console.log("✓ Permanent address filled\n");
    
    await page.waitForTimeout(1000);
    
    // Scroll submit button into view
    console.log("Scrolling to submit button...");
    const submitButton = page.locator('#submit');
    await submitButton.scrollIntoViewIfNeeded();
    console.log("✓ Scrolled to submit button\n");
    
    await page.waitForTimeout(500);
    
    // Click submit
    console.log("Clicking submit button...");
    await submitButton.click();
    console.log("✓ Submit clicked\n");
    
    await page.waitForTimeout(2000);
    
    // Check if output appeared
    console.log("Checking output...");
    const output = await page.locator('#output');
    const isVisible = await output.isVisible();
    
    if (isVisible) {
        console.log("✓ Output is visible!\n");
        const outputText = await output.textContent();
        console.log("Output contains:");
        console.log(outputText.substring(0, 100) + "...\n");
    } else {
        console.log("✗ Output not visible\n");
    }
    
    await page.waitForTimeout(2000);
    
    // ==========================================
    // PART 2: Different Input Methods
    // ==========================================
    
    console.log("Part 2: Comparing fill() vs type()\n");
    
    // Navigate to another form
    await page.goto('https://demoqa.com/automation-practice-form');
    console.log("✓ Navigated to practice form\n");
    
    await page.waitForTimeout(1000);
    
    // Fill first name with .fill() (FAST)
    console.log("Filling first name with .fill() (instant)...");
    await page.locator('#firstName').fill('Cole');
    console.log("✓ First name filled (fast!)\n");
    
    await page.waitForTimeout(1000);
    
    // Type last name with .type() (SLOW)
    console.log("Typing last name with .type() (watch it type slowly)...");
    await page.locator('#lastName').type('Brown', { delay: 150 });
    console.log("✓ Last name typed (slow!)\n");
    
    await page.waitForTimeout(1000);
    
    // Fill email
    console.log("Filling email...");
    await page.locator('#userEmail').fill('cole.brown@example.com');
    console.log("✓ Email filled\n");
    
    await page.waitForTimeout(3000);
    
    await browser.close();
    
    console.log("=== Form Interactions Complete! ===");
}

advancedFormInteractions();