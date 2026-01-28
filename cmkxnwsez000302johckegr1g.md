---
title: "LeetCode 595: Big Countries"
seoTitle: "Find Big Countries: LeetCode 595"
seoDescription: "Find SQL solutions for identifying big countries with populations or areas above a certain threshold. Part of the 90 Days of Data Engineering series"
datePublished: Wed Jan 28 2026 06:46:41 GMT+0000 (Coordinated Universal Time)
cuid: cmkxnwsez000302johckegr1g
slug: leetcode-595-big-countries
tags: sql, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** January 28, 2026  
**Category:** SQL  
**Time Taken:** 1 minute  
**Difficulty:** Easy

---

## Problem Statement

A country is **big** if:

* it has an area of at least three million (i.e., `3000000 km²`), or
    
* it has a population of at least twenty-five million (i.e., `25000000`).
    

Write a solution to find the name, population, and area of the **big countries**.

**Link:** [Big Countries](https://leetcode.com/problems/big-countries/?envType=problem-list-v2&envId=wehxh2aj)

---

## My Approach

It is a very basic problem that only needs `WHERE` clause with a condition. Just do `>=` both numbers and you are done.

---

## Solution Code

```sql
SELECT name, population, `area`
FROM World
WHERE `area` >= 3000000 OR population >= 25000000
```

**Key Takeaway:** Nothing, very easy problem.

**Pattern**: Filter

**Mistakes I Made:** None

**Series**: 90 Days of Data Engineering Progress: 23/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic