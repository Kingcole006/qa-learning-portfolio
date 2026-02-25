## Understanding Each Test Type:
1. Response Time Validation:
  - javascript:
  - pm.expect(pm.response.responseTime).to.be.below(1000);

> Real-world use: Performance SLA validation (API must respond within X ms)

2. Array Length Validation:
  - javascript:
  - pm.expect(response.length).to.be.above(0);
  - pm.expect(response.length).to.be.at.least(5);

> Real-world use: Pagination validation, minimum results expectations

3. Collection Iteration:
  - javascript:
  - response.forEach(post => {
        pm.expect(post).to.have.property('userId');
    });

> Real-world use: Validate every item in a list meets requirements

4. Business Logic:
  - javascript:
  - // Check uniqueness
  - const ids = response.map(post => post.id);
  - const uniqueIds = [...new Set(ids)];
  - pm.expect(ids.length).to.eql(uniqueIds.length);

> Real-world use: Ensure no duplicate records, data integrity checks

5. Conditional Testing:
  - javascript:
  - if (response.length > 0) {
    // Only test if array has items
}

> Real-world use: Handle optional data, different response scenarios

## Additional Advanced Techniques:
1. Test: Check if Array Contains Specific Value
  - javascript
  - pm.test("User ID 1 posts exist in response", () => {
    const userIds = response.map(post => post.userId);
    pm.expect(userIds).to.include(1);
});

2. Test: Validate Date Format
  - javascript
  - pm.test("CreatedAt field is valid date", () => {
    response.forEach(item => {
        const date = new Date(item.createdAt);
        pm.expect(date.toString()).to.not.eql('Invalid Date');
    });
});

3. Test: Check String Pattern
  - javascript
  - pm.test("Email format is valid", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    pm.expect(response.email).to.match(emailRegex);
});

4. Test: Numeric Range
  - javascript
  - pm.test("Price is within acceptable range", () => {
    pm.expect(response.price).to.be.within(0, 1000);
});