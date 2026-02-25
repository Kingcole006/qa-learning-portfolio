# Day 9: Data-Driven Testing & Newman CLI

**Date:** February 19, 2026  
**Duration:** 3 hours  
**Status:** ✅ Complete

---

## 📚 What I Learned

### Hour 1: Data-Driven Testing
- Created CSV files with test data (10 test users)
- Implemented `pm.iterationData.get()` to access CSV data dynamically
- Ran same test case with multiple data sets automatically
- Understood when to use data-driven vs hardcoded test data

### Hour 2: Newman CLI
- Installed Node.js (v25.6.1) and npm (11.9.0)
- Installed Newman CLI globally (v6.2.2)
- Installed newman-reporter-htmlextra for professional reporting
- Exported collections and environments as JSON
- Ran tests from command line (no GUI needed)
- Generated professional HTML reports

### Hour 3: Automation & CI/CD Prep
- Created package.json with npm scripts for easy execution
- Set up professional project structure
- Made project CI/CD ready
- Documented execution commands

---

## 🎯 Key Achievements

### Data-Driven Testing Success

**CSV Structure Created:**
```csv
firstName,lastName,email,username,job,expectedStatus
John,Doe,john.doe@testmail.com,johndoe,Software Engineer,201
Jane,Smith,jane.smith@testmail.com,janesmith,Product Manager,201
[... 10 total users]
```

**Result:** 10 users tested in one execution = 90% time savings vs manual

### Newman Commands Mastered

**Basic execution:**
```bash
newman run data-driven-testing.json -e qa-env.json -d test-users.csv
```

**With HTML report:**
```bash
newman run data-driven-testing.json -e qa-env.json -d test-users.csv -r htmlextra --reporter-htmlextra-export ./reports/test-report.html
```

**With dark theme:**
```bash
newman run collection.json -e environment.json -d data.csv -r htmlextra --reporter-htmlextra-darkTheme
```

### npm Scripts Created
```json
{
  "test": "newman run data-driven-testing.json -e qa-env.json -d test-users.csv",
  "test:report": "newman run ... -r htmlextra",
  "test:verbose": "newman run ... --verbose",
  "test:clean": "npm run clean && npm run test:report"
}
```

**Now tests run with simple commands:**
- `npm test` - Quick test run
- `npm run test:report` - With HTML report
- `npm run test:verbose` - Detailed output

---

## 📊 Test Results

**Execution Summary:**
- ✅ **10 iterations** (all CSV rows processed)
- ✅ **10 requests** executed (0 failed)
- ✅ **30 assertions** passed (0 failed)
- ✅ **100% pass rate**
- ⏱️ **Total duration:** 1.4 seconds
- 📈 **Average response time:** 58ms
- 📦 **Data processed:** 1.28KB

**Performance:**
- 10 user scenarios tested in under 2 seconds
- Zero manual intervention required
- Repeatable with single command

---

## 💡 Key Concepts

### pm.iterationData API

**Access CSV data in tests:**
```javascript
const firstName = pm.iterationData.get("firstName");
const email = pm.iterationData.get("email");
const expectedStatus = parseInt(pm.iterationData.get("expectedStatus"));
```

**Use in request body:**
```json
{
    "name": "{{firstName}} {{lastName}}",
    "email": "{{email}}",
    "username": "{{username}}"
}
```

### Newman CLI vs Postman GUI

| Feature | Postman GUI | Newman CLI |
|---------|-------------|------------|
| Visual interface | ✅ | ❌ |
| CI/CD integration | ❌ | ✅ |
| Scheduled runs | ❌ | ✅ |
| Headless execution | ❌ | ✅ |
| HTML reports | Limited | ✅ Professional |
| Command-line automation | ❌ | ✅ |

### Mock API Limitations

**JSONPlaceholder (mock API):**
- ✅ Accepts all requests (good for learning)
- ❌ Doesn't validate input (minimal error handling)
- ❌ Returns minimal responses (missing some fields)

**Real Production APIs:**
- ✅ Full input validation
- ✅ Detailed error messages
- ✅ Complete response data
- ✅ Business logic enforcement

**All skills learned here transfer 100% to real APIs!**

---

## 🌍 Real-World Applications

**This data-driven approach enables:**

### Use Case 1: Login Testing
- CSV with 100 username/password combinations
- Test valid users, invalid users, locked accounts
- Single test definition, 100 scenarios

### Use Case 2: E-commerce Checkout
- Multiple products with different prices
- Various discount codes
- Different shipping addresses
- Payment methods

### Use Case 3: International Testing
- Users from different countries
- Multiple languages
- Various time zones
- Currency conversions

### Use Case 4: Performance Testing
- Run same API call 1000 times
- Track response times
- Identify bottlenecks
- Load testing preparation

### Use Case 5: Regression Testing
- Same test suite
- Different data sets (daily/weekly)
- Catch data-specific bugs
- Automated smoke tests

---

## 🔄 CI/CD Integration

**Project is now ready for:**

### GitHub Actions
```yaml
name: API Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```

### Jenkins Pipeline
```groovy
pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
```

### GitLab CI
```yaml
test:
  stage: test
  script:
    - npm install
    - npm test
```

**Integration is literally 2 lines of code!**

---

## 🛠️ Technical Stack

**Tools Used:**
- Node.js v25.6.1
- npm v11.9.0
- Newman v6.2.2
- newman-reporter-htmlextra v1.23.1
- Postman Collection v2.1 format
- CSV for test data
- JSON for configuration

**Project Structure:**
```
QA-Learning/
├── data-driven-testing.json  (Collection)
├── qa-env.json               (Environment)
├── test-users.csv            (Test data)
├── package.json              (Dependencies & scripts)
├── reports/                  (HTML reports)
└── node_modules/             (Dependencies)
```

---

## 🎓 Skills Gained

- ✅ **CSV-based test data management**
- ✅ **Newman CLI proficiency**
- ✅ **Command-line test automation**
- ✅ **Professional HTML report generation**
- ✅ **npm scripts and package.json configuration**
- ✅ **CI/CD integration readiness**
- ✅ **Project portability and documentation**
- ✅ **Data-driven testing methodology**
- ✅ **Test execution automation**
- ✅ **Professional reporting standards**

---

## 💬 Interview Talking Points

*"I've built data-driven test frameworks that execute the same test case with multiple data sets from CSV files. I use Newman CLI for command-line execution and generate professional HTML reports that show 100% test coverage with detailed metrics including response times and pass rates.*

*My projects include npm scripts for easy test execution and are CI/CD ready with proper dependency management through package.json. I can run 10 different test scenarios in under 2 seconds with 100% automated validation.*

*I understand the difference between mock APIs for learning and production APIs with full validation. The automation patterns I've learned work identically on real APIs - I just get more comprehensive test coverage when APIs return complete data.*

*I've configured projects for GitHub Actions, Jenkins, and GitLab CI integration, where tests run automatically on every commit. The HTML reports I generate include executive summaries, detailed test breakdowns, performance metrics, and are suitable for sharing with stakeholders."*

---

## 📈 Metrics

**Automation Efficiency:**
- Manual execution time: ~30 minutes (10 users × 3 minutes each)
- Automated execution time: 1.4 seconds
- **Time savings: 99.92%**

**Test Coverage:**
- 10 user scenarios
- 30 assertions
- 100% pass rate
- 0 failures

**Performance:**
- Average response time: 58ms
- Total data processed: 1.28KB
- Execution speed: 10 requests in 1.4s

---

## 🚀 Next Steps

**Day 10 Preview:**
- Real API with authentication (Reqres.in)
- Token-based authentication workflows
- Complete portfolio project
- Professional documentation polish
- Job application readiness

---

## ✅ Status

**Day 9 Complete!**

- ✅ Data-driven testing implemented
- ✅ Newman CLI mastered
- ✅ Professional reports generated
- ✅ CI/CD integration ready
- ✅ Project fully documented

**Total Tests Automated:** 30  
**Execution Time:** 1.4 seconds  
**Pass Rate:** 100%  
**Status:** Production-ready automation framework ✅

---

**Portfolio Impact:** This demonstrates command-line automation skills and CI/CD readiness - key requirements for automation engineering roles.