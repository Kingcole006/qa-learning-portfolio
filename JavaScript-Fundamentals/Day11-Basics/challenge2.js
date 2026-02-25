// ============================================
// CHALLENGE 2: User Registration Data
// ============================================

// 1. Create user data variables:
//    - firstName: "John"
//    - lastName: "Doe"
//    - age: 28
//    - email: use firstName and lastName to create email
//             Format: firstname.lastname@test.com (lowercase)
//    - isActive: true
//    - accountBalance: 0.00

// Your code here:
const firstName = "John";
const lastName = "Doe";
const age = 28;
const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`;
const isActive = true;
let accountBalance = 0.00;

// 2. Create a full name by combining firstName and lastName

// Your code here:
const fullName = `${firstName} ${lastName}`;


// 3. Check if user is adult (age >= 18)
//    Store result in a variable called isAdult

// Your code here:
const isAdult = age >= 18;


// 4. Simulate account activity:
//    - Add $100 to accountBalance
//    - Add another $50
//    - Subtract $25

// Your code here:
accountBalance += 100;  // Add 100
accountBalance += 50;   // Add 50
accountBalance -= 25;   // Subtract 25

// 5. Create a user profile summary using template literals
//    Include all user information

// Your code here:
const userProfile = `User Profile Summary
====================
Full Name: ${fullName}
Email: ${email}
Age: ${age}
Adult: ${isAdult}
Account Status: ${isActive ? 'Active' : 'Inactive'}
Balance: $${accountBalance}
`;

// 6. Log the profile

// Your code here:
console.log(userProfile);