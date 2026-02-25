# JavaScript Quick Reference Guide

**Your personal JavaScript dictionary - reference this anytime!**

---

## 📖 Table of Contents
1. [Keywords](#keywords)
2. [Operators](#operators)
3. [Data Types](#data-types)
4. [Variables](#variables)
5. [Functions](#functions)
6. [Objects](#objects)
7. [Arrays](#arrays)
8. [Loops](#loops)
9. [Conditionals](#conditionals)
10. [Common Methods](#common-methods)
11. [Special Characters](#special-characters)

---

## Keywords

**Keywords = Special words in JavaScript with specific meanings**

| Keyword | What It Does | Example |
|---------|--------------|---------|
| `const` | Creates a variable that CAN'T be changed | `const name = "Cole";` |
| `let` | Creates a variable that CAN be changed | `let age = 28;` |
| `var` | Old way to create variables (avoid) | `var x = 5;` |
| `function` | Creates a reusable block of code | `function test() {}` |
| `return` | Sends a value back from a function | `return result;` |
| `if` | Runs code if condition is true | `if (x > 5) {}` |
| `else` | Runs code if condition is false | `else {}` |
| `for` | Repeats code a specific number of times | `for (let i = 0; i < 10; i++)` |
| `while` | Repeats code while condition is true | `while (x < 10) {}` |
| `true` | Boolean value meaning yes/correct | `const isActive = true;` |
| `false` | Boolean value meaning no/incorrect | `const failed = false;` |
| `null` | Intentionally empty value | `let token = null;` |
| `undefined` | Variable exists but has no value | `let x;` (x is undefined) |
| `new` | Creates a new instance of something | `new Date()` |

---

## Operators

**Operators = Symbols that perform operations**

### Assignment Operators

| Operator | What It Does | Example | Result |
|----------|--------------|---------|--------|
| `=` | Assigns a value | `x = 5` | x becomes 5 |
| `+=` | Add and assign | `x += 3` (x = x + 3) | If x was 5, now 8 |
| `-=` | Subtract and assign | `x -= 2` (x = x - 2) | If x was 8, now 6 |
| `*=` | Multiply and assign | `x *= 2` (x = x * 2) | If x was 6, now 12 |
| `/=` | Divide and assign | `x /= 3` (x = x / 3) | If x was 12, now 4 |

### Arithmetic Operators

| Operator | What It Does | Example | Result |
|----------|--------------|---------|--------|
| `+` | Addition | `5 + 3` | 8 |
| `-` | Subtraction | `5 - 3` | 2 |
| `*` | Multiplication | `5 * 3` | 15 |
| `/` | Division | `10 / 2` | 5 |
| `%` | Modulus (remainder) | `10 % 3` | 1 (10 ÷ 3 = 3 remainder 1) |
| `++` | Increment (add 1) | `x++` | If x was 5, now 6 |
| `--` | Decrement (subtract 1) | `x--` | If x was 6, now 5 |

### Comparison Operators

| Operator | What It Does | Example | Result |
|----------|--------------|---------|--------|
| `===` | Exactly equal to | `5 === 5` | true |
| `!==` | Not equal to | `5 !== 3` | true |
| `>` | Greater than | `5 > 3` | true |
| `<` | Less than | `3 < 5` | true |
| `>=` | Greater than or equal | `5 >= 5` | true |
| `<=` | Less than or equal | `3 <= 5` | true |

**⚠️ Avoid:** `==` and `!=` (they do weird type conversions)

### Logical Operators

| Operator | What It Does | Example | Result |
|----------|--------------|---------|--------|
| `&&` | AND (both must be true) | `true && true` | true |
| | | `true && false` | false |
| `||` | OR (at least one must be true) | `true || false` | true |
| | | `false || false` | false |
| `!` | NOT (reverses the value) | `!true` | false |
| | | `!false` | true |

---

## Data Types

**Data Types = Different kinds of values you can store**

| Type | What It Is | Examples | How to Create |
|------|------------|----------|---------------|
| **String** | Text | "hello", 'test', \`name\` | Use quotes: `"text"` or `'text'` or \`text\` |
| **Number** | Numbers | 42, 3.14, -5 | Just write the number: `42` |
| **Boolean** | True/False | true, false | Use keywords: `true` or `false` |
| **Null** | Intentionally empty | null | Use keyword: `null` |
| **Undefined** | Not yet assigned | undefined | Don't assign anything |
| **Object** | Collection of properties | { name: "Cole" } | Use curly braces: `{}` |
| **Array** | List of items | [1, 2, 3] | Use square brackets: `[]` |

### Checking Data Types
```javascript
typeof "hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (JavaScript quirk!)
typeof {}           // "object"
typeof []           // "object" (arrays are objects)
```

---

## Variables

**Variables = Containers that store values**

### const (Constant)

**Use when:** Value won't change
```javascript
const apiUrl = "https://api.example.com";
const maxRetries = 3;
const isProduction = false;

// ❌ Can't do this:
// apiUrl = "different-url";  // Error!
```

### let (Variable)

**Use when:** Value will change
```javascript
let counter = 0;
let currentUser = "John";

// ✅ Can do this:
counter = 5;
currentUser = "Jane";
```

### Naming Rules

**✅ Good names:**
```javascript
const userName = "Cole";          // camelCase
const API_BASE_URL = "https://";  // UPPERCASE for constants
const test123 = "valid";          // Numbers OK (not at start)
```

**❌ Bad names:**
```javascript
const user-name = "Cole";    // No dashes
const 123test = "bad";       // Can't start with number
const my name = "bad";       // No spaces
const class = "bad";         // Can't use keywords
```

---

## Functions

**Functions = Reusable blocks of code**

### Basic Function
```javascript
function greet() {
    console.log("Hello!");
}

greet();  // Call the function
```

### Function with Parameters
```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Cole");  // Hello, Cole!
```

### Function with Return
```javascript
function add(a, b) {
    return a + b;
}

const result = add(5, 3);  // result = 8
```

### Function with Default Parameters
```javascript
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet();          // Hello, Guest!
greet("Cole");    // Hello, Cole!
```

### Arrow Function (Shorthand)
```javascript
// Regular function:
function add(a, b) {
    return a + b;
}

// Arrow function (same thing):
const add = (a, b) => {
    return a + b;
};

// Super short arrow function:
const add = (a, b) => a + b;
```

---

## Objects

**Objects = Collections of related data (key-value pairs)**

### Creating Objects
```javascript
const user = {
    id: 1,
    username: "testuser",
    email: "test@example.com",
    isActive: true
};
```

### Accessing Properties
```javascript
// Dot notation (most common):
console.log(user.username);  // "testuser"

// Bracket notation (when property name is in a variable):
const property = "email";
console.log(user[property]);  // "test@example.com"
```

### Adding Properties
```javascript
user.age = 28;
user["role"] = "admin";
```

### Modifying Properties
```javascript
user.username = "newname";
user.isActive = false;
```

### Checking if Property Exists
```javascript
if (user.email !== undefined) {
    console.log("Email exists!");
}

// Or use 'in':
if ("email" in user) {
    console.log("Email exists!");
}
```

---

## Arrays

**Arrays = Ordered lists of items**

### Creating Arrays
```javascript
const numbers = [1, 2, 3, 4, 5];
const names = ["Alice", "Bob", "Charlie"];
const mixed = [1, "hello", true, null];
const empty = [];
```

### Accessing Array Items
```javascript
const fruits = ["apple", "banana", "orange"];

fruits[0]   // "apple" (first item)
fruits[1]   // "banana" (second item)
fruits[2]   // "orange" (third item)

// Arrays start counting at 0!
```

### Array Properties
```javascript
const items = [1, 2, 3];
items.length   // 3 (number of items)
```

### Adding to Arrays
```javascript
const fruits = ["apple"];

fruits.push("banana");      // Add to end: ["apple", "banana"]
fruits.unshift("orange");   // Add to start: ["orange", "apple", "banana"]
```

### Removing from Arrays
```javascript
const fruits = ["apple", "banana", "orange"];

fruits.pop();      // Remove from end: ["apple", "banana"]
fruits.shift();    // Remove from start: ["banana"]
```

---

## Loops

**Loops = Repeat code multiple times**

### For Loop

**Use when:** You know how many times to repeat
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Prints: 0, 1, 2, 3, 4
```

**Breaking it down:**
- `let i = 0` - Start with i = 0
- `i < 5` - Keep going while i is less than 5
- `i++` - Add 1 to i after each loop

### While Loop

**Use when:** You don't know how many times to repeat
```javascript
let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}
// Prints: 0, 1, 2, 3, 4
```

### Looping Through Arrays
```javascript
const fruits = ["apple", "banana", "orange"];

// Method 1: For loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Method 2: forEach (cleaner)
fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

---

## Conditionals

**Conditionals = Make decisions in code**

### If Statement
```javascript
if (statusCode === 200) {
    console.log("Success!");
}
```

### If-Else
```javascript
if (statusCode === 200) {
    console.log("Success!");
} else {
    console.log("Failed!");
}
```

### If-Else-If
```javascript
if (statusCode === 200) {
    console.log("Success!");
} else if (statusCode === 404) {
    console.log("Not Found!");
} else {
    console.log("Other error!");
}
```

### Ternary Operator (Shorthand)
```javascript
// Regular if-else:
let message;
if (passed) {
    message = "PASS";
} else {
    message = "FAIL";
}

// Ternary (same thing):
const message = passed ? "PASS" : "FAIL";
```

**Format:** `condition ? valueIfTrue : valueIfFalse`

---

## Common Methods

**Methods = Functions that belong to objects/arrays/strings**

### String Methods
```javascript
const text = "Hello World";

text.length                  // 11
text.toLowerCase()           // "hello world"
text.toUpperCase()           // "HELLO WORLD"
text.includes("World")       // true
text.replace("World", "JS")  // "Hello JS"
text.split(" ")              // ["Hello", "World"]
```

### Array Methods
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.length               // 5
numbers.push(6)              // Add to end: [1,2,3,4,5,6]
numbers.pop()                // Remove from end: [1,2,3,4,5]
numbers.includes(3)          // true
numbers.indexOf(3)           // 2 (position of first 3)
numbers.join(", ")           // "1, 2, 3, 4, 5"
```

### Console Methods
```javascript
console.log("message")       // Print to console
console.log("x:", x)         // Print with label
console.log(obj)             // Print entire object
```

---

## Special Characters

**Characters with special meanings**

| Character | Name | What It Does | Example |
|-----------|------|--------------|---------|
| `;` | Semicolon | Ends a statement | `const x = 5;` |
| `,` | Comma | Separates items | `function test(a, b, c)` |
| `.` | Dot | Accesses properties | `user.name` |
| `()` | Parentheses | Function call or grouping | `test()` or `(5 + 3) * 2` |
| `{}` | Curly braces | Object or function body | `{ name: "Cole" }` |
| `[]` | Square brackets | Array or property access | `[1, 2, 3]` or `arr[0]` |
| `"` | Double quotes | String | `"hello"` |
| `'` | Single quotes | String | `'hello'` |
| \` | Backticks | Template literal | \`Hello ${name}\` |
| `//` | Double slash | Comment (ignored) | `// This is a comment` |
| `/* */` | Slash-star | Multi-line comment | `/* Comment */` |
| `${}` | Dollar-curly | Insert variable in template | \`Hello ${name}\` |

---

## Template Literals

**Template Literals = Fancy strings with variables inside**

### Old Way (String Concatenation)
```javascript
const name = "Cole";
const age = 28;

const message = "My name is " + name + " and I'm " + age + " years old.";
```

### New Way (Template Literals)
```javascript
const name = "Cole";
const age = 28;

const message = `My name is ${name} and I'm ${age} years old.`;
```

**Rules:**
- Use backticks \` \` (not quotes)
- Put variables inside `${}`
- Can span multiple lines!
```javascript
const report = `
Test Report
===========
Name: ${testName}
Status: ${status}
`;
```

---

## Common Patterns in QA Automation

### Validate API Response
```javascript
function validateResponse(response) {
    if (response.statusCode === 200) {
        return "PASS";
    } else {
        return "FAIL";
    }
}
```

### Generate Test Data
```javascript
function generateUser(id) {
    return {
        id: id,
        username: `testuser${id}`,
        email: `testuser${id}@test.com`
    };
}
```

### Loop Through Test Cases
```javascript
const testCases = [1, 2, 3, 4, 5];

for (let i = 0; i < testCases.length; i++) {
    const user = generateUser(testCases[i]);
    console.log("Testing user:", user.username);
}
```

---

## Quick Troubleshooting

### Common Errors

| Error Message | What It Means | How to Fix |
|---------------|---------------|------------|
| `undefined` | Variable exists but has no value | Assign a value: `x = 5` |
| `ReferenceError: x is not defined` | Variable doesn't exist | Create the variable first |
| `TypeError: Cannot read property 'x' of undefined` | Trying to access property of undefined | Check if object exists first |
| `SyntaxError: Unexpected token` | Typo in code (missing bracket, etc.) | Check brackets, quotes, semicolons |

---

## Resources

**When you forget something:**
1. Check this reference guide first!
2. Console.log everything to see what's happening
3. Read error messages carefully
4. Ask Claude for clarification

**Remember:** Everyone forgets syntax - that's what reference guides are for! 📖

---

**Last Updated:** February 20, 2026  
**Your Progress:** Day 11 Complete - JavaScript Fundamentals