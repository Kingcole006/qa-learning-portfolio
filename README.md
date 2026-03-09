# QA Automation Learning Journey

**Building Production-Ready Test Automation Skills**

[![GitHub](https://img.shields.io/badge/GitHub-Kingcole006-blue)](https://github.com/Kingcole006/qa-learning-portfolio)
[![Status](https://img.shields.io/badge/Status-Active%20Learning-green)]()
[![Tests](https://img.shields.io/badge/Tests-72%20Automated-brightgreen)]()
[![Pass Rate](https://img.shields.io/badge/Pass%20Rate-100%25-success)]()

---

## 👋 Welcome

I'm **Cole Brown**, transitioning into QA Automation Engineering through a structured, hands-on learning program. This repository documents my journey from manual QA fundamentals to professional automation engineering.

**📌 View Full Portfolio:** [PORTFOLIO.md](PORTFOLIO.md)

---

## 🎯 Quick Highlights

- ✅ **72 Automated Tests** across 4 collections
- ✅ **100% Pass Rate** on all test suites
- ✅ **Security Testing** (SQL injection, XSS, buffer overflow)
- ✅ **Data-Driven Testing** (30 tests, 10 scenarios, 1.4s execution)
- ✅ **CI/CD Ready** (Newman CLI, npm scripts, HTML reports)
- ✅ **9 Days Completed** with comprehensive documentation

---

## 🚀 Featured Projects

### [API Negative Testing Suite](Notes/Day08-Advanced-Postman.md) ⭐
Security-focused test automation covering 7 attack vectors
- SQL injection & XSS validation
- Buffer overflow testing (10K characters)
- 15/15 tests passing

### [Data-Driven Testing Framework](Notes/Day09-Newman-CLI.md) 📊
Scalable automation with CSV data management
- 99.92% time savings (30 min → 1.4s)
- Newman CLI execution
- Professional HTML reports

### [Authentication Best Practices](Notes/Authentication-Best-Practices.md) 🔐
Comprehensive security and auth testing knowledge
- Token-based authentication flows
- Security testing strategies
- Production-ready patterns

---

## 📚 Learning Path

### ✅ Week 1: Manual QA Foundations
- Test case design and execution
- Bug reporting and documentation
- QA fundamentals and SDLC

### ✅ Week 2: API Testing Fundamentals
- REST API concepts (GET, POST, PUT, DELETE)
- HTTP status codes and responses
- JSON validation and manipulation

### ✅ Week 3: Postman Automation (COMPLETE - 10/10 Days)
**Focus:** Automated API testing, request chaining, collections

#### Day 7: Environment Variables & Collection Runner ✅
- Environment variable creation and management
- Request chaining with `pm.environment.set()` and `.get()`
- Collection Runner automation
- 9/9 tests passing (100% pass rate)
- [Detailed Notes](Notes/Day07-Postman-Automation.md)

#### Day 8: Advanced Postman Automation ✅
- Pre-request scripts for dynamic data generation
- Postman built-in random variables
- Advanced assertions (arrays, collections, business logic)
- Response time validation
- **Negative Testing Suite:** SQL injection, XSS, buffer overflow
- Security testing (OWASP principles)
- 33/33 tests passing (100% pass rate)
- [Detailed Notes](Notes/Day08-Advanced-Postman.md)
- [Test Types Documentation](Notes/Day08-Test-Types.md)

#### Day 9: Data-Driven Testing & Newman CLI ✅
- CSV-based data-driven testing (10 user scenarios)
- Newman CLI installation and configuration
- Command-line test execution
- Professional HTML reporting with newman-reporter-htmlextra
- npm scripts for automation workflows
- CI/CD integration ready
- **30/30 tests passing** (1.4s execution, 99.92% time savings)
- [Detailed Notes](Notes/Day09-Newman-CLI.md)

#### Day 10: Week 3 Wrap-Up & Portfolio Polish ✅
- **Authentication Best Practices** documentation
- Token-based authentication workflows
- Security testing principles and patterns
- Professional portfolio creation ([PORTFOLIO.md](PORTFOLIO.md))
- LinkedIn profile optimization guide
- **Week 3 Comprehensive Retrospective**
- Problem-solving: Adapted when API access blocked (demonstrated flexibility)
- [Detailed Notes](Notes/Day10-Week3-Wrap.md)
- [Authentication Guide](Notes/Authentication-Best-Practices.md)

**Week 3 Final Stats:**
- ✅ **10 consecutive days completed**
- ✅ **72 automated tests** (100% pass rate across all collections)
- ✅ **4 test collections** created
- ✅ **7 security tests** (SQL injection, XSS, buffer overflow)
- ✅ **30 data-driven tests** (CSV-based)
- ✅ **Newman CLI mastery** (command-line automation)
- ✅ **Professional portfolio** complete
- ✅ **Grade: A+**

---

### 🔄 Week 4: JavaScript Fundamentals (In Progress: Day 1/5)
**Focus:** JavaScript for test automation

#### Day 11: Variables & Functions ✅
**JavaScript Fundamentals:**
- Variables: `const` vs `let`, data types (string, number, boolean, object, array)
- Template literals and string manipulation
- Functions: parameters, return values, default parameters
- Objects and object properties (dot notation, bracket notation)
- Arrays and array methods (.push(), .length)
- Loops: `for` loops for iteration
- Conditionals: `if/else`, ternary operators
- Boolean logic: `&&`, `||`, comparison operators

**Practical Exercises:**
- Built **8 JavaScript programs** from scratch
- Created **11 reusable test utility functions**:
  - Test result validator (PASS/FAIL comparison)
  - Test user generator (automated user creation)
  - API response validator (comprehensive validation)
- Completed **5 variable challenges** (API testing scenarios)
- Completed **3 function practice exercises** (production-ready utilities)

**Documentation:**
- Created comprehensive JavaScript reference guide
- 800+ lines of JavaScript code written
- [Detailed Notes](Notes/Day11-JavaScript-Basics.md)
- [JavaScript Reference Guide](Notes/JavaScript-Reference.md)

**Skills Acquired:**
- ✅ JavaScript fundamentals for test automation
- ✅ Function-based code organization
- ✅ Object and array manipulation
- ✅ Building reusable test utilities
- ✅ Validation logic implementation

#### Day 12: Arrays, Objects & Data Manipulation ✅
**Array Methods - The Power Tools:**
- forEach() - Execute code for each item
- map() - Transform each item into new array
- filter() - Keep only matching items
- find() - Find first matching item
- reduce() - Combine items into single value

**Object Manipulation:**
- Destructuring for extracting nested data
- Spread operator for combining objects
- Object.keys/values/entries methods
- Working with nested API responses
- JSON parse and stringify operations

**Real QA Scenarios:**
- Processing test execution results
- Validating API response structure
- Filtering and transforming test data
- Building test reports from data
- Data transformation pipelines

**Practice Challenge:**
- Built complete test result analyzer
- 10 tasks completed successfully:
  * Filtered passing/failing tests
  * Calculated pass rates (75%)
  * Found slowest tests
  * Calculated averages (200.625ms)
  * Built comprehensive summary objects

**Skills Acquired:**
- ✅ All 5 core array methods
- ✅ Method chaining for complex operations
- ✅ Object destructuring and spread
- ✅ Data transformation patterns
- ✅ Building test reports programmatically

**Code Written:** 500+ lines across 4 files

[Detailed Notes](Notes/Day12-Arrays-Objects.md)

#### Day 13: Async/Await & Promises ✅
**Asynchronous JavaScript:**
- Understanding async vs sync code execution
- Callbacks, Promises, and Async/Await evolution
- Modern async/await syntax
- Try/catch error handling
- Sequential async operations

**Making Real API Calls:**
- Using fetch() API
- Parsing JSON responses  
- Handling HTTP status codes (200, 404, 500)
- Processing response data
- Measuring response times
- Error handling for network failures

**Building Test Utilities:**
- Generic API endpoint tester
- Data validation functions
- Batch testing multiple items
- Complete test suite with reporting
- Test result aggregation
- Pass/fail rate calculation

**Real APIs Tested:**
- JSONPlaceholder REST API
- GET requests for users, posts
- Validated 10+ endpoints
- Processed real JSON data
- Built automated test reports

**Code Written:** 600+ lines across 3 files

[Detailed Notes](Notes/Day13-Async-Await.md)

#### Day 14: Building Custom Test Utilities ✅
**Custom Assertion Library:**
- Built fluent interface expect() function
- Multiple assertion types (toBe, toContain, toBeGreaterThan)
- API-specific assertions (status, properties, response time)
- Test result tracking system
- Beautiful pass/fail reporting with ✓/✗

**Test Data Generators:**
- Random data generation (numbers, strings, emails, dates)
- User generator with realistic data
- API payload builders (registration, login, posts)
- Test scenario factory (valid, invalid, edge cases)
- Complete dataset generation

**Mini Test Framework:**
- Test runner with suite organization
- beforeEach/afterEach hooks
- Skip functionality (⊘)
- Async test support
- Beautiful formatted output with box drawing
- Summary reports with pass rates
- 9 tests run with 100% pass rate

**Code Written:** 750+ lines across 3 files

[Detailed Notes](Notes/Day14-Test-Utilities.md)

#### Day 15: Code-Based API Testing ✅
**Complete API Test Suite:**
- Built production-ready test framework
- Custom expect() assertions (toBe, toBeGreaterThan, toContain)
- APITester class for GET/POST requests
- TestSuite class with reporting
- 6 comprehensive tests with 100% pass rate

**Advanced Testing Patterns:**
1. **Data Relationships** - Verify posts belong to correct user using .every()
2. **Data Consistency** - Check all users have required fields  
3. **Error Handling** - Test non-existent resources
4. **Request Chaining** - Sequential requests (user → posts → comments)

**Real-World Testing:**
- Validated 10+ users for email format
- Tested performance (all endpoints < 1000ms)
- Chained 3 sequential API requests
- Built reusable test utilities

**Code Written:** 750+ lines across 4 files

[Detailed Notes](Notes/Day15-API-Testing.md)

**Status:** Week 4 COMPLETE! 🎉

### 📅 Week 6-12: Advanced Automation & Job Prep
- Playwright/Selenium UI testing
- CI/CD pipeline integration
- Interview preparation
- Job applications

---

## 🛠️ Technical Stack

**Testing & Automation:**
- Postman (API Testing & Automation)
- Newman CLI (Command-line Execution)
- JavaScript (Test Scripting & Utilities)
- newman-reporter-htmlextra (Professional Reporting)

**Programming:**
- JavaScript (Functions, Objects, Arrays, Loops)
- Node.js (Runtime environment)
- npm (Package management)

**Security Testing:**
- SQL Injection Prevention
- XSS Attack Validation
- Input Validation & Sanitization
- Buffer Overflow Testing

**Data Management:**
- CSV-based Data-Driven Testing
- Environment Variables
- Dynamic Data Generation
- JSON manipulation

**DevOps & CI/CD:**
- Git & GitHub (Version Control)
- npm & package.json (Dependency Management)
- Newman CLI (Headless Execution)
- Ready for: GitHub Actions, Jenkins, GitLab CI

---

## 📊 Current Stats

| Metric | Value |
|--------|-------|
| **Days Completed** | 15 ✅ |
| **Weeks Completed** | 4 COMPLETE ✅ |
| **Total Tests Written** | 92+ |
| **JavaScript Programs** | 22 📝 |
| **Lines of Code** | 2750+ |
| **Pass Rate** | 100% |
| **Learning Hours** | ~54 |
| **Portfolio Status** | ✅ Professional |

---

## 🎓 Key Skills Acquired

### API Testing
- REST API validation (GET, POST, PUT, DELETE)
- Request/response validation
- Status code verification
- JSON schema validation
- Authentication workflows

### Test Automation
- Postman collection organization
- JavaScript test scripting
- Pre-request and post-response scripts
- Dynamic data generation
- Request chaining and workflows
- **Newman CLI automation**
- **Data-driven testing with CSV**

### Security Testing
- OWASP vulnerability testing
- SQL injection prevention
- XSS attack validation
- Input sanitization checks
- Buffer overflow testing

### JavaScript Programming
- Variables (const, let)
- Functions (parameters, return values, defaults)
- Objects and arrays
- Loops and conditionals
- Template literals
- Building reusable utilities

### Advanced Automation
- Data-driven testing with CSV
- Newman CLI automation
- Professional HTML reporting
- npm script workflows
- CI/CD integration patterns
- **Code-based test utilities**

---

## 📝 Documentation

Every project includes comprehensive documentation:

**Week 1:**
- [Day 1: QA Basics](Notes/Day01-QA-Basics.md)
- [Day 2: QA Concepts](Notes/Day02-QA-Concepts.md)
- [Day 3: Edge Cases](Notes/Day03-Edge-Cases.md)
- [Week 1 Reflection](Notes/Week1-Reflection.md)

**Week 2:**
- [Day 4: API Basics](Notes/Day04-API-Basics.md)
- [Day 5: POST Requests](Notes/Day05-POST-Requests.md)
- [Week 2 Reflection](Notes/Week2-Reflection.md)

**Week 3:**
- [Day 6: Postman Automation](Notes/Day06-Postman-Automation.md)
- [Day 7: Environment Variables & Collection Runner](Notes/Day07-Postman-Automation.md)
- [Day 8: Advanced Postman & Negative Testing](Notes/Day08-Advanced-Postman.md)
- [Day 9: Data-Driven Testing & Newman CLI](Notes/Day09-Newman-CLI.md)
- [Day 10: Week 3 Wrap-Up & Portfolio Polish](Notes/Day10-Week3-Wrap.md)
- [Authentication Best Practices](Notes/Authentication-Best-Practices.md)
- [Week 3 Retrospective](Notes/Week3-Retrospective.md)

**Week 4:**
- [Day 11: JavaScript Basics - Variables & Functions](Notes/Day11-JavaScript-Basics.md)
- [JavaScript Reference Guide](Notes/JavaScript-Reference.md)
- [Day 12: Arrays & Objects](Notes/Day12-Arrays-Objects.md)
- [Day 13: Async Await](Notes/Day13-Async-Await.md)
- [Day 14: Test Utilities](Notes/Day14-Test-Utilities.md)
- [Day 15: Code-based API Testing](Notes/Day15-API-Testing.md)

**Portfolio:**
- [Portfolio Showcase](PORTFOLIO.md)
- [LinkedIn Summary](LINKEDIN-SUMMARY.md)

---

## 🚀 Running Tests

### Prerequisites
```bash
npm install
```

### Execute Tests
```bash
# Quick test run
npm test

# With HTML report
npm run test:report

# Verbose output
npm run test:verbose

# Clean old reports and run
npm run test:clean
```

### Manual Newman Execution
```bash
newman run data-driven-testing.json -e qa-env.json -d test-users.csv -r htmlextra --reporter-htmlextra-export ./reports/test-report.html
```

---

## 💼 Resume Highlights

**Ready-to-use bullet points for job applications:**

✅ Developed comprehensive API test automation framework with 72+ automated tests achieving 100% pass rates

✅ Implemented security testing suite covering SQL injection, XSS attacks, and input validation vulnerabilities with professional documentation

✅ Built data-driven testing framework using CSV files and Newman CLI, reducing test execution time from 30 minutes to 1.4 seconds (99.92% efficiency gain)

✅ Created CI/CD-ready test suites with Newman CLI and npm scripts for automated execution in GitHub Actions, Jenkins, and GitLab CI pipelines

✅ Generated professional HTML test reports using newman-reporter-htmlextra suitable for stakeholder review and compliance documentation

✅ **Built 11 reusable JavaScript test utility functions including validators, data generators, and API response validators**

✅ **Demonstrated proficiency in JavaScript, Postman, Newman CLI, Git version control, and test automation best practices**

---

## 📧 Contact

- **LinkedIn:** [https://www.linkedin.com/in/cole-brown-4aba86243/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BH3A14yNWRRuWm4ayRkbt%2BA%3D%3D]
- **GitHub:** [github.com/Kingcole006](https://github.com/Kingcole006)
- **Email:** Cole.Brown72@gmail.com

---

## 🎯 Next Milestones

**Week 4:** JavaScript Fundamentals & Code-Based Automation  
**Week 5-8:** Playwright/Selenium UI Automation  
**Week 9-12:** Job Applications & Interview Prep

---

**⭐ Star this repo if you find it helpful!**

**Last Updated:** March 09, 2026