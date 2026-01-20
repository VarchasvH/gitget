---
title: "LeetCode 182: Duplicate Emails"
seoTitle: "Find Duplicate Emails in SQL"
seoDescription: "Learn how to identify duplicate emails using SQL's HAVING clause and GROUP BY for efficient data queries"
datePublished: Fri Jan 16 2026 07:19:38 GMT+0000 (Coordinated Universal Time)
cuid: cmkgjsxjr001702joa4vc35tm
slug: leetcode-182-duplicate-emails
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768919810815/ab681919-b290-49a1-90d0-85bbac40b424.png
tags: sql, leetcode, build-in-public, leetcode-solution, varchasvh, dequest

---

**Date:** January 16, 2026  
**Category:** SQL  
**Time Taken:** 3 minutes  
**Difficulty:** Easy

---

## Problem Statement

Write a solution to report all the duplicate emails. Note that it's guaranteed that the email field is not NULL.

**Link:** [Duplicate Emails](https://leetcode.com/problems/group-anagrams/?envType=problem-list-v2&envId=wehoe3hj)

---

## My Approach

**Initial thought:** I can count how often each email appears in the table and filter out those with a `count > 1`. I can use a CTE to get the counts and then apply the filter to that CTE.

**Final solution:**  
The best solution is to use the `HAVING` clause with the `GROUP BY` clause, so we don't need to create a CTE.

**Why this works:**  
This works because the `HAVING` clause lets us use aggregation logic for comparison, which the `WHERE`clause does not allow.

---

## Solution Code

```sql
SELECT email AS Email
FROM Person
GROUP BY email
HAVING COUNT(*) > 1
```

**Key Takeaway:** Learned more about HAVING clause and when to use it.

**Pattern**: GROUP BY

**Mistakes I Made**: I already knew about the HAVING clause and still didn’t implement it because I forgot how it actually worked.

**Series**: 90 Days of Data Engineering Progress: 7/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic