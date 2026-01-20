---
title: "LeetCode 196: Delete Duplicate Emails"
seoTitle: "Remove Duplicate Emails: LeetCode 196"
seoDescription: "Use `ROW_NUMBER()` and self-join methods to delete duplicate emails, keeping only the entry with the smallest ID"
datePublished: Tue Jan 20 2026 10:26:34 GMT+0000 (Coordinated Universal Time)
cuid: cmkmg8qo6000502jrgm3c9hbi
slug: leetcode-196-delete-duplicate-emails
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768920097955/e197f445-bfdd-4540-91c0-a8cc994eb769.png
tags: sql, leetcode, build-in-public, leetcode-solution, varchasvh, dequest

---

**Date:** January 20, 2026  
**Category:** SQL  
**Time Taken:** 20 minutes  
**Difficulty:** Easy

---

## Problem Statement

Write a solution to **delete** all duplicate emails, keeping only one unique email with the smallest `id`.

For SQL users, please note that you are supposed to write a `DELETE` statement and not a `SELECT` one.

**Link:** [Delete Duplicate Emails](https://leetcode.com/problems/delete-duplicate-emails/description/?envType=problem-list-v2&envId=wehxh2aj)

---

## My Approach

**Initial thought:**

* I initially tried using `DENSE_RANK()` to assign a `rank` to each row, allowing me to delete any `id` where `rank > 1`.
    
* This approach was incorrect because `DENSE_RANK()` assigns the same rank to identical emails.
    

**Solution 1 (ROW\_NUMBER):**

* Create a CTE using `ROW_NUMBER()` and `PARTITION BY email` to assign a unique rank to each row.
    
* Then, use a `SELECT` subquery within the `DELETE` statement to choose the ids where `rank > 1`.
    

**Why this works:** This method is effective because, unlike `DENSE_RANK()`, `ROW_NUMBER()` assigns a unique rank to identical emails, whereas `DENSE_RANK()` does the opposite in this case.

**Solution 2 (Self-join):**

Do a self-join on the table based on the rows having the same email but not the same id.

**Why this works:** This method works because we don’t need to perform any complex transformations or use window functions.

<mark>The self-join solution is good when we need an easier and less complex method, but </mark> `ROW_NUMBER()` <mark> is the more modern method and it avoids any cartesian product problems.</mark>

---

## Solution Code (ROW\_NUMBER)

```sql
WITH CTE AS(
    SELECT id,
    ROW_NUMBER() OVER (PARTITION BY email ORDER BY id ASC) AS rnk
    FROM Person
)

DELETE FROM Person
WHERE id in (SELECT id FROM CTE WHERE rnk > 1)
```

## Solution Code (Self-join)

```sql
DELETE p1
FROM Person AS p1
JOIN Person AS p2
ON p1.email = p2.email AND p1.id > p2.id
```

**Key Takeaway**: `ROW_NUMBER()` should be used for deduplication.

**Pattern**: Self-join, Window functions

**Mistakes I Made:**

* Did not know how `DELETE` clause works.
    
* Used `DENSE_RANK()` instead of `ROW_NUMBER()` for deduplication.
    

**Series**: 90 Days of Data Engineering Progress: 11/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic