# Day 5 – POST Requests

## Successful POST Test

Endpoint: POST /posts

Request Body:
{
  "title": "QA Learning",
  "body": "This is my first POST request",
  "userId": 1
}

Expected Result:
Status 201 Created
Response contains created object with ID

Actual Result:
Status 201 Created
Response returned created object with id

Conclusion:
POST endpoint successfully creates new resource.

## Negative POST Tests

Tested:
- Missing title
- Wrong data type for userId
- Empty body

Result:
API still returns 201 Created for all cases

Conclusion:
This mock API doesn not enforce strict validations

## API Test 1: Filter posts by userId
- Method/Endpoint: GET /posts?userId
- Expected: 200 + array of posts for userId=1
- Actual: 200 + array returned
- Validation Notes: Verified multiple posts; all returned objects had userId=1
- Result: PASS

## API Test 2: Valid POST Create Post
- Method/Endpoint: POST /posts
- Request Body:
{
  "title": "Day 5 control test",
  "body": "Creating a new post",
  "userId": 1
}

- Expected: 201 Created with new resource including id
- Actual: 201 Created and response returned id
- Validation Notes: Confirmed response body contains title, body, userId, and generate id
- Result: PASS

## API Test 3: Empty Body POST
- Method/Endpoint: POST /posts
- Request Body: {}
- Expected: 400 Bad Request or 404 Not Found
- Actual: 201 Created
- Validation Notes: Mock API does not enforce validation rules
- Result: Expected behaviour for this mock API

## API Test 4: Invalid Data Types in POST Request
- Method/Endpoint: POST /posts
- Request Body:
{
  "title": 123,
  "body": true,
  "userId": "abc"
}

- Expected: 400 Bad Request or 404 Not Found
- Actual: 201 Created
- Validation Notes: Mock API does not enforce validation rules
- Result: Expected behaviour for this mock API

## API Test 5: POST Without Proper Content-Type Header
- Method/Endpoint: POST /posts
- Header Modified: Removed or changed Content-Type from application/json
- Expected (real-world API): 415 Unsupported Media Type or 400 Bad Request
- Actual: 201 Created, response only returned id
- Validation Notes: Mock API does not enforce Content-Type validation and may ignore request body when header is incorrect.

## Day 5 Final API Tests

1) PUT /posts/1
- Expected: 200 and updated fields returned
- Actual: 200 and fields update with data inputted
- Notes: PUT response reflects updated object

2) PATCH /posts/1
- Expected: 200 and partial update applied
- Actual: 200 and full update to object resulted in the body including the userId, id, title, and body
- Notes: Mock API returned full object even though only partial update was sent

3) DELETE /posts/1
- Expected: 200/204 and no server error
- Actual: 200 and Response bodu is empty
- Notes: Deleting should not crash

4) POST /posts/1 (method misuse)
- Expected (real-world): 405 Method Not Allowed
- Actual: 404 Not found
- Notes:

5) GET /posts/1 vs /posts/2 consistency
- Expected: consistent structure across responses
- Actual: 200 OK for both endpoints; both responses contained userId, id, title, and body
- Notes: Response structure is consistent; only values differ

### Day 5 Summary
Tested POST, PUT, PATCH, DELETE, filtering, negative scenarios, and method misuse. Observed that JSONPlaceholder is a mock API that does not enforce validation rules or strict header/method controls. Practiced interpreting API behavior vs. true defects.