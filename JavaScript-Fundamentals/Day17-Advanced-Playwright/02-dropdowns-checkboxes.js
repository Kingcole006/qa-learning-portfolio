// ============================================
// DROPDOWNS, CHECKBOXES & RADIO BUTTONS
// Advanced form element interactions
// Using reliable demo sites
// ============================================

const { chromium } = require('playwright');

async function advancedFormElements() {
    console.log("=== Advanced Form Elements ===\n");
    
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 800,
        ignoreHTTPSErrors: true
    });
    const page = await browser.newPage();
    
    try {
        // ==========================================
        // PART 1: Checkboxes
        // ==========================================
        
        console.log("Part 1: Checkboxes\n");
        
        await page.goto('https://the-internet.herokuapp.com/checkboxes');
        console.log("✓ Navigated to checkbox demo\n");
        
        await page.waitForTimeout(1000);
        
        // Get all checkboxes
        const checkboxes = page.locator('input[type="checkbox"]');
        const count = await checkboxes.count();
        console.log(`Found ${count} checkboxes\n`);
        
        // Check first checkbox
        console.log("Checking first checkbox...");
        const firstCheckbox = checkboxes.first();
        
        // Check if already checked
        const isChecked = await firstCheckbox.isChecked();
        console.log(`First checkbox is currently: ${isChecked ? 'CHECKED' : 'UNCHECKED'}\n`);
        
        if (!isChecked) {
            await firstCheckbox.check();
            console.log("✓ First checkbox is now CHECKED\n");
        } else {
            console.log("(Already checked, skipping)\n");
        }
        
        await page.waitForTimeout(2000);
        
        // Uncheck second checkbox
        console.log("Unchecking second checkbox...");
        const secondCheckbox = checkboxes.nth(1);
        const isSecondChecked = await secondCheckbox.isChecked();
        console.log(`Second checkbox is currently: ${isSecondChecked ? 'CHECKED' : 'UNCHECKED'}\n`);
        
        if (isSecondChecked) {
            await secondCheckbox.uncheck();
            console.log("✓ Second checkbox is now UNCHECKED\n");
        } else {
            console.log("(Already unchecked, skipping)\n");
        }
        
        await page.waitForTimeout(2000);
        
        // ==========================================
        // PART 2: Dropdowns
        // ==========================================
        
        console.log("Part 2: Dropdowns\n");
        
        await page.goto('https://the-internet.herokuapp.com/dropdown');
        console.log("✓ Navigated to dropdown demo\n");
        
        await page.waitForTimeout(1000);
        
        // Select from dropdown
        console.log("Selecting 'Option 1' from dropdown...");
        const dropdown = page.locator('#dropdown');
        await dropdown.selectOption('1');
        console.log("✓ Selected 'Option 1'\n");
        
        await page.waitForTimeout(2000);
        
        // Select different option
        console.log("Selecting 'Option 2' from dropdown...");
        await dropdown.selectOption('2');
        console.log("✓ Selected 'Option 2'\n");
        
        await page.waitForTimeout(2000);
        
        // ==========================================
        // PART 3: Radio Buttons (Custom Example)
        // ==========================================
        
        console.log("Part 3: Radio Buttons\n");
        
        // Create a simple HTML page with radio buttons
        await page.setContent(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Radio Button Demo</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 50px;
                        font-size: 18px;
                    }
                    label {
                        display: block;
                        margin: 15px 0;
                        cursor: pointer;
                    }
                    input[type="radio"] {
                        margin-right: 10px;
                        width: 20px;
                        height: 20px;
                        cursor: pointer;
                    }
                    h2 {
                        color: #333;
                    }
                    #result {
                        margin-top: 30px;
                        padding: 20px;
                        background: #e8f5e9;
                        border-radius: 5px;
                        font-weight: bold;
                        display: none;
                    }
                </style>
            </head>
            <body>
                <h2>What's your favorite programming language?</h2>
                
                <label>
                    <input type="radio" name="language" value="javascript" id="jsRadio">
                    JavaScript
                </label>
                
                <label>
                    <input type="radio" name="language" value="python" id="pythonRadio">
                    Python
                </label>
                
                <label>
                    <input type="radio" name="language" value="java" id="javaRadio">
                    Java
                </label>
                
                <div id="result"></div>
                
                <script>
                    const radios = document.querySelectorAll('input[type="radio"]');
                    const result = document.getElementById('result');
                    
                    radios.forEach(radio => {
                        radio.addEventListener('change', (e) => {
                            result.style.display = 'block';
                            result.textContent = 'You selected: ' + e.target.value;
                        });
                    });
                </script>
            </body>
            </html>
        `);
        
        console.log("✓ Created custom radio button page\n");
        
        await page.waitForTimeout(1000);
        
        // Select JavaScript radio button
        console.log("Selecting 'JavaScript' radio button...");
        await page.locator('#jsRadio').check();
        console.log("✓ 'JavaScript' selected\n");
        
        await page.waitForTimeout(1500);
        
        // Get result text
        let resultText = await page.locator('#result').textContent();
        console.log(`Result shows: "${resultText}"\n`);
        
        await page.waitForTimeout(1000);
        
        // Select Python radio button
        console.log("Selecting 'Python' radio button...");
        await page.locator('#pythonRadio').check();
        console.log("✓ 'Python' selected\n");
        
        await page.waitForTimeout(1500);
        
        // Get new result
        resultText = await page.locator('#result').textContent();
        console.log(`Result now shows: "${resultText}"\n`);
        
        await page.waitForTimeout(2000);
        
        // ==========================================
        // PART 4: Multiple Checkboxes
        // ==========================================
        
        console.log("Part 4: Working with Multiple Checkboxes\n");
        
        // Create HTML with multiple checkboxes
        await page.setContent(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Multiple Checkboxes Demo</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 50px;
                        font-size: 18px;
                    }
                    label {
                        display: block;
                        margin: 15px 0;
                        cursor: pointer;
                    }
                    input[type="checkbox"] {
                        margin-right: 10px;
                        width: 20px;
                        height: 20px;
                        cursor: pointer;
                    }
                    h2 {
                        color: #333;
                    }
                    #result {
                        margin-top: 30px;
                        padding: 20px;
                        background: #e3f2fd;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <h2>Select your favorite cars:</h2>
                
                <label>
                    <input type="checkbox" value="volvo" id="volvoCheckbox">
                    Volvo
                </label>
                
                <label>
                    <input type="checkbox" value="audi" id="audiCheckbox">
                    Audi
                </label>
                
                <label>
                    <input type="checkbox" value="bmw" id="bmwCheckbox">
                    BMW
                </label>
                
                <label>
                    <input type="checkbox" value="mercedes" id="mercedesCheckbox">
                    Mercedes
                </label>
                
                <div id="result">
                    <strong>Selected cars:</strong>
                    <div id="selectedList">None</div>
                </div>
                
                <script>
                    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                    const selectedList = document.getElementById('selectedList');
                    
                    function updateList() {
                        const selected = Array.from(checkboxes)
                            .filter(cb => cb.checked)
                            .map(cb => cb.value);
                        
                        selectedList.textContent = selected.length > 0 
                            ? selected.join(', ') 
                            : 'None';
                    }
                    
                    checkboxes.forEach(checkbox => {
                        checkbox.addEventListener('change', updateList);
                    });
                </script>
            </body>
            </html>
        `);
        
        console.log("✓ Created custom checkbox page\n");
        
        await page.waitForTimeout(1000);
        
        // Check Volvo
        console.log("Checking 'Volvo'...");
        await page.locator('#volvoCheckbox').check();
        console.log("✓ Volvo checked\n");
        
        await page.waitForTimeout(1000);
        
        // Check Audi
        console.log("Checking 'Audi'...");
        await page.locator('#audiCheckbox').check();
        console.log("✓ Audi checked\n");
        
        await page.waitForTimeout(1000);
        
        // Check BMW
        console.log("Checking 'BMW'...");
        await page.locator('#bmwCheckbox').check();
        console.log("✓ BMW checked\n");
        
        await page.waitForTimeout(1500);
        
        // Get selected cars
        const selectedCars = await page.locator('#selectedList').textContent();
        console.log(`Selected cars: ${selectedCars}\n`);
        
        await page.waitForTimeout(1000);
        
        // Uncheck Audi
        console.log("Unchecking 'Audi'...");
        await page.locator('#audiCheckbox').uncheck();
        console.log("✓ Audi unchecked\n");
        
        await page.waitForTimeout(1500);
        
        // Get updated selection
        const updatedCars = await page.locator('#selectedList').textContent();
        console.log(`Now selected: ${updatedCars}\n`);
        
        await page.waitForTimeout(3000);
        
        console.log("=== Advanced Form Elements Complete! ===");
        
    } catch (error) {
        console.error("\n❌ ERROR OCCURRED:");
        console.error(error.message);
        console.log("\nTaking screenshot of error...");
        await page.screenshot({ path: 'error-screenshot.png' });
        console.log("✓ Screenshot saved as error-screenshot.png\n");
    } finally {
        await browser.close();
    }
}

advancedFormElements();