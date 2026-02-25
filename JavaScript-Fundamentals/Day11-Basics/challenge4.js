// ============================================
// CHALLENGE 4: Test Data Generator
// ============================================

// 1. Create base user data
const baseUsername = "testuser";
const baseDomain = "@testing.com";
let userNumber = 1;

// 2. Generate first user
const username1 = `${baseUsername}${userNumber}`;
const email1 = `${baseUsername}${userNumber}${baseDomain}`;

// 3. Log first user
console.log(`User 1: ${username1} | Email: ${email1}`);

// 4. Generate second user (increment userNumber)
userNumber++;  // Now userNumber = 2

const username2 = `${baseUsername}${userNumber}`;
const email2 = `${baseUsername}${userNumber}${baseDomain}`;

// 5. Log second user
console.log(`User 2: ${username2} | Email: ${email2}`);

// 6. Generate third user (increment again)
userNumber++;  // Now userNumber = 3

const username3 = `${baseUsername}${userNumber}`;
const email3 = `${baseUsername}${userNumber}${baseDomain}`;

// 7. Log third user
console.log(`User 3: ${username3} | Email: ${email3}`);

// 8. Create a summary showing all 3 users generated
const generatorSummary = `
Test Data Generator Summary
===========================
Base Username: ${baseUsername}
Domain: ${baseDomain}

Generated Users:
1. ${username1} | ${email1}
2. ${username2} | ${email2}
3. ${username3} | ${email3}

Total Users Created: ${userNumber}
`;

console.log(generatorSummary);