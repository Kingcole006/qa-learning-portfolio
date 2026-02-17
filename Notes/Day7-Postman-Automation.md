# Day 7: Postman Automation - Environment Variables & Collection Runner

**Date:** February 17, 2025  
**Duration:** 3 hours  
**Status:** ✅ Complete

## What I Learned

### 1. Environment Variables
- Created `QA-Env` environment with `baseUrl` variable
- Learned how to switch between dev/qa/prod environments
- Used `{{baseUrl}}` syntax in requests
- Understanding of Initial vs Current values

### 2. Storing Response Data
- Used `pm.environment.set()` to store data from responses
- Extracted `id` field from JSON response
- Stored dynamic values for use in subsequent requests

### 3. Retrieving Stored Data
- Used `pm.environment.get()` to retrieve stored variables
- Passed data between requests using `{{variableName}}` syntax
- Built request chains that depend on previous responses

### 4. Request Chaining
- Created workflow: Request 1 → Store data → Request 2 uses that data
- Simulated real-world scenarios (login → use token, create → use ID)

### 5. Collection Runner
- Organized 4 requests into a collection: `Post CRUD Workflow`
- Executed entire test suite with one click
- Validated complete Create-Read-Update-Delete lifecycle

## Project: Post CRUD Workflow

### Collection Structure
```
Post CRUD Workflow/
├── 1 - Create Post (POST)
├── 2 - Get Created Post (GET)
├── 3 - Update Post (PUT)
└── 4 - Delete Post (DELETE)
```

### Test Results
- **Total Tests:** 9
- **Passed:** 9 ✅
- **Failed:** 0
- **Execution Time:** 1.5 seconds

### Workflow Logic
1. **POST /posts** → Creates new post → Stores `newPostId`
2. **GET /posts/1** → Retrieves post using stored ID
3. **PUT /posts/1** → Updates post data
4. **DELETE /posts/1** → Removes post

## Technical Details

### Environment Variables Used
| Variable | Value | Purpose |
|----------|-------|---------|
| `baseUrl` | `https://jsonplaceholder.typicode.com` | API base URL |
| `postId` | Dynamic (from response) | Store post IDs |
| `newPostId` | Dynamic (from response) | Store created post ID |

### Sample Test Script
```javascript
// Store response data
const data = pm.response.json();
pm.environment.set("postId", data.id);

// Validate stored data was used correctly
pm.test("Correct post retrieved", () => {
    const response = pm.response.json();
    const expectedId = parseInt(pm.environment.get("postId"));
    pm.expect(response.id).to.eql(expectedId);
});
```

## Key Insights

### Mock API Limitations
- JSONPlaceholder is a mock API - POST requests return success but don't persist
- Had to adjust workflow to use existing posts for GET/PUT/DELETE
- In real QA environments, all CRUD operations would work end-to-end

### Professional Workflow Simulation
This exercise simulates real-world scenarios:
- **Login flow:** POST /login → store token → use in all requests
- **User creation:** POST /users → store userId → GET/PUT/DELETE that user
- **E-commerce:** Add to cart → store cartId → checkout → verify order

## Next Steps
- Day 8: Pre-request scripts and dynamic data generation
- Day 9: Data-driven testing with CSV files
- Day 10: Real API with authentication (Reqres.in)

## Resources
- [Postman Documentation](https://learning.postman.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

**Status:** Ready for Day 8 🚀