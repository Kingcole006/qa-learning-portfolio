## Concept GET vs POST
 - Get
    > Retrieves data

    > Does not change data

    > Safe to repeat

    > e.g. http GET /users/1
  - QA mindset:
    > "Am I getting the correct data back?"

 - POST
    > Sends data to create something

    > Changes server state

    > Can fail in many ways

    > e.g. http POST /posts
  - QA mindset:
    > "What happens when I send good data? Bad data? Missing data?"

 - One sentence to remember
    > GET = read data, POST = create data

## What QA looks for in POST requests (IMPORTANT)
QA does not care about fancy payloads yet.

We care about:
  - Status codes (201, 400, 500)
  - Validation errors
  - Required fields
  - Data types
  - Clear error messages

POST requests are where most backend bugs live.

## Overview:
POST requests are used to create data on the server. QA validates correct status codes, required fields, data validation, and error handling.