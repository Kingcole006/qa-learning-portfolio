# Day 6 – Postman Test Scripts

Learned how to automate API validation using Postman Tests tab.

Automated:
- Status code validation
- JSON field validation
- Value assertion
- Response time validation

This eliminates manual checking and creates repeatable automated tests.

## Key learning
Automated tests can pass/fail independently. Assertion failures clearly show expected vs actual values.

## Added smarter assertions
- Validated id is a positive number
- Validated response contains required keys (userId, id, title, body)

## Postman JavaScript “cheat sheet” (copy/paste)
 - Status code:
pm.test("Status is 200", () => {
  pm.response.to.have.status(200);
});

 - Response time:
pm.test("Response time < 500ms", () => {
  pm.expect(pm.response.responseTime).to.be.below(500);
});

 - Content-Type header:
pm.test("Content-Type is JSON", () => {
  pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});

 - Response is an object:
pm.test("Response is an object", () => {
  const data = pm.response.json();
  pm.expect(data).to.be.an("object");
});

 - Response is an array:
pm.test("Response is an array", () => {
  const data = pm.response.json();
  pm.expect(data).to.be.an("array");
});

 - Required fields exist:
pm.test("Has required fields", () => {
  const data = pm.response.json();
  pm.expect(data).to.have.property("id");
  pm.expect(data).to.have.property("title");
});

or

pm.test("Each item has required fields", () => {
  const data = pm.response.json();

  data.forEach(item => {
    pm.expect(item).to.have.property("userId");
    pm.expect(item).to.have.property("id");
    pm.expect(item).to.have.property("title");
    pm.expect(item).to.have.property("body");
  });
});

 - Validate types:
pm.test("Field types are correct", () => {
  const data = pm.response.json();
  pm.expect(data.id).to.be.a("number");
  pm.expect(data.title).to.be.a("string");
});

or

pm.test("Each item has correct field types", () => {
  const data = pm.response.json();

  data.forEach(item => {
    pm.expect(item.userId).to.be.a("number");
    pm.expect(item.id).to.be.a("number");
    pm.expect(item.title).to.be.a("string");
    pm.expect(item.body).to.be.a("string");
  });
});

 - Validate exact value:
pm.test("ID equals 1", () => {
  const data = pm.response.json();
  pm.expect(data.id).to.eql(1);
});

 - Validate value rules (more realistic than exact match):
pm.test("ID is positive", () => {
  const data = pm.response.json();
  pm.expect(data.id).to.be.above(0);
});

 - Validate array length:
pm.test("Returns at least 1 item", () => {
  const data = pm.response.json();
  pm.expect(data.length).to.be.above(0);
});

 - Validate every item in an array has a field/value:
   > Example: /posts?userId=1

pm.test("All posts have userId=1", () => {
  const data = pm.response.json();
  data.forEach(item => {
    pm.expect(item.userId).to.eql(1);
  });
});

## How you choose which tests to write (quick guide)
For GET endpoints (most common)
 - Always test: Status code is 200
 - Response is JSON
 - Structure is object/array
 - Required fields exist
 - Types look right

For POST endpoints
 - Always test: Status is 201 (or expected)
 - Response contains created object or id
 - Required fields exist
 - Negative tests return 400/422 (in real APIs)

 ## Tested GET /posts/1
Validated:
- Status code
- Response time
- Headers
- Required fields
- Field types
- Resource ID consistency

## Tested GET /posts?userId=1
Validated:
- Status code
- Response in an array
- Array length returns at least 1 item
- Required fields

## Day 6 Reflections:
- Learned array validation requires looping through items
- Wrote tests for GET collection endpoint with userId filter
