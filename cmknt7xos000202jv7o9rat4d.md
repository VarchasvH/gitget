---
title: "LeetCode 197: Rising Temperature"
seoTitle: "Rising Temperature: LeetCode SQL Solution Guide"
seoDescription: "Learn to solve LeetCode's Rising Temperature with SQL using self-join or LAG/LEAD functions for optimized performance"
datePublished: Wed Jan 21 2026 09:17:37 GMT+0000 (Coordinated Universal Time)
cuid: cmknt7xos000202jv7o9rat4d
slug: leetcode-197-rising-temperature
tags: sql, leetcode, dataengineering, build-in-public, varchasvh, dequest

---

**Date:** January 21, 2026  
**Category:** SQL  
**Time Taken:** 15 minutes  
**Difficulty:** Easy

---

## Problem Statement

Write a solution to find all dates' `id` with higher temperatures compared to its previous dates (yesterday).

**Link:** [Rising Temperature](https://leetcode.com/problems/rising-temperature/?envType=problem-list-v2&envId=wehxh2aj)

---

## My Approach

**Initial thought:**

* We could use a **self-join** to get the temperature of the previous row. This approach is more intuitive and works well on small datasets, but it struggles with larger datasets due to the potential for **O(N²) complexity** in the worst case. **Self-joins are also expensive**.
    
* We could also use `LAG/LEAD` functions, they are more modern way of doing this but can be overkill for smaller datasets. They are more readable.
    

**Final solution:**

* We are choosing the `LAG/LEAD` approach because it is **more optimized and scalable.**
    
* We will use two LAG() functions to get both the previous date and the previous temperature. This way, we can compare the temperature for only those rows that have a 1-day difference between them.
    

---

## Solution Code (Self-join)

```sql
SELECT w2.id AS id
FROM Weather AS w1
JOIN Weather AS w2
ON DATEDIFF(w2.recordDate, w1.recordDate) = 1 AND w1.temperature < w2.temperature
```

## Solution Code (LAG/LEAD)

```sql
WITH CTE AS (   
    SELECT 
        id, 
        recordDate, 
        temperature,
        LAG(recordDate) OVER(ORDER BY recordDate) AS prevDate,
        LAG(temperature) OVER(ORDER BY recordDate) AS prevTemp
    FROM Weather)

SELECT id
FROM CTE
WHERE DATEDIFF(recordDate, prevDate) = 1 AND temperature > prevTemp
```

**Key Takeaway**: How LAG/LEAD Functions works actually.

**Pattern**: Self-join | Window Functions

**Mistakes I Made:** Never worked on LAG/LEAD functions, used to dodge them whenever possible.

**Series**: 90 Days of Data Engineering Progress: 13/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic