// ============================================
// ADVANCED WAITING STRATEGIES
// Smart waits vs dumb waits
// Making tests reliable
// ============================================

// LINE 1: Load Playwright
const { chromium } = require('playwright'); // ✓ Playwright library loaded

// LINE 3: Define function
async function waitingStrategies() {
    console.log("=== Advanced Waiting Strategies ===\n");
    
    // LINE 7: Launch browser
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 500,
        ignoreHTTPSErrors: true
    }); // ✓ Chrome opens (you see it!)
    
    // LINE 13: Create page
    const page = await browser.newPage(); // ✓ New tab appears
    
    try {
        // ==========================================
        // PART 1: DUMB WAITS (Bad Practice)
        // ==========================================
        
        console.log("Part 1: DUMB Waits (Bad Practice)\n");
        
        // LINE 25: Create test page with delayed content
        await page.setContent(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Waiting Demo</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 50px;
                        font-size: 18px;
                    }
                    button {
                        padding: 15px 30px;
                        font-size: 18px;
                        background: #2196F3;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    button:hover {
                        background: #1976D2;
                    }
                    #result {
                        margin-top: 30px;
                        padding: 20px;
                        background: #4CAF50;
                        color: white;
                        border-radius: 5px;
                        display: none;
                    }
                    .loading {
                        margin-top: 30px;
                        color: #666;
                        display: none;
                    }
                </style>
            </head>
            <body>
                <h2>Click button to load content (takes 3 seconds)</h2>
                
                <button id="loadButton">Load Content</button>
                
                <div class="loading" id="loading">Loading...</div>
                <div id="result">Content loaded successfully!</div>
                
                <script>
                    document.getElementById('loadButton').addEventListener('click', function() {
                        // Show loading
                        document.getElementById('loading').style.display = 'block';
                        document.getElementById('result').style.display = 'none';
                        
                        // Simulate network delay (3 seconds)
                        setTimeout(function() {
                            document.getElementById('loading').style.display = 'none';
                            document.getElementById('result').style.display = 'block';
                        }, 3000);
                    });
                </script>
            </body>
            </html>
        `); // ✓ Custom HTML page created (you see it in browser)
        
        console.log("✓ Created test page\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // DUMB WAIT EXAMPLE
        console.log("DUMB WAIT: Using fixed timeout");
        console.log("Clicking button...");
        
        // LINE 102: Click the button
        await page.locator('#loadButton').click(); // ✓ Button clicked (you see it)
        console.log("✓ Button clicked\n");
        
        console.log("Waiting 5 seconds (wasteful!)...");
        
        // LINE 107: DUMB WAIT - Always waits 5 seconds
        await page.waitForTimeout(5000); // ✓ Waits 5 seconds (content appears after 3, wastes 2 seconds!)
        console.log("✓ Waited 5 seconds\n");
        
        // LINE 111: Get result text
        const result1 = await page.locator('#result').textContent(); // ✓ result1 = "Content loaded successfully!"
        console.log(`Result: "${result1}"\n`);
        
        console.log("Problem: We waited 5 seconds, but content appeared after 3!");
        console.log("We WASTED 2 seconds!\n");
        
        await page.waitForTimeout(2000); // ✓ Waits 2 seconds
        
       // ==========================================
        // PART 2: SMART WAITS (Best Practice)
        // ==========================================
        
        console.log("Part 2: SMART Waits (Best Practice)\n");
        
        // LINE 126: Create the page again (more reliable than reload)
        await page.setContent(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Waiting Demo</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 50px;
                        font-size: 18px;
                    }
                    button {
                        padding: 15px 30px;
                        font-size: 18px;
                        background: #2196F3;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    button:hover {
                        background: #1976D2;
                    }
                    #result {
                        margin-top: 30px;
                        padding: 20px;
                        background: #4CAF50;
                        color: white;
                        border-radius: 5px;
                        display: none;
                    }
                    .loading {
                        margin-top: 30px;
                        color: #666;
                        display: none;
                    }
                </style>
            </head>
            <body>
                <h2>Click button to load content (takes 3 seconds)</h2>
                
                <button id="loadButton">Load Content</button>
                
                <div class="loading" id="loading">Loading...</div>
                <div id="result">Content loaded successfully!</div>
                
                <script>
                    document.getElementById('loadButton').addEventListener('click', function() {
                        // Show loading
                        document.getElementById('loading').style.display = 'block';
                        document.getElementById('result').style.display = 'none';
                        
                        // Simulate network delay (3 seconds)
                        setTimeout(function() {
                            document.getElementById('loading').style.display = 'none';
                            document.getElementById('result').style.display = 'block';
                        }, 3000);
                    });
                </script>
            </body>
            </html>
        `); // ✓ Fresh page created (more reliable!)
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        console.log("SMART WAIT: Wait for element to appear");
        console.log("Clicking button...");
        
        // LINE 132: Click button again
        await page.locator('#loadButton').click(); // ✓ Button clicked
        console.log("✓ Button clicked\n");
        
        console.log("Waiting for result to be visible (smart!)...");
        
        // LINE 137: Record start time
        const startTime = Date.now(); // ✓ startTime = current milliseconds (e.g., 1710612345678)
        
        // LINE 140: SMART WAIT - Wait for element to become visible
        await page.locator('#result').waitFor({ 
            state: 'visible',  // ✓ Wait until visible
            timeout: 10000     // ✓ Wait up to 10 seconds max
        }); // ✓ Waits ~3 seconds (exact time needed!)
        
        // LINE 146: Record end time
        const endTime = Date.now(); // ✓ endTime = current milliseconds (e.g., 1710612348678)
        
        // LINE 149: Calculate how long we waited
        const waitedTime = ((endTime - startTime) / 1000).toFixed(1); // ✓ waitedTime = "3.0" seconds
        
        console.log(`✓ Result appeared after ${waitedTime} seconds!\n`);
        
        // LINE 154: Get result text
        const result2 = await page.locator('#result').textContent(); // ✓ result2 = "Content loaded successfully!"
        console.log(`Result: "${result2}"\n`);
        
        console.log("Benefit: We waited EXACTLY as long as needed!");
        console.log("No wasted time!\n");
        
        await page.waitForTimeout(2000); // ✓ Waits 2 seconds
        
        // ==========================================
        // PART 3: WAIT FOR DIFFERENT STATES
        // ==========================================
        
        console.log("Part 3: Different Wait States\n");
        
        // LINE 169: Create page with multiple states
        await page.setContent(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>State Changes Demo</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 50px;
                        font-size: 18px;
                    }
                    button {
                        padding: 15px 30px;
                        font-size: 18px;
                        background: #2196F3;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        margin: 10px;
                    }
                    #message {
                        margin-top: 30px;
                        padding: 20px;
                        background: #FFC107;
                        border-radius: 5px;
                    }
                    .hidden {
                        display: none;
                    }
                </style>
            </head>
            <body>
                <h2>Element State Changes</h2>
                
                <button id="showBtn">Show Message</button>
                <button id="hideBtn">Hide Message</button>
                <button id="removeBtn">Remove Message</button>
                
                <div id="message">This is the message!</div>
                
                <script>
                    const message = document.getElementById('message');
                    
                    document.getElementById('showBtn').addEventListener('click', function() {
                        setTimeout(function() {
                            message.classList.remove('hidden');
                        }, 1000);
                    });
                    
                    document.getElementById('hideBtn').addEventListener('click', function() {
                        setTimeout(function() {
                            message.classList.add('hidden');
                        }, 1000);
                    });
                    
                    document.getElementById('removeBtn').addEventListener('click', function() {
                        setTimeout(function() {
                            message.remove();
                        }, 1000);
                    });
                </script>
            </body>
            </html>
        `); // ✓ State demo page created (you see 3 buttons and a message)
        
        console.log("✓ Created state demo page\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // Wait for HIDDEN state
        console.log("Clicking 'Hide Message'...");
        
        // LINE 250: Click hide button
        await page.locator('#hideBtn').click(); // ✓ Button clicked (message will hide in 1 second)
        
        console.log("Waiting for message to become HIDDEN...");
        
        // LINE 255: Wait for element to be HIDDEN
        await page.locator('#message').waitFor({ 
            state: 'hidden',  // ✓ Wait until display: none
            timeout: 5000 
        }); // ✓ Waits ~1 second, message becomes hidden (you see it disappear!)
        console.log("✓ Message is now HIDDEN\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // Wait for VISIBLE state
        console.log("Clicking 'Show Message'...");
        
        // LINE 267: Click show button
        await page.locator('#showBtn').click(); // ✓ Button clicked (message will show in 1 second)
        
        console.log("Waiting for message to become VISIBLE...");
        
        // LINE 272: Wait for element to be VISIBLE
        await page.locator('#message').waitFor({ 
            state: 'visible',  // ✓ Wait until visible again
            timeout: 5000 
        }); // ✓ Waits ~1 second, message appears (you see it come back!)
        console.log("✓ Message is now VISIBLE\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // Wait for DETACHED state (removed from page)
        console.log("Clicking 'Remove Message'...");
        
        // LINE 284: Click remove button
        await page.locator('#removeBtn').click(); // ✓ Button clicked (message will be deleted in 1 second)
        
        console.log("Waiting for message to be REMOVED from page...");
        
        // LINE 289: Wait for element to be DETACHED (deleted from HTML)
        await page.locator('#message').waitFor({ 
            state: 'detached',  // ✓ Wait until removed from DOM
            timeout: 5000 
        }); // ✓ Waits ~1 second, message is deleted completely (you see it vanish!)
        console.log("✓ Message is now REMOVED from DOM\n");
        
        await page.waitForTimeout(2000); // ✓ Waits 2 seconds
        
        // ==========================================
        // PART 4: WAITING FOR NETWORK
        // ==========================================
        
        console.log("Part 4: Waiting for Network Activity\n");
        
        console.log("Creating page with API call...\n");
        
        // LINE 306: Create page with real API call
        await page.setContent(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Network Wait Demo</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 50px;
                        font-size: 18px;
                    }
                    button {
                        padding: 15px 30px;
                        font-size: 18px;
                        background: #4CAF50;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    #userData {
                        margin-top: 30px;
                        padding: 20px;
                        background: #E3F2FD;
                        border-radius: 5px;
                        display: none;
                    }
                    .loading {
                        margin-top: 30px;
                        color: #666;
                        display: none;
                    }
                </style>
            </head>
            <body>
                <h2>Fetch User Data from API</h2>
                
                <button id="fetchBtn">Fetch User Data</button>
                
                <div class="loading" id="loading">Loading from API...</div>
                <div id="userData"></div>
                
                <script>
                    document.getElementById('fetchBtn').addEventListener('click', async function() {
                        const loading = document.getElementById('loading');
                        const userData = document.getElementById('userData');
                        
                        loading.style.display = 'block';
                        userData.style.display = 'none';
                        
                        try {
                            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                            const user = await response.json();
                            
                            loading.style.display = 'none';
                            userData.style.display = 'block';
                            userData.innerHTML = '<strong>Name:</strong> ' + user.name + '<br>' +
                                               '<strong>Email:</strong> ' + user.email + '<br>' +
                                               '<strong>City:</strong> ' + user.address.city;
                        } catch (error) {
                            loading.style.display = 'none';
                            userData.style.display = 'block';
                            userData.innerHTML = 'Error loading user data';
                        }
                    });
                </script>
            </body>
            </html>
        `); // ✓ API demo page created (you see button)
        
        console.log("✓ Created API demo page\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        console.log("Clicking 'Fetch User Data'...");
        
        // LINE 382: Click fetch button
        await page.locator('#fetchBtn').click(); // ✓ Button clicked, API call starts (you see "Loading...")
        console.log("✓ Button clicked (API call started)\n");
        
        console.log("Waiting for user data to appear...");
        
        // LINE 388: Wait for user data div to become visible
        await page.locator('#userData').waitFor({ 
            state: 'visible',  // ✓ Wait until API returns and data displays
            timeout: 10000 
        }); // ✓ Waits for API response (~1-2 seconds), data appears!
        console.log("✓ User data loaded!\n");
        
        // LINE 395: Get the user data text
        const userData = await page.locator('#userData').textContent(); // ✓ userData = "Name: Leanne Graham Email: Sincere@april.biz City: Gwenborough"
        console.log("Data received:");
        console.log(userData + "\n");
        
        await page.waitForTimeout(3000); // ✓ Waits 3 seconds (so you can read the data)
        
        // ==========================================
        // SUMMARY
        // ==========================================
        
        console.log("=".repeat(60));
        console.log("WAITING STRATEGIES SUMMARY");
        console.log("=".repeat(60));
        console.log("");
        console.log("❌ DUMB WAITS (Avoid!):");
        console.log("   await page.waitForTimeout(5000)");
        console.log("   - Fixed time, wasteful");
        console.log("   - Unreliable on slow systems");
        console.log("");
        console.log("✅ SMART WAITS (Use these!):");
        console.log("   await element.waitFor({ state: 'visible' })");
        console.log("   - Wait exactly as long as needed");
        console.log("   - Reliable and fast");
        console.log("");
        console.log("AVAILABLE STATES:");
        console.log("   'visible'  - Element is visible on page");
        console.log("   'hidden'   - Element exists but is hidden");
        console.log("   'attached' - Element is in the DOM");
        console.log("   'detached' - Element is removed from DOM");
        console.log("=".repeat(60));
        console.log("");
        
        console.log("=== Waiting Strategies Complete! ===");
        
    } catch (error) {
        console.error("\n❌ ERROR OCCURRED:");
        console.error(error.message);
        console.log("\nTaking screenshot...");
        await page.screenshot({ path: 'error-waiting.png' }); // ✓ Screenshot saved (check folder!)
        console.log("✓ Screenshot saved\n");
    } finally {
        // LINE 439: ALWAYS close browser (even if error!)
        await browser.close(); // ✓ Browser closes
    }
}

// LINE 443: RUN THE FUNCTION
waitingStrategies(); // ✓ Everything starts here!