---
title: "LeetCode 180: Consecutive Numbers"
seoTitle: "SQL Challenge: Find Consecutive Numbers"
seoDescription: "Discover three SQL approaches to find numbers appearing consecutively, including self-join, LAG/LEAD, and Gaps & Islands methods"
datePublished: Tue Feb 03 2026 09:55:59 GMT+0000 (Coordinated Universal Time)
cuid: cml6fbbtz000002l1f6qn571l
slug: leetcode-180-consecutive-numbers
tags: mysql, sql, leetcode, dataengineering, leetcode-solution, varchasvh, dequest

---

**Date:** February 03, 2026  
**Category:** SQL  
**Time Taken:** 10 minutes  
**Difficulty:** Medium

---

# Problem Statement

Find all numbers that appear at least three times consecutively.

**Link:** [Consecutive Numbers](https://leetcode.com/problems/consecutive-numbers/description/?envType=problem-list-v2&envId=weh5ncag)

---

# Approach 1 (Self-Join):

* The most straightforward solution is to perform a self-join for each consecutive number needed. In this example, we need 3, so we will perform a total of 2 joins.
    
* <mark>This solution is not recommended because it is not scalable and will be very costly.</mark>
    

```sql
SELECT DISTINCT l1.num AS ConsecutiveNums
FROM Logs AS l1
JOIN Logs AS l2 ON l1.id = l2.id + 1 AND l1.num = l2.num
JOIN Logs AS l3 ON l2.id = l3.id + 1 AND l2.num = l3.num
```

---

# Approach 2 (LAG/LEAD):

* The more modern way to solve this problem is to use LAG/LEAD to check the next two values. If they are the same, then it is a consecutive sequence; if not, it isn't.
    

* <mark>This is better but not the best possible solution.</mark>
    

## Solution Code:

```sql
WITH CTE AS (
    SELECT 
        num,
        LEAD(num, 1) OVER() AS next1,
        LEAD(num, 2) OVER() AS next2
    FROM Logs
)
SELECT DISTINCT num AS ConsecutiveNums
FROM CTE
WHERE num = next1 AND num = next2
```

---

# Approach 3 (Gaps & Islands):

* The BEST solution is to use the Gaps and Islands Algorithm, making the solution scalable for up to N consecutive numbers.
    
* This works by assigning each row a row number and subtracting it from another row number partitioned by num, giving a unique row number to each row under the same num.
    
* By subtracting and counting the difference, the correct consecutive numbers will have a difference of 0, indicating they appear more than 3 times.
    

```sql
SELECT DISTINCT num AS ConsecutiveNums
FROM (
    SELECT num, 
           (
                ROW_NUMBER() OVER(ORDER BY id) - 
                ROW_NUMBER() OVER(PARTITION BY num ORDER BY id)
            ) AS difference
    FROM Logs
) t
GROUP BY num, difference
HAVING COUNT(*) >= 3; -- We are counting difference but for speed we use *
```

**Pattern**: Window Functions

**Mistakes I Made:** Used `ROW_NUMBER()` and not `LAG/LEAD` for my second solution.

**Series**: 90 Days of Data Engineering Progress: 32/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic