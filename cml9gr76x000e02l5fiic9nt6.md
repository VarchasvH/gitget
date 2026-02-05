---
title: "LeetCode 185: Department Top Three Salaries"
seoTitle: "Top Three Salaries in Each Department"
seoDescription: "Find high earners in each department by using window functions to identify top three unique salaries"
datePublished: Thu Feb 05 2026 12:59:37 GMT+0000 (Coordinated Universal Time)
cuid: cml9gr76x000e02l5fiic9nt6
slug: leetcode-185-department-top-three-salaries
tags: mysql, sql, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** February 05, 2026  
**Category:** SQL  
**Time Taken:** 5 minutes  
**Difficulty:** Hard

---

## Problem Statement

A company's executives are interested in seeing who earns the most money in each of the company's departments. A **high earner** in a department is an employee who has a salary in the **top three unique** salaries for that department.

Write a solution to find the employees who are **high earners** in each of the departments.

**Link:** [Department Top Three Salaries](https://leetcode.com/problems/department-top-three-salaries/description/?envType=problem-list-v2&envId=weh5ncag)

---

## My Approach

* This is a classic problem, and we will solve it using window functions, which are more modern and scalable.
    
* We will use `DENSE_RANK()` on each department and order by salary. This will give us the ranks for every department.
    
* We will store this in a CTE and use it to get only those with a rank of 3 or less.
    

### Solution Code:

```sql
WITH ranks AS (
    SELECT 
        d.name AS Department, 
        e.name AS Employee, 
        e.salary AS Salary, 
        DENSE_RANK() OVER(PARTITION BY e.departmentId ORDER BY e.salary DESC) AS rnk
    FROM Employee AS e
    JOIN Department AS d
    ON e.departmentId = d.id)

SELECT Department, Employee, Salary
FROM ranks
WHERE rnk <= 3
```

**Pattern**: Window Functions

**Mistakes I Made:** None, Easy problem.

**Series**: 90 Days of Data Engineering Progress: 34/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic