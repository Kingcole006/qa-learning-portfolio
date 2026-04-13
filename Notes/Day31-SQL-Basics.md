# Day 31 - SQL Basics for QA Engineers
**Date:** April 14, 2026
**Week:** 8 | **Day:** 31

## What I Learned
Core SQL queries that QA engineers use to validate test data
directly in the database.

## Tool Used
sqliteonline.com — free browser-based SQL editor

## Why SQL Matters for QA
When you test an application, the UI might say "success" but
the data in the database could be wrong. SQL lets you look
directly into the database to verify data is correct at the
source — not just what the UI shows.

## Table Created
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    email TEXT,
    status TEXT,
    created_date TEXT
);
```

## Queries Learned

### SELECT — Get data
```sql
-- Get all columns and all rows
SELECT * FROM users;

-- Get specific columns only
SELECT username, status FROM users;
```

### WHERE — Filter rows
```sql
-- Exact match
SELECT * FROM users WHERE status = 'active';

-- Not equal
SELECT * FROM users WHERE status != 'active';

-- Greater than
SELECT * FROM users WHERE created_date > '2026-01-02';

-- Multiple conditions (AND)
SELECT * FROM users WHERE status = 'active' AND id > 2;

-- Either condition (OR)
SELECT * FROM users 
WHERE status = 'locked' OR status = 'inactive';
```

### ORDER BY — Sort results
```sql
-- Sort A-Z (ascending)
SELECT * FROM users ORDER BY username ASC;

-- Sort Z-A (descending)
SELECT * FROM users ORDER BY username DESC;
```

### Combined QA Query
```sql
-- Real QA scenario: verify active users sorted by ID
SELECT id, username, status
FROM users
WHERE status = 'active'
ORDER BY id ASC;
```

## WHERE Operators Cheat Sheet

| Operator | Meaning | Example |
|----------|---------|---------|
| = | Equal to | status = 'active' |
| != | Not equal | status != 'active' |
| > | Greater than | id > 2 |
| < | Less than | id < 4 |
| >= | Greater or equal | id >= 2 |
| <= | Less or equal | id <= 4 |
| AND | Both must be true | status = 'active' AND id > 2 |
| OR | Either can be true | status = 'locked' OR status = 'inactive' |

## Real World QA Use Cases

**Verify user was created correctly:**
```sql
SELECT * FROM users WHERE username = 'new_user';
```

**Verify locked users can't login:**
```sql
SELECT * FROM users WHERE status = 'locked';
```

**Verify data is sorted correctly:**
```sql
SELECT * FROM users ORDER BY created_date DESC;
```

## Key Takeaway
SQL is the language of databases. As a QA engineer, knowing
SQL means you can verify data integrity beyond what the UI
shows. This comes up in almost every QA interview.