import { test, expect, request } from '@playwright/test';

// Base URL for the API we're testing
const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('API Tests - Users Endpoint', () => {

  test('GET all users - returns 200 and array', async () => {
    // Create an API request context
    const apiContext = await request.newContext();

    // Make the GET request
    const response = await apiContext.get(`${BASE_URL}/users`);

    // Verify status code is 200
    expect(response.status()).toBe(200);

    // Parse the response body
    const users = await response.json();

    // Verify we got an array back
    expect(Array.isArray(users)).toBeTruthy();

    // Verify we got 10 users
    expect(users.length).toBe(10);

    console.log(`✅ Found ${users.length} users`);
  });

  test('GET single user - returns correct user', async () => {
    const apiContext = await request.newContext();

    // Get user with ID 1
    const response = await apiContext.get(`${BASE_URL}/users/1`);

    expect(response.status()).toBe(200);

    const user = await response.json();

    // Verify the user has required fields
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');

    // Verify it's the right user
    expect(user.id).toBe(1);

    console.log(`✅ User found: ${user.name}`);
  });

  test('GET non-existent user - returns 404', async () => {
    const apiContext = await request.newContext();

    // Try to get a user that doesn't exist
    const response = await apiContext.get(`${BASE_URL}/users/999`);

    // Verify we get a 404
    expect(response.status()).toBe(404);

    console.log(`✅ 404 confirmed for non-existent user`);
  });

  test('POST create user - returns 201', async () => {
    const apiContext = await request.newContext();

    // New user data to send
    const newUser = {
      name: 'Cole Brown',
      username: 'kingcole006',
      email: 'Cole.Brown72@gmail.com'
    };

    // Make the POST request
    const response = await apiContext.post(`${BASE_URL}/users`, {
      data: newUser
    });

    // Verify it was created (201 = Created)
    expect(response.status()).toBe(201);

    const created = await response.json();

    // Verify the response contains our data
    expect(created.name).toBe(newUser.name);
    expect(created.email).toBe(newUser.email);

    console.log(`✅ User created with ID: ${created.id}`);
  });

});