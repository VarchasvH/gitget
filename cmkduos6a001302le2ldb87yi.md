---
title: "LeetCode 176: Second Highest Salary"
seoTitle: "Second Highest Salary Solution Guide"
seoDescription: "Learn how to solve LeetCode problem 176, finding the second highest distinct salary using SQL window functions"
datePublished: Wed Jan 14 2026 10:01:01 GMT+0000 (Coordinated Universal Time)
cuid: cmkduos6a001302le2ldb87yi
slug: leetcode-176-second-highest-salary
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768384756419/2f21a17a-51f6-4992-b183-6a242f4e611d.png
tags: sql, leetcode, build-in-public, varchasvh, dequest

---

**Date:** January 14, 2026  
**Category:** SQL  
**Time Taken:** 10 minutes  
**Difficulty:** Medium

---

## Problem Statement

Write a solution to find the second highest **distinct** salary from the `Employee` table. If there is no second-highest salary, return `null`.

**Link:** [Second Highest Salary](https://leetcode.com/problems/second-highest-salary/description/?envType=problem-list-v2&envId=wehxh2aj)

---

## My Approach

**Initial thought:**

* I thought of using OFFSET and LIMIT in ORDER BY to get the second-highest salary, but in case of no second-highest salary, this solution will not return null.
    
* Another brute force-ish solution would be to use CTE/subquery to find the second max salary less than the first max salary.
    

**Final solution:**  
<mark>The best solution would be to use </mark> **<mark>DENSE_RANK()</mark>** <mark> and give every different salary a different rank, and we can just get the salary whose rank = 2. But it </mark> **<mark>would still not return null</mark>**<mark>; to accomplish that, we will </mark> **<mark>add a SELECT statement wrapper</mark>** <mark> at the end.</mark>

**Why this works:**  
This works because this is a **scalable solution**; we just need to change the value of rank, and we can get the Nth highest salary.

---

## Solution Code (Subquery)

```sql
SELECT MAX(salary) AS SecondHighestSalary
FROM Employee
WHERE salary < (SELECT MAX(salary) AS s1 FROM Employee)
```

## Solution Code (Dense\_rank)

```sql
SELECT (
    SELECT DISTINCT salary
    FROM (
        SELECT salary , DENSE_RANK() OVER(ORDER BY salary DESC) AS rnk
        FROM Employee
        ) AS ranked
    WHERE rnk = 2
    ) AS secondHighestSalary
```

**Key Takeaway:** Whenever we need to get the Nth row from data, we should prefer window functions first.

**Pattern**: Window Functions

**Mistakes I Made:** I considered solving this without window functions, but I should have realized it would require a window function solution. I also had trouble remembering the syntax of window functions.

**Series**: 90 Days of Data Engineering Progress: 3/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic