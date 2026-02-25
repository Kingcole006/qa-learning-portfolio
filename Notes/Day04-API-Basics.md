# Day 4 – API Basics

## What is an API(Application Programming Interface)
An API allows different parts of an application to communicate by sending requests and receiving responses.

## Why QA Tests APIs
Testing them ensures reliablility, secuirty, & performance, preventing costly issues from reaching end-users
- Faster than UI testing
- Finds backend issues early
- Validates data correctness
- Reduces dependency on UI

## API Request Components
- Method (GET, POST, etc.): Indicates the type of action to be performed on the resource.

Common methods include:
  > GET: Retrieve data

  > POST: Create a new resource or submit data

  > PUT/PATCH: Update or replace an existing resource

  > DELETE: Remove a resource

- URL (endpoint): The unique address (URL) that specifies the location of the resource the client wants to interact with, such as (https://api.example.com/users).
- Request body (optional): contains the payload(the actual data), typically formatted as JSON or XML.
- Response (status + data)

## What is JSON (JavaScript Object Notation) 
JSON is a lightweight data format used by APIs to return structured data in key-value pairs and arrays. QA validates JSON structure, required fields, and data correctness.

JSON is a structured way for systems to send data to each other.
 - It's:
    > Human-readable

    > Machine-readable

    > Consistent
    
    > Lightweight

## How to recongize JSON immediately
JSON has:
  - Objects ({}): a group of related data (e.g {"id": 1, "name": "John"})
  - Arrays ([]): a list of objects (e.g. [{"id": 1, "name": "John"}, {"id": 2, "name": "Jane"}])
  - Key-Value pairs: Field name -> actual name (e.g. "key": value -> "email": "john@example.com")

## When QA tests APIs, we’re checking:
1️⃣ Structure
 - Is the JSON valid?
 - Are brackets closed properly?
 - Are keys named correctly?

2️⃣ Data presence
 - Are required fields present?
 - Is anything missing?

3️⃣ Data correctness
 - Does every user have an id?
 - Is id a number?
 - Is email always present?
 - Is email formatted correctly?
 - Are fields empty when they shouldn’t be?

4️⃣ Consistency
 - Do all objects have the same keys?
 - Does page 1 look like page 2?

## QA rule:
- HTML returned by an API = problem

- JSON returned = expected

## API Test Observation
A GET request to https://reqres.in/api/users?page=2 returned a 403 Forbidden response with an HTML page instead of JSON, likely due to rate limiting or security restrictions.

## Successful API Test - Singel User Endpoint
Endpoint: GET /users/1

Satus Code: 200 OK

Validations Performed:
- Verified response returned a JSON object
- Confirmed required fields (id, name, username, email) are present
- Validated data types for key fields
- Observed nested objects (address, geo, company)

## Negative Test:
- GET /users/9999 returned 404 as expected 

## Additional Successful API Tests
Tested multiple GET endpoints using JSONPlaceholder.

Endpoints validated:
- GET /users (array response)
- GET /users/1 (object response)
- GET /posts/1
- GET /posts/1/comments
- GET /todos

Validations performed:
- Confirmed correct status codes
- Verified JSON sturcture (arrays vs objects)
- Checked required fields and data types
- Performed negative testing woith invalid IDs

## API Negative Test - Invalid Path Parameters
Endpoint: GET /posts/true

Expected Result: 404 Not Found

Actual Result: 404 Not Found

Conclusion: API correctly rejects non-numeric path parameters.

## API Negative Tests – Invalid Post IDs
Tested the following endpoints:
- GET /posts/-1
- GET /posts/1.5
- GET /posts/abc

Expected Result:
API returns 404 Not Found for invalid post IDs.

Actual Result:
All requests returned 404 Not Found.

Conclusion:
API correctly validates path parameters and rejects invalid values.