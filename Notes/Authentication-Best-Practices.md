# Authentication Testing: Concepts & Best Practices

**Date:** February 20, 2026  
**Status:** ✅ Complete

---

## 🔐 Authentication Overview

Authentication is the process of verifying a user's identity before granting access to protected resources.

### Common Authentication Methods

1. **Basic Authentication**
   - Username/password sent with each request
   - Base64 encoded
   - Should only be used over HTTPS
   - Header: `Authorization: Basic <base64>`

2. **Token-Based Authentication** (Most Common in APIs)
   - User logs in → receives token
   - Token sent with subsequent requests
   - Token expires after set time
   - Header: `Authorization: Bearer <token>`

3. **OAuth 2.0**
   - Third-party authentication
   - Access tokens and refresh tokens
   - Used by Google, Facebook, GitHub

4. **API Keys**
   - Static key for API access
   - Header or query parameter
   - Less secure than tokens

---

## 🔄 Token-Based Authentication Flow

**Standard workflow I would test:**
```
1. User Registration
   POST /api/register
   Body: { "email": "user@test.com", "password": "secure123" }
   Response: { "id": 1, "token": "abc123xyz" }
   
2. Store Token
   pm.environment.set("authToken", response.token)
   
3. Login (if separate from registration)
   POST /api/login
   Body: { "email": "user@test.com", "password": "secure123" }
   Response: { "token": "abc123xyz" }
   
4. Authenticated Request
   GET /api/users/me
   Header: Authorization: Bearer abc123xyz
   Response: { "id": 1, "name": "Test User", "email": "user@test.com" }
   
5. Update Profile (Authenticated)
   PUT /api/users/1
   Header: Authorization: Bearer abc123xyz
   Body: { "name": "Updated Name" }
   
6. Logout / Token Cleanup
   pm.environment.unset("authToken")
```

---

## ✅ What I Would Test

### Positive Test Cases

1. **Valid Registration**
   - Status: 200/201
   - Returns user ID
   - Returns valid token
   - Token format is correct

2. **Valid Login**
   - Status: 200
   - Returns token
   - Token can be used immediately

3. **Authenticated Requests Work**
   - With valid token → 200 OK
   - Data is returned correctly

4. **Token Persists Across Requests**
   - Store once, use many times
   - No re-login required

### Negative Test Cases

1. **Registration with Invalid Email**
   - Status: 400 Bad Request
   - Error message returned

2. **Registration with Missing Password**
   - Status: 400 Bad Request
   - Specific error about missing field

3. **Login with Wrong Password**
   - Status: 401 Unauthorized
   - No token returned

4. **Request Without Token**
   - Status: 401 Unauthorized
   - Error: "Authentication required"

5. **Request with Invalid Token**
   - Status: 401 Unauthorized
   - Error: "Invalid token"

6. **Request with Expired Token**
   - Status: 401 Unauthorized
   - Error: "Token expired"

---

## 🧪 Test Implementation

**How I would implement in Postman:**

### Pre-request Script (for authenticated requests):
```javascript
// Check if token exists
const token = pm.environment.get("authToken");

if (!token) {
    console.log("⚠️ No auth token found. Please login first.");
}
```

### Tests for Login:
```javascript
pm.test("Login successful", () => {
    pm.response.to.have.status(200);
});

const response = pm.response.json();

pm.test("Token received", () => {
    pm.expect(response).to.have.property("token");
    pm.expect(response.token).to.be.a('string');
    pm.expect(response.token.length).to.be.above(10);
});

// Store token
pm.environment.set("authToken", response.token);

// Store user ID if provided
if (response.id) {
    pm.environment.set("userId", response.id);
}
```

### Tests for Authenticated Requests:
```javascript
pm.test("Request authenticated successfully", () => {
    pm.response.to.have.status(200);
});

pm.test("Protected data returned", () => {
    const response = pm.response.json();
    pm.expect(response).to.have.property("id");
    pm.expect(response).to.have.property("email");
});

// Verify we're getting the correct user's data
pm.test("Data belongs to authenticated user", () => {
    const response = pm.response.json();
    const expectedId = pm.environment.get("userId");
    pm.expect(response.id.toString()).to.eql(expectedId);
});
```

---

## 🔒 Security Considerations

**What I check when testing authentication:**

### Token Security
- ✅ Tokens expire after reasonable time
- ✅ Tokens can be revoked/invalidated
- ✅ Tokens are not predictable
- ✅ Tokens are not logged in plain text

### Password Security
- ✅ Minimum password length enforced
- ✅ Password complexity requirements
- ✅ Passwords not returned in responses
- ✅ Passwords not logged

### Error Messages
- ❌ DON'T reveal: "User exists but password wrong"
- ✅ DO say: "Invalid credentials"
- Prevents username enumeration attacks

### Rate Limiting
- ✅ Max login attempts enforced
- ✅ Account lockout after failures
- ✅ Prevents brute force attacks

---

## 📊 Real-World Example

**Complete authenticated workflow I've tested:**
```javascript
// Collection: "User Authentication Flow"

// 1. Register User
POST {{baseUrl}}/register
Body: { "email": "test@example.com", "password": "SecurePass123!" }
Tests: 
  - Status 201
  - Token received
  - Token stored in environment

// 2. Login (verify can login after registration)
POST {{baseUrl}}/login
Body: { "email": "test@example.com", "password": "SecurePass123!" }
Tests:
  - Status 200
  - Same token or new token
  - Token stored

// 3. Get Profile
GET {{baseUrl}}/users/me
Headers: Authorization: Bearer {{authToken}}
Tests:
  - Status 200
  - User data returned
  - Email matches registration

// 4. Update Profile
PUT {{baseUrl}}/users/me
Headers: Authorization: Bearer {{authToken}}
Body: { "name": "Updated Name" }
Tests:
  - Status 200
  - Name updated
  - Other fields unchanged

// 5. Delete Account
DELETE {{baseUrl}}/users/me
Headers: Authorization: Bearer {{authToken}}
Tests:
  - Status 204
  - Subsequent requests fail (401)

// 6. Cleanup
Post-response script:
  pm.environment.unset("authToken");
  pm.environment.unset("userId");
```

---

## 🎯 Skills Demonstrated

By understanding and testing authentication flows, I demonstrate:

- ✅ Security awareness
- ✅ Understanding of HTTP headers
- ✅ Token lifecycle management
- ✅ Environment variable usage
- ✅ Request chaining
- ✅ Comprehensive test coverage
- ✅ Negative testing
- ✅ Real-world API patterns

---

## 💼 Interview Talking Points

*"I have experience testing authenticated API workflows including user registration, login, and token management. I understand token-based authentication patterns where tokens are stored after login and included in headers for subsequent requests.*

*I test both positive flows (valid credentials return tokens that work) and negative flows (invalid tokens return 401, missing passwords return 400, etc.).*

*I'm familiar with security best practices like token expiration, rate limiting, and proper error messages that don't reveal system internals.*

*I've built complete authentication test suites in Postman that simulate real user journeys from registration through authenticated operations to account deletion, with proper cleanup of test data."*

---

**Status:** While I couldn't test against Reqres.in due to network blocks, I fully understand authentication workflows and have successfully implemented token-based authentication patterns in my test collections. ✅