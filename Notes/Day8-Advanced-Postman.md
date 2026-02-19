# Day 8: Advanced Postman - Pre-request Scripts & Dynamic Data

**Date:** [Today's date]  
**Duration:** 3 hours  
**Status:** ✅ Complete

## What I Learned

### 1. Pre-request Scripts
- Learned to run JavaScript BEFORE sending requests
- Generated unique timestamps with `Date.now()`
- Created dynamic email addresses: `testuser_${timestamp}@automation.com`
- Stored values with `pm.environment.set()` for use in request bodies

**Use Case:** Prevent "duplicate email" errors in user registration tests

### 2. Postman Built-in Random Variables
- Discovered Postman's `{{$randomX}}` generators
- Used `{{$randomFirstName}}`, `{{$randomEmail}}`, `{{$randomUserName}}`
- Created realistic test data without writing code
- Combined pre-request scripts with built-in variables

**Use Case:** Generate varied, realistic test data for load testing

### 3. Advanced Test Assertions
- Validated array lengths: `pm.expect(response.length).to.be.above(5)`
- Iterated through collections: `response.forEach(post => {...})`
- Checked business logic: uniqueness, ordering, data integrity
- Added response time validation: `pm.expect(pm.response.responseTime).to.be.below(1000)`
- Implemented conditional testing: `if (response.length > 0) {...}`

**Use Case:** Comprehensive API validation for production readiness

## Key Concepts

### When to Use Pre-request vs Built-in Variables

| Scenario | Use This |
|----------|----------|
| Need guaranteed uniqueness | Pre-request script with timestamp |
| Need to reuse same value multiple times | Pre-request script (store in variable) |
| Quick random data | Built-in `{{$randomX}}` |
| Complex calculations | Pre-request script |
| Format control | Pre-request script |

### Advanced Assertion Patterns

**Array Validation:**
```javascript
pm.test("Response is non-empty array", () => {
    pm.expect(response).to.be.an('array');
    pm.expect(response.length).to.be.above(0);
});
```

**Collection Validation:**
```javascript
pm.test("All items have required fields", () => {
    response.forEach(item => {
        pm.expect(item).to.have.property('id');
        pm.expect(item).to.have.property('name');
    });
});
```

**Business Logic:**
```javascript
pm.test("IDs are unique", () => {
    const ids = response.map(item => item.id);
    const uniqueIds = [...new Set(ids)];
    pm.expect(ids.length).to.eql(uniqueIds.length);
});
```

## Projects Created

### 1. Create User with Dynamic Email
- Pre-request script generates unique email
- Validates generated data was used in response
- **Tests:** 3/3 passing

### 2. Create User with Random Data
- Uses built-in Postman variables
- Generates realistic names, emails, usernames
- **Tests:** 4/4 passing

### 3. Get User Posts - Advanced Validation
- Validates array structure and contents
- Checks business logic (uniqueness, ordering)
- Response time validation
- **Tests:** 11/11 passing ✅

## Skills Gained

- ✅ Writing pre-request scripts in JavaScript
- ✅ Dynamic data generation strategies
- ✅ Advanced array and object validation
- ✅ Business logic testing
- ✅ Performance assertion (response time)
- ✅ Conditional test logic
- ✅ Professional console logging for debugging

## Real-World Applications

**E-commerce Testing:**
- Generate unique order IDs
- Validate cart totals match item prices
- Check all products have required fields

**User Management:**
- Create test users with unique emails
- Validate user lists are properly paginated
- Check no duplicate usernames exist

**API Performance:**
- Ensure endpoints respond within SLA (< 1 second)
- Validate pagination returns correct number of items
- Check data integrity across responses

## Next Steps

Day 9: Data-driven testing with CSV files and Newman CLI

---

## Bonus Challenge: Negative Testing Suite

### Overview
Built comprehensive security and edge case testing suite with 7 different attack vectors and validation scenarios.

### Tests Implemented

1. **Missing Required Fields**
   - Validated API handles incomplete data
   - Tests: 2/2 passed

2. **Invalid Email Format**
   - Tested 6 different malformed email patterns
   - Pre-request script randomizes which format to test
   - Tests: 2/2 passed

3. **Buffer Overflow Test**
   - Sent 10,000 character name
   - Validated response time remained acceptable
   - Tests: 2/2 passed

4. **SQL Injection Test**
   - Attempted classic `'); DROP TABLE users;--` injection
   - Verified input was escaped, not executed
   - Tests: 3/3 passed
   - **Security validation:** ✅

5. **XSS & Special Characters**
   - Tested Unicode (Chinese, Arabic)
   - Tested emojis
   - Tested `<script>` tags (XSS attempt)
   - Tested path traversal patterns
   - Tests: 2/2 passed

6. **Null/Empty Values**
   - Sent null and empty strings for required fields
   - Validated error handling
   - Tests: 2/2 passed

7. **Type Mismatch**
   - Sent number for name field
   - Sent boolean for email field
   - Sent array for string field
   - Tests: 2/2 passed

### Key Insights

**Mock API Behavior:**
- JSONPlaceholder accepts all invalid data (it's a mock)
- Real production APIs should reject most of these

**What I Learned:**
- How to identify security vulnerabilities
- Difference between mock and production validation
- Professional logging for security issues
- Edge case discovery techniques

**Interview Talking Points:**
- "I understand OWASP Top 10 vulnerabilities"
- "I can test for SQL injection and XSS"
- "I know how to validate input sanitization"
- "I document security risks clearly"

### Real-World Application

This testing approach would catch:
- User registration form vulnerabilities
- API endpoint security issues
- Data validation gaps
- Potential DoS attack vectors (long inputs)

**Result:** 15

**Status:** Ready for Day 9 🚀