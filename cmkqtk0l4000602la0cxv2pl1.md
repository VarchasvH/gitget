---
title: "LeetCode 577: Employee Bonus"
seoTitle: "Employee Bonus Query Solution"
seoDescription: "Solved LeetCode 577 Employee Bonus using SQL left join to list employee names without bonuses"
datePublished: Fri Jan 23 2026 11:50:20 GMT+0000 (Coordinated Universal Time)
cuid: cmkqtk0l4000602la0cxv2pl1
slug: leetcode-577-employee-bonus
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769447952198/554b04f8-cc5c-4203-ba93-f2b32c0d1484.png
tags: mysql, sql, data-engineering, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** January 23, 2026  
**Category:** SQL  
**Time Taken:** 2 minutes  
**Difficulty:** Easy

---

## Problem Statement

Write a solution to report the name and bonus amount of each employee who satisfies either of the following:

* The employee has a bonus **less than** `1000`.
    
* The employee did not get any bonus.
    

**Link:** [Employee Bonus](https://leetcode.com/problems/employee-bonus/description/?envType=problem-list-v2&envId=wehxh2aj)

---

## My Approach

**Initial thought:**  
Since we need the names of employees with no bonuses, we will perform a left join. This will result in null values for employees who have no bonuses.

**Final solution:**

We will join the Employee and Bonus tables using a left join, focusing on the employee, so we can get the employee names that have no data associated with them, and then we can filter them out using `WHERE bonus IS NULL`.

---

## Solution Code

```sql
SELECT e.name, b.bonus
FROM Employee AS e
LEFT JOIN Bonus AS b
ON e.empId = b.empId
WHERE b.bonus IS NULL OR b.bonus < 1000
```

**Key Takeaway**: Nothing that I did not know already.

**Pattern**: Joins

**Mistakes I Made:** None, solved it first try

**Series**: 90 Days of Data Engineering Progress: 17/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic