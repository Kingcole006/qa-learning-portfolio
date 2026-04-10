import { test, expect, request } from '@playwright/test';

// Base URL for the API we're testing
const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('API Tests - Users Endpoint', () => {

  test('GET all users - returns 200 and array @smoke @api', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${BASE_URL}/users`);
    expect(response.status()).toBe(200);
    const users = await response.json();
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBe(10);
    console.log(`✅ Found ${users.length} users`);
  });

  test('GET single user - returns correct user @smoke @api', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${BASE_URL}/users/1`);
    expect(response.status()).toBe(200);
    const user = await response.json();
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
    expect(user.id).toBe(1);
    console.log(`✅ User found: ${user.name}`);
  });

  test('GET non-existent user - returns 404 @regression @api', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${BASE_URL}/users/999`);
    expect(response.status()).toBe(404);
    console.log(`✅ 404 confirmed for non-existent user`);
  });

  test('POST create user - returns 201 @regression @api', async () => {
    const apiContext = await request.newContext();
    const newUser = {
      name: 'Cole Brown',
      username: 'kingcole006',
      email: 'cole.brown272@gmail.com'
    };
    const response = await apiContext.post(`${BASE_URL}/users`, {
      data: newUser
    });
    expect(response.status()).toBe(201);
    const created = await response.json();
    expect(created.name).toBe(newUser.name);
    expect(created.email).toBe(newUser.email);
    console.log(`✅ User created with ID: ${created.id}`);
  });

});