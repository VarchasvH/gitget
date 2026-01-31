---
title: "LeetCode 620: Not Boring Movies"
seoTitle: "Exciting SQL Challenge: Not Boring Movies"
seoDescription: "Find movies with odd-numbered IDs and non-boring descriptions, sorted by rating from highest to lowest"
datePublished: Sat Jan 31 2026 16:16:04 GMT+0000 (Coordinated Universal Time)
cuid: cml2ikkju000102lbg0ac9ojc
slug: leetcode-620-not-boring-movies
tags: mysql, sql, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** January 29, 2026  
**Category:** SQL  
**Time Taken:** 10 minute  
**Difficulty:** Easy

---

# Problem Statement

Write a solution to report the movies with an odd-numbered ID and a description that is not `"boring"`.

Return the result table ordered by `rating` **in descending order**.

**Link:** [Not Boring Movies](https://leetcode.com/problems/not-boring-movies/description/?envType=problem-list-v2&envId=wehxh2aj)

---

## My Approach

We will just put the conditions we need in the `WHERE` clause and at the end order them by rating.

### Solution Code:

```sql
SELECT id, movie, description, rating
FROM Cinema
WHERE description != 'boring' AND id % 2 = 1
ORDER BY rating DESC
```

**Pattern**: Filter

**Mistakes I Made:** Very easy problem.

**Series**: 90 Days of Data Engineering Progress: 28/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic