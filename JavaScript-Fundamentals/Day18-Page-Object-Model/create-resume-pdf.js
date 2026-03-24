// ============================================
// CREATE PROFESSIONAL PDF RESUME
// Converts markdown to beautiful PDF
// ============================================

// LINE 1: Load Playwright
const { chromium } = require('playwright'); // ✓ Playwright library loaded
const fs = require('fs'); // ✓ File system for reading files

// LINE 5: Resume content in HTML format
const resumeHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Cole Brown - QA Automation Engineer Resume</title>
    <style>
        @page {
            margin: 0.5in;
            size: letter;
        }
        
        body {
            font-family: 'Calibri', 'Arial', sans-serif;
            font-size: 11pt;
            line-height: 1.4;
            color: #333;
            max-width: 8.5in;
            margin: 0 auto;
            padding: 0;
        }
        
        /* Header */
        .header {
            text-align: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 3px solid #2c3e50;
        }
        
        .header h1 {
            margin: 0;
            font-size: 24pt;
            font-weight: bold;
            color: #2c3e50;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        
        .header .title {
            font-size: 14pt;
            color: #34495e;
            margin: 5px 0;
            font-weight: 600;
        }
        
        .contact-info {
            font-size: 10pt;
            color: #555;
            margin-top: 8px;
        }
        
        .contact-info a {
            color: #2980b9;
            text-decoration: none;
        }
        
        /* Section Headers */
        h2 {
            font-size: 14pt;
            font-weight: bold;
            color: #2c3e50;
            margin: 18px 0 10px 0;
            padding-bottom: 5px;
            border-bottom: 2px solid #3498db;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        h3 {
            font-size: 12pt;
            font-weight: bold;
            color: #2c3e50;
            margin: 12px 0 6px 0;
        }
        
        /* Content */
        p {
            margin: 8px 0;
            text-align: justify;
        }
        
        ul {
            margin: 8px 0;
            padding-left: 25px;
        }
        
        li {
            margin: 6px 0;
            line-height: 1.5;
        }
        
        .skills-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 10px 0;
        }
        
        .skill-category {
            margin-bottom: 10px;
        }
        
        .skill-category strong {
            color: #2c3e50;
            font-size: 11pt;
        }
        
        .achievement {
            margin: 8px 0;
            padding-left: 15px;
            position: relative;
        }
        
        .achievement::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #27ae60;
            font-weight: bold;
        }
        
        .project {
            margin-bottom: 18px;
            page-break-inside: avoid;
        }
        
        .project-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 5px;
        }
        
        .project-title {
            font-weight: bold;
            color: #2c3e50;
            font-size: 11.5pt;
        }
        
        .project-tech {
            font-style: italic;
            color: #7f8c8d;
            font-size: 10pt;
        }
        
        .experience-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
        }
        
        .company {
            font-weight: bold;
            font-size: 11.5pt;
            color: #2c3e50;
        }
        
        .date {
            font-style: italic;
            color: #7f8c8d;
            font-size: 10pt;
        }
        
        /* Ensure sections don't break awkwardly */
        .section {
            page-break-inside: avoid;
        }
        
        /* Print-specific */
        @media print {
            body {
                print-color-adjust: exact;
                -webkit-print-color-adjust: exact;
            }
        }
    </style>
</head>
<body>
    <!-- HEADER -->
    <div class="header">
        <h1>COLE BROWN</h1>
        <div class="title">QA Automation Engineer</div>
        <div class="contact-info">
            Sugar Hill, GA | Cole.Brown72@gmail.com<br>
            LinkedIn: linkedin.com/in/cole-brown-4aba86243 | GitHub: github.com/Kingcole006<br>
            Portfolio: github.com/Kingcole006/qa-learning-portfolio
        </div>
    </div>
    
    <!-- PROFESSIONAL SUMMARY -->
    <h2>Professional Summary</h2>
    <p>
        Results-driven <strong>QA Automation Engineer</strong> with expertise in building scalable test automation frameworks using industry-standard design patterns. Proven ability to reduce code maintenance by 75% through Page Object Model implementation. Experienced in full-stack test automation including API testing (Postman/Newman), browser automation (Playwright), and JavaScript-based test frameworks. Strong track record of 100% test pass rates across 100+ automated tests. Skilled in debugging production issues, optimizing test performance by 40%, and implementing professional patterns used by enterprise QA teams.
    </p>
    
    <!-- TECHNICAL SKILLS -->
    <h2>Technical Skills</h2>
    <div class="skills-section">
        <div>
            <div class="skill-category">
                <strong>Test Automation & Tools:</strong><br>
                Playwright, Postman/Newman CLI, JavaScript/Node.js, Git/GitHub, HTML/CSS
            </div>
            <div class="skill-category">
                <strong>Design Patterns:</strong><br>
                Page Object Model (POM), Base Page Pattern, OOP Design, DRY Principle
            </div>
            <div class="skill-category">
                <strong>Testing Types:</strong><br>
                Functional, API (REST), UI/Browser, Security, Data-Driven, Regression
            </div>
        </div>
        <div>
            <div class="skill-category">
                <strong>Programming:</strong><br>
                JavaScript (ES6+), Classes/Inheritance, Async/Await, OOP
            </div>
            <div class="skill-category">
                <strong>CI/CD & DevOps:</strong><br>
                npm Scripts, Command-Line Automation, HTML Reporting, GitHub
            </div>
            <div class="skill-category">
                <strong>Methodologies:</strong><br>
                Smart Waiting, Element States, Test Framework Development
            </div>
        </div>
    </div>
    
    <!-- KEY ACHIEVEMENTS -->
    <h2>Key Achievements</h2>
    <div class="achievement">Implemented Page Object Model (POM) achieving 75% code reduction (12 lines → 3 lines per test), using JavaScript class inheritance and base page patterns for maintainable, scalable test automation</div>
    
    <div class="achievement">Mastered Playwright form automation and smart waiting strategies achieving 40% performance improvement (5s → 2.9s) through element state patterns</div>
    
    <div class="achievement">Automated browser testing validating 100 articles across multiple pages with 99/99 comparisons passing (100% success rate)</div>
    
    <div class="achievement">Built custom JavaScript test framework from scratch with assertion library, test runners, hooks, and data generators (750+ lines)</div>
    
    <div class="achievement">Developed API test automation framework with 92+ tests achieving 100% pass rates using Postman and Newman CLI</div>
    
    <div class="achievement">Built data-driven testing framework reducing execution time from 30 minutes to 1.4 seconds (99.92% efficiency gain)</div>
    
    <div class="achievement">Implemented security testing suite covering SQL injection, XSS attacks, and input validation with OWASP-compliant patterns</div>
    
    <!-- PROFESSIONAL EXPERIENCE -->
    <h2>Professional Experience</h2>
    <div class="section">
        <div class="experience-header">
            <div class="company">Self-Directed QA Automation Engineer Training</div>
            <div class="date">March 2026</div>
        </div>
        <p style="font-style: italic; margin: 5px 0;">Intensive 18-Day Structured Learning Program | 64+ Hours | 5,620+ Lines of Code</p>
        
        <p><strong>Page Object Model & Design Patterns:</strong></p>
        <ul>
            <li>Implemented POM achieving 75% code reduction through class inheritance and base page patterns</li>
            <li>Built reusable page objects (HomePage, LoginPage, DashboardPage) with shared base class</li>
            <li>Applied DRY principle eliminating code duplication across entire test suite</li>
        </ul>
        
        <p><strong>Browser Automation (Playwright):</strong></p>
        <ul>
            <li>Automated complete user journeys with form filling, navigation, and validation</li>
            <li>Implemented smart waiting strategies achieving 40% performance improvement</li>
            <li>Handled all form elements (checkboxes, radio buttons, dropdowns, multi-select)</li>
        </ul>
        
        <p><strong>API Testing (Postman/Newman):</strong></p>
        <ul>
            <li>Built 92+ automated API tests with 100% pass rate</li>
            <li>Created data-driven tests reducing execution time by 99.92%</li>
            <li>Implemented security testing for SQL injection, XSS, and buffer overflow</li>
        </ul>
        
        <p><strong>JavaScript & Framework Development:</strong></p>
        <ul>
            <li>Developed custom test framework with assertion library and test runners</li>
            <li>Mastered classes, inheritance (extends/super), async/await, and array methods</li>
        </ul>
    </div>
    
    <!-- PROJECTS -->
    <h2>Featured Projects</h2>
    
    <div class="project">
        <div class="project-header">
            <span class="project-title">Page Object Model Test Framework</span>
            <span class="project-tech">Playwright, JavaScript, OOP</span>
        </div>
        <ul>
            <li>Implemented industry-standard POM achieving 75% code reduction</li>
            <li>Built base page class with shared methods using JavaScript inheritance</li>
            <li>Created configuration objects and test data separation for maintainability</li>
        </ul>
    </div>
    
    <div class="project">
        <div class="project-header">
            <span class="project-title">Hacker News Sorting Validator</span>
            <span class="project-tech">Playwright, Data Validation</span>
        </div>
        <ul>
            <li>Validated 100 articles across 4 pages with automated pagination (99/99 passing)</li>
            <li>Fixed production timestamp parsing bug through systematic debugging</li>
        </ul>
    </div>
    
    <div class="project">
        <div class="project-header">
            <span class="project-title">Advanced Form Automation</span>
            <span class="project-tech">Playwright, Smart Waiting</span>
        </div>
        <ul>
            <li>Automated all form elements with 40% performance improvement</li>
            <li>Implemented element state management (visible, hidden, attached, detached)</li>
        </ul>
    </div>
    
    <div class="project">
        <div class="project-header">
            <span class="project-title">Data-Driven API Framework</span>
            <span class="project-tech">Newman CLI, Postman, CSV</span>
        </div>
        <ul>
            <li>Reduced test execution from 30 minutes to 1.4 seconds (99.92% savings)</li>
            <li>Generated professional HTML reports suitable for stakeholders</li>
        </ul>
    </div>
    
    <!-- EDUCATION -->
    <h2>Education & Training</h2>
    <div class="section">
        <p><strong>Structured QA Automation Training</strong> | March 2026</p>
        <ul>
            <li>18 consecutive days of intensive hands-on learning (64+ hours)</li>
            <li>5,620+ lines of production-quality code | 100% test pass rate</li>
            <li>Curriculum: Manual QA, API Testing, Automation, JavaScript, Playwright, Page Object Model</li>
        </ul>
    </div>
    
    <!-- ADDITIONAL INFO -->
    <h2>Additional Information</h2>
    <p>
        <strong>Portfolio:</strong> Professional GitHub with 18 days consecutive commits, comprehensive documentation, and production-ready code examples<br>
        <strong>Attributes:</strong> Self-directed learner, strong problem-solving, excellent documentation, quick learner (mastered POM, Playwright, JavaScript in 18 days)
    </p>
</body>
</html>
`;

// LINE 350: Function to create PDF
async function createResumePDF() {
    console.log("=== Creating Professional Resume PDF ===\n");
    
    // LINE 354: Launch browser
    const browser = await chromium.launch(); // ✓ Headless by default for PDF
    const page = await browser.newPage(); // ✓ New page
    
    try {
        console.log("Setting up resume content...");
        
        // LINE 361: Set the HTML content
        await page.setContent(resumeHTML); // ✓ Loads resume HTML
        
        console.log("✓ Content loaded\n");
        
        console.log("Generating PDF...");
        
        // LINE 368: Generate PDF
        await page.pdf({
            path: 'Cole_Brown_QA_Resume.pdf', // ✓ Output filename
            format: 'Letter', // ✓ US Letter size (8.5 x 11 inches)
            printBackground: true, // ✓ Include colors and backgrounds
            margin: {
                top: '0.5in',
                right: '0.5in',
                bottom: '0.5in',
                left: '0.5in'
            }
        });
        
        console.log("✓ PDF generated successfully!\n");
        console.log("=".repeat(60));
        console.log("PDF CREATED: Cole_Brown_QA_Resume.pdf");
        console.log("=".repeat(60));
        console.log("\nLocation: JavaScript-Fundamentals/Day18-Page-Object-Model/");
        console.log("\nYou can now:");
        console.log("  1. Open the PDF to review");
        console.log("  2. Use for job applications");
        console.log("  3. Print or email to employers");
        console.log("");
        
    } catch (error) {
        console.error("\n❌ ERROR:", error.message);
    } finally {
        // LINE 399: Close browser
        await browser.close(); // ✓ Browser closes
    }
}

// LINE 403: RUN THE FUNCTION
createResumePDF(); // ✓ Creates the PDF!