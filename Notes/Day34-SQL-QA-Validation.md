# Day 34 — SQL for QA Data Validation

**Date:** April 16, 2026
**Week:** 8 of 10
**Focus:** Writing SQL queries to validate database state during testing

---

## What I Learned

SQL isn't just for developers — QA engineers use it to validate that the
database reflects the correct state after test actions. These queries catch
bugs that UI testing alone can miss.

---

## The 4 Core QA Validation Patterns

### 1. Duplicate Detection (Data Integrity)
Catches duplicate records that should be unique — like email addresses.

```sql
SELECT email, COUNT(*) AS count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```
**Found:** `duplicate@test.com` appeared 2 times — data integrity bug

---

### 2. Orphaned Records (Referential Integrity)
Catches records in one table that reference a non-existent record in another.

```sql
SELECT o.id, o.user_id, o.product, o.amount
FROM orders o
LEFT JOIN users u ON o.user_id = u.id
WHERE u.id IS NULL;
```
**Found:** Order #7 (Ghost Order) referenced user_id 999 which doesn't exist

---

### 3. Invalid Enum Values (Data Validation)
Catches values that fall outside the allowed set — like unexpected status values.

```sql
SELECT id, username, status
FROM users
WHERE status NOT IN ('active', 'locked', 'inactive');
```
**Found:** No rows — all statuses valid ✅

---

### 4. Business Rule Validation
Catches logic violations — like a locked user placing an order.

```sql
SELECT u.username, COUNT(o.id) AS order_count, ROUND(SUM(o.amount), 2) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.username
ORDER BY total_spent DESC;
```
**Found:** `locked_user` had 1 order ($49.99) — locked users should not be
able to place orders — **potential application defect**

---

## Key Concepts

| Pattern | SQL Used | What It Catches |
|---|---|---|
| Duplicate detection | GROUP BY + HAVING | Non-unique data violations |
| Orphaned records | LEFT JOIN + IS NULL | Broken foreign key relationships |
| Invalid values | WHERE NOT IN | Enum/constraint violations |
| Business rules | JOIN + GROUP BY + aggregation | Logic defects |

---

## Real-World Application

In a QA role, after running a test that creates a user or places an order,
you would run these queries against the test database to confirm:
- The correct records were created
- No duplicate data was introduced
- All relationships are intact
- Business rules were enforced at the database level