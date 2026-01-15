---
title: "LeetCode 181: Employees Earning More Than Their Managers"
seoTitle: "Employees Earning More Than Managers"
seoDescription: "Learn how to identify employees earning more than their managers using SQL self-joins in this LeetCode problem walkthrough"
datePublished: Thu Jan 15 2026 09:29:41 GMT+0000 (Coordinated Universal Time)
cuid: cmkf90cad000j02jrh6by3op0
slug: leetcode-181-employees-earning-more-than-their-managers
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768484021504/f08da248-bf46-44dd-9fb6-a0e0ab053e21.png
tags: sql, leetcode, build-in-public, leetcode-solution, varchasvh, dequest

---

**Date:** January 15, 2026  
**Category:** SQL  
**Time Taken:** 2 minutes  
**Difficulty:** Easy

---

## Problem Statement

Write a solution to find the employees who earn more than their managers. Return the result table in **any order**.

**Link:** [Employees Earning More Than Their Managers](https://leetcode.com/problems/employees-earning-more-than-their-managers/description/?envType=problem-list-v2&envId=wehxh2aj)

---

## My Approach

**Initial thought:**  
Since we have a column for managerId and the managers are also in the same table, we can perform a self-join using `managerId = id`. This allows us to get both the employee's salary and the manager's salary on the same row for easy comparison.

**Final solution:**  
I'm choosing a self-join as the solution because it's a straightforward approach that tests your understanding of how self-joins work.

**Why this works:**  
After the self-join, both the manager's and the employee's salaries are on the same row, so you can simply use a `WHERE` clause to compare them.

---

## Solution Code

```sql
SELECT e.name AS Employee
FROM Employee AS e
JOIN Employee AS m
ON m.id = e.managerId
WHERE e.salary > m.salary
```

**Key Takeaway:** Self-joins and their usefulness.

**Pattern**: Self-join

**Mistakes I Made:** None. It was pretty straight-forward.

**Series**: 90 Days of Data Engineering Progress: 5/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic