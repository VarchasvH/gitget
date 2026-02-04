---
title: "LeetCode 184: Department Highest Salary"
seoTitle: "SQL Challenge: Find Top Department Salary"
seoDescription: "Find the highest salary earners in each department using SQL with window functions or subqueries"
datePublished: Wed Feb 04 2026 08:36:54 GMT+0000 (Coordinated Universal Time)
cuid: cml7rxhz5001g02la73olf6zp
slug: leetcode-184-department-highest-salary
tags: mysql, sql, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** February 04, 2026  
**Category:** SQL  
**Time Taken:** 2 minutes  
**Difficulty:** Medium

---

# Problem Statement

Write a solution to find employees who have the highest salary in each of the departments.

Return the result table in **any order**.

**Link:** [Department Highest Salary](https://leetcode.com/problems/department-highest-salary/description/?envType=problem-list-v2&envId=weh5ncag)

---

## Approach 1 (Window Functions):

* The first solution that comes to mind is to use Window Functions. Since multiple people can be the top earners in their department, we will use `DENSE_RANK()`.
    
* We will apply `DENSE_RANK()` on `departmentId` and order them by salary in descending order. Then, we will place this in a CTE.
    
* From that CTE, we will select only the necessary columns and apply a condition where `rnk = 1`, which represents the highest earners.
    

### Solution Code:

```sql
WITH CTE AS (
    SELECT 
    d.name AS Department, 
    e.name AS Employee, 
    e.salary AS Salary, 
    DENSE_RANK() OVER(PARTITION BY e.departmentId ORDER BY salary DESC) AS rnk
    FROM Employee AS e
    JOIN Department AS d
    ON e.departmentId = d.id)

SELECT Department, Employee, Salary
FROM CTE
WHERE rnk = 1
```

---

## Approach 2 (MAX):

* Another approach is to use subqueries. We can find the `MAX(salary)` for each department in the inner query.
    
* In the outer query, we will join the tables because we need the department name from the department table. Then, we will apply a condition `WHERE (e.departmentId, e.salary) IN Subquery`.
    
* This will give us the names of employees whose salary is equal to the max in their department.
    

### Solution Code:

```sql
SELECT 
    e.name AS Employee,
    d.name AS Department,
    e.salary AS Salary
FROM Employee AS e
JOIN Department AS d
ON e.departmentId = d.id
WHERE (e.departmentId, e.salary) IN (
    SELECT departmentId, MAX(salary)
    FROM Employee
    GROUP BY departmentId
)
```

---

## Performance Note:

* <mark>The MAX solution is not scalable and is not recommended. It performs poorly because it may require the database to scan the table multiple times.</mark>
    
* <mark>The window function is the best option because the database only needs to go through it once, making it easy to scale and modify.</mark>
    

**Pattern**: Window Functions

**Mistakes I Made:** None, Easy problem.

**Series**: 90 Days of Data Engineering Progress: 33/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic