---
title: "LeetCode 177: Nth Highest Salary"
seoTitle: "Find the Nth Highest Salary"
seoDescription: "Learn how to find the nth highest distinct salary using SQL window functions and subqueries on LeetCode 177"
datePublished: Mon Feb 02 2026 06:16:10 GMT+0000 (Coordinated Universal Time)
cuid: cml4s0sno000c02la2m33e8i5
slug: leetcode-177-nth-highest-salary
tags: mysql, sql, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** February 02, 2026  
**Category:** SQL  
**Time Taken:** 10 minute  
**Difficulty:** Medium

---

# Problem Statement

Write a solution to find the `n<sup>th</sup>` highest **distinct** salary from the `Employee` table. If there are less than `n` distinct salaries, return `null`.

**Link:** [Nth Highest Salary](https://leetcode.com/problems/nth-highest-salary/description/?envType=problem-list-v2&envId=weh5ncag)

---

## Approach 1 (Window Functions) \[Best Solution\]

* The first solution that came to mind is using window functions. We can use `DENSE_RANK()` to assign the same rank to identical salaries.
    
* Then, we use this as a subquery within a larger query to get the `DISTINCT` highest salary, as we only need the Nth highest salary, not how many people have that salary.
    
* Since we use it as a subquery, the outer query will automatically return NULL if there is no Nth highest salary.
    

### Solution Code:

```sql
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
    SELECT DISTINCT salary AS getNthHighestSalary
    FROM (
        SELECT 
            id, 
            salary, 
            DENSE_RANK() OVER(ORDER BY salary DESC) AS rnk
        FROM Employee) AS ranks
    WHERE rnk = N
  );
END
```

---

## Approach 2 (Window Functions) \[Faster and indexable\]

* We can also use `OFFSET` and `LIMIT` together to find the Nth highest salary, but this method is more technical and not as straightforward.
    
* We will use `SET` to adjust N to N-1 because `OFFSET` starts at 0. So, the 2nd highest salary would be at Offset 1.
    

### Solution Code:

```sql
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
SET N = N - 1;
RETURN (
    SELECT DISTINCT salary AS getNthHighestSalary
    FROM Employee
    ORDER BY salary DESC LIMIT 1 OFFSET N
  );
END
```

**Pattern**: Window Functions

**Mistakes I Made:** I did not use DISTINCT originally and my answer gave multiple rows where it expected only 1.

**Series**: 90 Days of Data Engineering Progress: 28/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic