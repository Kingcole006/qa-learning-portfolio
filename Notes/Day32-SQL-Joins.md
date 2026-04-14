# Day 32 - SQL Joins
**Date:** April 15, 2026
**Week:** 8 | **Day:** 32

## What I Learned
SQL Joins — combining data from multiple tables to validate
relationships between data in a real QA context.

## Tables Created
```sql
-- Users table
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    status TEXT
);

-- Orders table
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    product TEXT,
    amount REAL
);
```

## Joins Learned

### INNER JOIN
Returns only rows that have matches in BOTH tables.
```sql
SELECT users.username, orders.product, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```
**Result:** Only users WITH orders are returned.
Users with no orders are excluded.

### LEFT JOIN
Returns ALL rows from the left table, plus matching rows
from the right table. Non-matching rows show NULL.
```sql
SELECT users.username, orders.product, orders.amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```
**Result:** All users returned. Users with no orders
show NULL for product and amount columns.

## Key Difference

| Join Type | Users with orders | Users without orders |
|-----------|------------------|---------------------|
| INNER JOIN | ✅ Included | ❌ Excluded |
| LEFT JOIN | ✅ Included | ✅ Included (NULL) |

## Real QA Scenario — Find Missing Data
```sql
-- Find users who have NO orders
-- Useful for detecting bugs in registration/checkout flow
SELECT users.username, users.status
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE orders.user_id IS NULL;
```
**Why this matters:** If every registered user should have
a welcome order or default data, this query finds anyone
who slipped through without it — potential bug!

## How Joins Work
users table          orders table

id | username        id | user_id | product
1  | standard_user   1  | 1       | Backpack
2  | premium_user    2  | 1       | Bike Light
3  | locked_user     3  | 2       | Bolt T-Shirt
4  | no_orders_user  4  | 3       | Fleece Jacket
INNER JOIN connects users.id = orders.user_id
→ Only users 1, 2, 3 appear (they have matching orders)
→ User 4 (no_orders_user) is excluded

## Interview Answer
**"Explain the difference between INNER and LEFT JOIN"**

"INNER JOIN returns only rows where there's a match in
both tables — like finding users who placed orders.
LEFT JOIN returns all rows from the left table regardless
of whether there's a match — useful for finding users
who HAVEN'T placed orders, which could indicate a bug."

## Key Takeaway
Joins are how you validate data relationships in QA.
When you test a checkout flow, you don't just verify
the UI says success — you JOIN the users and orders
tables to confirm the data was saved correctly and
the relationship between them is intact.