## HTTP Status Codes — What QA Must Know
Status codes are grouped into 5 categories:
- Range	     &       Meaning
  > 1xx	    =     Informational

  > 2xx	    =       Success

  > 3xx	    =     Redirection

  > 4xx	    =    Client Errors

  > 5xx	    =    Server Errors

You mainly care about 2xx, 4xx, and 5xx

## 2xx — SUCCESS (Expected Positive Behavior)
These mean the request was successful.
- 200 OK
 > Standard success response for GET

Also used for PUT, PATCH, DELETE sometimes

QA meaning:
The request worked and returned expected data.

- 201 Created
 > Used for POST when something is created

QA meaning:
Resource was successfully created.

- 202 Accepted
 > Request accepted but not processed yet (async processing)

QA meaning:
The server got it, but processing happens later.

- 204 No Content
 > Success but no body returned
 > Common for DELETE

QA meaning:
Operation succeeded, nothing to return.

## 3xx — REDIRECTION
You’ll see these less often in API testing.
- 301 Moved Permanently
 > Endpoint changed permanently

- 302 Found
 > Temporary redirect

QA meaning:
API route may have changed or misconfigured.

## 4xx — CLIENT ERRORS (Very Important for QA)
These mean the request is wrong.
- 400 Bad Request
 > Invalid request
 > Missing required fields
 > Wrong data format

QA meaning:
Validation error. Usually expected for negative tests.

- 401 Unauthorized
 > No authentication provided
 > Token missing/expired

QA meaning:
Auth problem.

- 403 Forbidden
 > Auth provided but no permission

QA meaning:
Access denied.

- 404 Not Found
 > Endpoint doesn’t exist
 > Resource ID doesn’t exist

QA meaning:
Wrong URL or invalid resource.

- 405 Method Not Allowed
 > Wrong HTTP method used
 > Example: POST where only GET allowed

QA meaning:
API method restriction working.

- 409 Conflict
 > Duplicate data
 > Resource conflict (e.g., username already exists)

QA meaning:
Data integrity issue.

- 415 Unsupported Media Type
 > Wrong Content-Type header
 > Example: sending JSON without application/json

QA meaning:
Header validation working.

- 422 Unprocessable Entity
 > Validation failed (field-level errors)
 > Common in modern APIs

QA meaning:
Server understands request but rejects invalid content.

## 5xx — SERVER ERRORS (Serious Issues)
These mean the server failed.

- 500 Internal Server Error
 > Something broke in backend

QA meaning:
Serious bug.

- 502 Bad Gateway
 > Upstream service failed

- 503 Service Unavailable
 > Server overloaded or down

- 504 Gateway Timeout
 > Server took too long to respond

QA meaning:
Infrastructure or performance problem.

## How a QA Thinks About Status Codes
Instead of:
- “Did I get 200?”

You should think:
- Is this the correct code for this scenario?
- If I send bad data, do I get 400?
- If I use wrong method, do I get 405?
- If auth missing, do I get 401?

Status codes must match behavior.