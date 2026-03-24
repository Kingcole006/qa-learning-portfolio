// ============================================
// VISUAL TEST REPORT
// Create professional HTML report with screenshots
// ============================================

// LINE 1: Load modules
const { chromium } = require('playwright'); // ✓ Playwright library loaded
const fs = require('fs'); // ✓ File system for creating files

// LINE 5: Ensure folders exist
function ensureFolders() {
    if (!fs.existsSync('screenshots')) {
        fs.mkdirSync('screenshots'); // ✓ Create screenshots folder
    }
    if (!fs.existsSync('screenshots/report')) {
        fs.mkdirSync('screenshots/report'); // ✓ Create report folder
    }
    if (!fs.existsSync('reports')) {
        fs.mkdirSync('reports'); // ✓ Create reports folder
    }
}

// LINE 19: Function to create HTML report
function createHTMLReport(testResults) {
    console.log("\nGenerating HTML report...");
    
    // LINE 23: Calculate pass rate
    const total = testResults.passed + testResults.failed; // ✓ Total tests
    const passRate = ((testResults.passed / total) * 100).toFixed(1); // ✓ Pass rate percentage
    
    // LINE 27: Determine status color
    const statusColor = passRate >= 80 ? '#27ae60' : passRate >= 50 ? '#f39c12' : '#e74c3c'; // ✓ Green, yellow, or red
    
    // LINE 30: Build HTML content
    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Test Report - ${new Date().toLocaleDateString()}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f5f7fa;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 36px;
            margin-bottom: 10px;
        }
        
        .header .date {
            font-size: 18px;
            opacity: 0.9;
        }
        
        .summary {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            padding: 30px;
            background: #f8f9fa;
        }
        
        .stat-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            text-align: center;
        }
        
        .stat-card .number {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .stat-card .label {
            color: #666;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .stat-card.total .number { color: #3498db; }
        .stat-card.passed .number { color: #27ae60; }
        .stat-card.failed .number { color: #e74c3c; }
        .stat-card.rate .number { color: ${statusColor}; }
        
        .tests-section {
            padding: 30px;
        }
        
        .section-title {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
        }
        
        .test-card {
            background: white;
            border: 1px solid #e1e8ed;
            border-radius: 8px;
            margin-bottom: 20px;
            overflow: hidden;
            transition: box-shadow 0.3s;
        }
        
        .test-card:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .test-header {
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #f8f9fa;
        }
        
        .test-name {
            font-size: 18px;
            font-weight: 600;
            color: #333;
        }
        
        .test-status {
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 14px;
        }
        
        .test-status.passed {
            background: #d4edda;
            color: #155724;
        }
        
        .test-status.failed {
            background: #f8d7da;
            color: #721c24;
        }
        
        .test-body {
            padding: 20px;
        }
        
        .test-details {
            margin-bottom: 15px;
        }
        
        .test-details .label {
            font-weight: 600;
            color: #666;
            margin-bottom: 5px;
        }
        
        .test-details .value {
            color: #333;
            line-height: 1.6;
        }
        
        .error-message {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px;
            margin: 15px 0;
            border-radius: 4px;
        }
        
        .screenshot-container {
            margin-top: 20px;
        }
        
        .screenshot-container .label {
            font-weight: 600;
            color: #666;
            margin-bottom: 10px;
        }
        
        .screenshot-container img {
            width: 100%;
            max-width: 800px;
            border: 2px solid #e1e8ed;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.2s;
        }
        
        .screenshot-container img:hover {
            transform: scale(1.02);
        }
        
        .footer {
            background: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        .timestamp {
            color: #95a5a6;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- HEADER -->
        <div class="header">
            <h1>📊 Test Execution Report</h1>
            <div class="date">${new Date().toLocaleString()}</div>
        </div>
        
        <!-- SUMMARY STATS -->
        <div class="summary">
            <div class="stat-card total">
                <div class="number">${total}</div>
                <div class="label">Total Tests</div>
            </div>
            <div class="stat-card passed">
                <div class="number">${testResults.passed}</div>
                <div class="label">Passed</div>
            </div>
            <div class="stat-card failed">
                <div class="number">${testResults.failed}</div>
                <div class="label">Failed</div>
            </div>
            <div class="stat-card rate">
                <div class="number">${passRate}%</div>
                <div class="label">Pass Rate</div>
            </div>
        </div>
        
        <!-- TEST DETAILS -->
        <div class="tests-section">
            <h2 class="section-title">Test Details</h2>
            
            ${testResults.tests.map((test, index) => `
                <div class="test-card">
                    <div class="test-header">
                        <div class="test-name">${index + 1}. ${test.name}</div>
                        <div class="test-status ${test.status.toLowerCase()}">${test.status}</div>
                    </div>
                    <div class="test-body">
                        <div class="test-details">
                            <div class="label">Duration:</div>
                            <div class="value">${test.duration || 'N/A'}</div>
                        </div>
                        
                        ${test.status === 'FAILED' ? `
                            <div class="error-message">
                                <strong>Error:</strong> ${test.error}
                            </div>
                            
                            ${test.screenshot ? `
                                <div class="screenshot-container">
                                    <div class="label">📸 Failure Screenshot:</div>
                                    <img src="../${test.screenshot}" alt="Test failure screenshot" 
                                         onclick="window.open(this.src, '_blank')">
                                    <p style="color: #666; font-size: 14px; margin-top: 10px;">
                                        Click image to view full size
                                    </p>
                                </div>
                            ` : ''}
                        ` : `
                            <div style="color: #27ae60; padding: 15px; background: #d4edda; border-radius: 4px;">
                                ✓ Test executed successfully
                            </div>
                        `}
                    </div>
                </div>
            `).join('')}
        </div>
        
        <!-- FOOTER -->
        <div class="footer">
            <p>Generated by Playwright Test Framework</p>
            <p class="timestamp">Report generated: ${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>
    `;
    
    // LINE 300: Save HTML report
    const reportPath = 'reports/test-report.html'; // ✓ Report path
    fs.writeFileSync(reportPath, html); // ✓ Write HTML to file
    
    console.log(`✓ HTML report created: ${reportPath}\n`);
    
    return reportPath; // ✓ Return path
}

// LINE 308: Main test function
async function visualTestReport() {
    console.log("=== Visual Test Report Demo ===\n");
    
    // LINE 312: Ensure folders exist
    ensureFolders(); // ✓ Creates all needed folders
    
    // LINE 315: Launch browser
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 300
    }); // ✓ Chrome opens
    
    // LINE 320: Create page
    const page = await browser.newPage(); // ✓ New tab appears
    
    // LINE 323: Track test results
    const testResults = {
        passed: 0,
        failed: 0,
        tests: []
    };
    
    try {
        // LINE 331: Create test application
        await page.setContent(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>E-Commerce Test</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        background: #f8f9fa;
                    }
                    .product-card {
                        background: white;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        max-width: 400px;
                        margin: 20px auto;
                    }
                    h2 {
                        color: #333;
                        margin-bottom: 15px;
                    }
                    .price {
                        font-size: 24px;
                        color: #27ae60;
                        font-weight: bold;
                        margin: 15px 0;
                    }
                    button {
                        width: 100%;
                        padding: 12px;
                        background: #3498db;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 16px;
                        margin-top: 10px;
                    }
                    button:hover {
                        background: #2980b9;
                    }
                    .cart-count {
                        background: #e74c3c;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 20px;
                        display: inline-block;
                        margin-top: 15px;
                    }
                    .message {
                        margin-top: 15px;
                        padding: 10px;
                        border-radius: 5px;
                        display: none;
                    }
                    .success {
                        background: #d4edda;
                        color: #155724;
                    }
                </style>
            </head>
            <body>
                <div class="product-card">
                    <h2>🎮 Gaming Laptop</h2>
                    <p>High-performance gaming laptop with RTX 4080</p>
                    <div class="price">$1,499.99</div>
                    <button id="addToCart">Add to Cart</button>
                    <div id="message" class="message"></div>
                    <div class="cart-count" id="cartCount" style="display:none;">Cart: <span id="count">0</span></div>
                </div>
                
                <script>
                    let cartCount = 0;
                    
                    document.getElementById('addToCart').addEventListener('click', () => {
                        cartCount++;
                        document.getElementById('count').textContent = cartCount;
                        document.getElementById('cartCount').style.display = 'inline-block';
                        
                        const message = document.getElementById('message');
                        message.className = 'message success';
                        message.textContent = 'Added to cart!';
                        message.style.display = 'block';
                        
                        setTimeout(() => {
                            message.style.display = 'none';
                        }, 2000);
                    });
                </script>
            </body>
            </html>
        `); // ✓ Product page created
        
        console.log("✓ Created e-commerce test page\n");
        
        await page.waitForTimeout(1000); // ✓ Waits 1 second
        
        // ==========================================
        // TEST 1: Product Page Loads
        // ==========================================
        
        console.log("TEST 1: Product Page Loads");
        console.log("---------------------------");
        
        const test1Start = Date.now(); // ✓ Start timer
        
        try {
            // LINE 453: Check if product title exists
            const title = await page.locator('h2').textContent(); // ✓ Get title
            const price = await page.locator('.price').textContent(); // ✓ Get price
            
            if (title && price) {
                const duration = ((Date.now() - test1Start) / 1000).toFixed(2); // ✓ Calculate duration
                console.log(`✓ TEST PASSED (${duration}s)`);
                console.log(`  Product: "${title}"`);
                console.log(`  Price: ${price}\n`);
                
                testResults.passed++; // ✓ Increment passed
                testResults.tests.push({ 
                    name: 'Product Page Loads', 
                    status: 'PASSED',
                    duration: `${duration}s`
                });
            } else {
                throw new Error('Product title or price missing');
            }
            
        } catch (error) {
            const duration = ((Date.now() - test1Start) / 1000).toFixed(2); // ✓ Calculate duration
            console.log(`✗ TEST FAILED (${duration}s)`);
            console.log(`  Error: ${error.message}`);
            
            const timestamp = new Date().toISOString().replace(/:/g, '-');
            const screenshotPath = `screenshots/report/test1-failed-${timestamp}.png`;
            await page.screenshot({ path: screenshotPath });
            
            console.log(`  📸 Screenshot: ${screenshotPath}\n`);
            
            testResults.failed++;
            testResults.tests.push({ 
                name: 'Product Page Loads', 
                status: 'FAILED',
                error: error.message,
                screenshot: screenshotPath,
                duration: `${duration}s`
            });
        }
        
        await page.waitForTimeout(1000);
        
        // ==========================================
        // TEST 2: Add to Cart
        // ==========================================
        
        console.log("TEST 2: Add to Cart Functionality");
        console.log("----------------------------------");
        
        const test2Start = Date.now();
        
        try {
            // LINE 510: Click add to cart
            await page.locator('#addToCart').click(); // ✓ Click button
            await page.waitForTimeout(500); // ✓ Wait for animation
            
            // LINE 514: Check cart count
            const cartCount = await page.locator('#count').textContent(); // ✓ Get count
            
            if (cartCount === '1') {
                const duration = ((Date.now() - test2Start) / 1000).toFixed(2);
                console.log(`✓ TEST PASSED (${duration}s)`);
                console.log(`  Cart count: ${cartCount}\n`);
                
                testResults.passed++;
                testResults.tests.push({ 
                    name: 'Add to Cart Functionality', 
                    status: 'PASSED',
                    duration: `${duration}s`
                });
            } else {
                throw new Error(`Expected cart count "1", got "${cartCount}"`);
            }
            
        } catch (error) {
            const duration = ((Date.now() - test2Start) / 1000).toFixed(2);
            console.log(`✗ TEST FAILED (${duration}s)`);
            console.log(`  Error: ${error.message}`);
            
            const timestamp = new Date().toISOString().replace(/:/g, '-');
            const screenshotPath = `screenshots/report/test2-failed-${timestamp}.png`;
            await page.screenshot({ path: screenshotPath });
            
            console.log(`  📸 Screenshot: ${screenshotPath}\n`);
            
            testResults.failed++;
            testResults.tests.push({ 
                name: 'Add to Cart Functionality', 
                status: 'FAILED',
                error: error.message,
                screenshot: screenshotPath,
                duration: `${duration}s`
            });
        }
        
        await page.waitForTimeout(1000);
        
        // ==========================================
        // TEST 3: Price Validation (Intentional Fail)
        // ==========================================
        
        console.log("TEST 3: Price Validation");
        console.log("-------------------------");
        
        const test3Start = Date.now();
        
        try {
            // LINE 567: Get price
            const price = await page.locator('.price').textContent(); // ✓ Get price
            
            // LINE 570: Intentionally check for wrong price (to trigger failure screenshot)
            if (price === '$999.99') {  // Wrong price on purpose!
                const duration = ((Date.now() - test3Start) / 1000).toFixed(2);
                console.log(`✓ TEST PASSED (${duration}s)`);
                
                testResults.passed++;
                testResults.tests.push({ 
                    name: 'Price Validation', 
                    status: 'PASSED',
                    duration: `${duration}s`
                });
            } else {
                throw new Error(`Expected price "$999.99", got "${price}"`);
            }
            
        } catch (error) {
            const duration = ((Date.now() - test3Start) / 1000).toFixed(2);
            console.log(`✗ TEST FAILED (${duration}s) - Intentional for demo`);
            console.log(`  Error: ${error.message}`);
            
            const timestamp = new Date().toISOString().replace(/:/g, '-');
            const screenshotPath = `screenshots/report/test3-failed-${timestamp}.png`;
            await page.screenshot({ path: screenshotPath });
            
            console.log(`  📸 Screenshot: ${screenshotPath}\n`);
            
            testResults.failed++;
            testResults.tests.push({ 
                name: 'Price Validation', 
                status: 'FAILED',
                error: error.message,
                screenshot: screenshotPath,
                duration: `${duration}s`
            });
        }
        
        await page.waitForTimeout(2000);
        
        // ==========================================
        // CREATE HTML REPORT
        // ==========================================
        
        console.log("=".repeat(60));
        console.log("CREATING VISUAL REPORT");
        console.log("=".repeat(60));
        console.log("");
        
        const reportPath = createHTMLReport(testResults); // ✓ Create HTML report
        
        console.log("=".repeat(60));
        console.log("REPORT SUMMARY");
        console.log("=".repeat(60));
        console.log("");
        console.log(`Total Tests: ${testResults.passed + testResults.failed}`);
        console.log(`Passed: ${testResults.passed} ✓`);
        console.log(`Failed: ${testResults.failed} ✗`);
        console.log(`Pass Rate: ${((testResults.passed / (testResults.passed + testResults.failed)) * 100).toFixed(1)}%`);
        console.log("");
        console.log(`📊 HTML Report: ${reportPath}`);
        console.log("   Open this file in your browser to see the visual report!");
        console.log("");
        console.log("=".repeat(60));
        
    } catch (error) {
        console.error("\n❌ UNEXPECTED ERROR:", error.message);
    } finally {
        // LINE 643: Close browser
        await browser.close(); // ✓ Browser closes
    }
    
    console.log("\n=== Visual Test Report Complete! ===");
    console.log("\nNext steps:");
    console.log("  1. Open reports/test-report.html in your browser");
    console.log("  2. View the professional test report");
    console.log("  3. Click screenshots to view full size");
    console.log("  4. Share this report with stakeholders!\n");
}

// LINE 655: RUN THE FUNCTION
visualTestReport(); // ✓ Everything starts here!