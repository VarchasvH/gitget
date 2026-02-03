---
title: "LeetCode 178: Rank Scores"
seoTitle: "Ranking Scores: SQL Challenge"
seoDescription: "Learn to rank scores with SQL using `DENSE_RANK()` to handle ties. Perfect for data engineering practice on LeetCode"
datePublished: Tue Feb 03 2026 06:28:55 GMT+0000 (Coordinated Universal Time)
cuid: cml67x1tj000l02k0d6q30xgt
slug: leetcode-178-rank-scores
tags: sql, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** February 03, 2026  
**Category:** SQL  
**Time Taken:** 2 minutes  
**Difficulty:** Medium

---

# Problem Statement

Write a solution to find the rank of the scores. The ranking should be calculated according to the following rules:

* The scores should be ranked from the highest to the lowest.
    
* If there is a tie between two scores, both should have the same ranking.
    
* After a tie, the next ranking number should be the next consecutive integer value. In other words, there should be no holes between ranks.
    

Return the result table ordered by `score` in descending order.

**Link:** [Rank Scores](https://leetcode.com/problems/rank-scores/description/?envType=problem-list-v2&envId=weh5ncag)

---

# My Approach

* This is a classic Window Function problem. Since we need to assign the same ranking to tied scores and ensure the next ranking is the consecutive integer value without skipping, we will use `DENSE_RANK()`.
    
* We will order by score in descending order to give the highest scores the top ranks.
    

## Solution Code:

```sql
SELECT score, DENSE_RANK() OVER(ORDER BY score DESC) AS `rank`
FROM Scores
```

**Pattern**: Window Functions

**Mistakes I Made:** Very Simple, `DENSE_RANK()` solution.

**Series**: 90 Days of Data Engineering Progress: 30/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublicLee