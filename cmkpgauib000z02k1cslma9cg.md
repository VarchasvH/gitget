---
title: "LeetCode 511: Game Play Analysis I"
seoTitle: "Game Play Analysis I Solution Guide"
seoDescription: "Find the first login date for each player using SQL window functions for efficient data retrieval"
datePublished: Thu Jan 22 2026 12:51:31 GMT+0000 (Coordinated Universal Time)
cuid: cmkpgauib000z02k1cslma9cg
slug: leetcode-511-game-play-analysis-i
tags: sql, leetcode, build-in-public, leetcode-solution, varchasvh, dequest

---

**Date:** January 22, 2026  
**Category:** SQL  
**Time Taken:** 5 minutes  
**Difficulty:** Easy

---

## Problem Statement

Write a solution to find the **first login date** for each player.

**Link:** [Game Play Analysis I](https://leetcode.com/problems/game-play-analysis-i/description/?envType=problem-list-v2&envId=wehxh2aj)

---

## My Approach

**Initial thought:**

We can use `GROUP BY` for each player and apply the `MIN` operator on the `event_date` column to find the earliest date for each player. This will identify the first login for every player, as `MIN` will select the earliest dates.

**Final solution:**

* A better approach is to use Window functions, specifically `ROW_NUMBER()`.
    
* Using `ROW_NUMBER()` with `PARTITION BY player_id` and `ORDER BY` event\_date ensures that each date for every player gets a unique rank, allowing us to easily find the first rank for the solution.
    

**Why this works:**  
**<mark>This solution is more efficient, easy to read, retains row-level details for future use, and requires scanning the table only once, unlike the </mark>** `GROUP BY` **<mark> solution, which scans the table twice.</mark>**

---

## Solution Code (MIN-GROUP BY) \[Faster on small datasets\]

```sql
SELECT player_id, MIN(event_date) AS first_login
FROM Activity
GROUP BY player_id
```

## Solution Code (Windows Function) \[BETTER\]

```sql
WITH CTE AS (
    SELECT *, ROW_NUMBER() OVER(PARTITION BY player_id ORDER BY event_date) AS rnk
FROM Activity)

SELECT player_id, event_date AS first_login
FROM CTE
WHERE rnk = 1
```

**Key Takeaway**: Use `ROW_NUMBER()` to pick exactly **one unique record** per group (deduplication), and use `DENSE_RANK()` to include **all tied records** for a specific position (ranking).

**Pattern**: Window Function

**Mistakes I Made**: Used `DENSE_RANK` instead of `ROW_NUMBER` initially.

**Series**: 90 Days of Data Engineering Progress: 15/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic