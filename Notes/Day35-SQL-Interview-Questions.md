# Day 35 — SQL Practice & Interview Questions

**Date:** April 17, 2026
**Week:** 8 of 10
**Focus:** Real SQL interview questions for QA Engineer roles

---

## The 5 Interview Questions I Can Answer

### Q1: "Find all users who have never placed an order."
```sql
SELECT u.username, u.email
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;
```
**Result:** no_order_user, dup_user_a, dup_user_b
**Why it works:** LEFT JOIN keeps all users, IS NULL filters to only those
with no matching order.

---

### Q2: "Find the user who spent the most money."
```sql
SELECT u.username, ROUND(SUM(o.amount), 2) AS total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.username
ORDER BY total_spent DESC
LIMIT 1;
```
**Result:** standard_user — $55.97
**Why it works:** SUM aggregates spend per user, ORDER BY DESC puts highest
first, LIMIT 1 returns only the top result.

---

### Q3: "Count how many orders are in each status."
```sql
SELECT status, COUNT(*) AS order_count
FROM orders
GROUP BY status
ORDER BY order_count DESC;
```
**Result:** completed: 5 | pending: 2
**Why it works:** GROUP BY buckets rows by status, COUNT(*) tallies each bucket.

---

### Q4: "Find all orders over $20 for active users only."
```sql
SELECT u.username, o.product, o.amount
FROM orders o
JOIN users u ON o.user_id = u.id
WHERE u.status = 'active'
AND o.amount > 20
ORDER BY o.amount DESC;
```
**Result:** standard_user — Backpack — $29.99
**Why it works:** JOIN links tables, WHERE filters by both user status
and order amount simultaneously.

---

### Q5: "How would you verify test data was inserted correctly?"
```sql
SELECT
  (SELECT COUNT(*) FROM users) AS total_users,
  (SELECT COUNT(*) FROM users WHERE status = 'active') AS active_users,
  (SELECT COUNT(*) FROM orders) AS total_orders,
  (SELECT COUNT(*) FROM orders WHERE status = 'completed') AS completed_orders;
```
**Result:** 6 users | 5 active | 7 orders | 5 completed
**Why it works:** Subqueries in SELECT return multiple counts as one
snapshot row — useful for post-test database state verification.

---

## Week 8 SQL Skills Summary

| Skill | Learned |
|---|---|
| SELECT, WHERE, ORDER BY | Day 31 |
| INNER JOIN, LEFT JOIN, IS NULL | Day 32 |
| COUNT, SUM, AVG, GROUP BY, HAVING | Day 33 |
| Duplicate detection, orphaned records, enum validation | Day 34 |
| Interview-ready query patterns | Day 35 |

---

## How to Answer SQL Questions in an Interview

1. **Restate the problem** — "So I need to find users with no matching orders..."
2. **Think out loud** — "I'll use a LEFT JOIN because I want all users..."
3. **Write the query** — Start with SELECT, then FROM, JOIN, WHERE
4. **Explain the result** — "This returns X rows because..."
5. **Mention edge cases** — "One thing to watch for is NULL handling..."