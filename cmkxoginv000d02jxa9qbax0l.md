---
title: "LeetCode 596: Classes with at Least 5 Students"
seoTitle: "SQL Query for Classes with 5+ Students"
seoDescription: "Find out how to list classes with a minimum of five students using SQL queries and the HAVING clause"
datePublished: Wed Jan 28 2026 07:02:02 GMT+0000 (Coordinated Universal Time)
cuid: cmkxoginv000d02jxa9qbax0l
slug: leetcode-596-classes-with-at-least-5-students
tags: sql, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** January 28, 2026  
**Category:** SQL  
**Time Taken:** minute  
**Difficulty:** Easy

---

## Problem Statement

Write a solution to find all the classes that have **at least five students**.

**Link:** [Classes With at Least 5 Students](https://leetcode.com/problems/classes-with-at-least-5-students/description/?envType=problem-list-v2&envId=wehxh2aj)

---

## My Approach

Since we need to count the students in each class, we will use `GROUP BY` on the class. To filter out classes that have at least 5 students, we will include that condition in the `HAVING` clause.

---

## Solution Code

```sql
SELECT class
FROM Courses
GROUP BY class
HAVING COUNT(*) >= 5
```

**Key Takeaway:** Nothing, very easy problem.

**Pattern**: Aggregation

**Mistakes I Made:** Again I forgot that I can use aggregate functions in the HAVING clause and instead I used a Subquery.

**Series**: 90 Days of Data Engineering Progress: 24/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic