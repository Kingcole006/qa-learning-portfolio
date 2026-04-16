# Day 33 - SQL Aggregations
**Date:** April 17, 2026
**Week:** 8 | **Day:** 33

## What I Learned
SQL aggregation functions that summarize data across multiple
rows — essential for QA data validation and reporting.

## Aggregation Functions

### COUNT — Count rows
```sql
-- Count all orders
SELECT COUNT(*) AS total_orders FROM orders;

-- Count only completed orders
SELECT COUNT(*) AS completed_orders
FROM orders WHERE status = 'completed';
```
**Result:** 6 total, 4 completed

### SUM — Add up values
```sql
-- Total revenue from all orders
SELECT SUM(amount) AS total_revenue FROM orders;
```
**Result:** 129.94 total revenue

### AVG — Calculate average
```sql
-- Average order amount
SELECT AVG(amount) AS average_order FROM orders;
```
**Result:** ~21.66 average per order

### MAX and MIN — Highest and lowest values
```sql
-- Most and least expensive orders
SELECT MAX(amount) AS most_expensive,
       MIN(amount) AS least_expensive
FROM orders;
```
**Result:** 49.99 most, 7.99 least expensive

## GROUP BY — Group results by category

### Count orders per user
```sql
SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id;
```

### Count orders per username (with JOIN)
```sql
SELECT users.username, COUNT(orders.id) AS order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.username
ORDER BY order_count DESC;
```
**Result:**
standard_user  → 3 orders
premium_user   → 2 orders
locked_user    → 1 order
inactive_user  → 0 orders

### Orders and revenue by status
```sql
SELECT status, COUNT(*) AS count, SUM(amount) AS total
FROM orders
GROUP BY status;
```
**Result:**
completed → 4 orders, $63.96
pending   → 2 orders, $65.98

## Aggregation Cheat Sheet

| Function | Purpose | Example |
|----------|---------|---------|
| COUNT(*) | Count rows | COUNT(*) AS total |
| SUM(col) | Add values | SUM(amount) AS revenue |
| AVG(col) | Average | AVG(amount) AS avg |
| MAX(col) | Highest value | MAX(amount) AS max |
| MIN(col) | Lowest value | MIN(amount) AS min |
| GROUP BY | Group results | GROUP BY status |

## Real QA Use Cases

**Verify correct number of records created:**
```sql
SELECT COUNT(*) FROM orders WHERE user_id = 1;
-- Should return 3 after test creates 3 orders
```

**Verify revenue calculations:**
```sql
SELECT SUM(amount) FROM orders WHERE status = 'completed';
-- Compare with what the UI shows
```

**Find users with too many or too few orders:**
```sql
SELECT username, COUNT(orders.id) AS order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY username
HAVING COUNT(orders.id) = 0;
-- Find users with zero orders (potential bug)
```

## Key Takeaway
Aggregations let you validate data at scale. Instead of
checking one record at a time, you can verify counts,
totals, and averages across thousands of records in a
single query. This is how professional QA engineers
validate database integrity after test runs.