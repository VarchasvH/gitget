---
title: "LeetCode 175: Combine Two Tables"
seoTitle: "SQL Basics: Combining Tables in LeetCode 175"
seoDescription: "Learn to combine two tables using SQL in LeetCode's "Combine Two Tables" challenge. Explore the approach, solution, and lessons learned"
datePublished: Tue Jan 13 2026 08:15:28 GMT+0000 (Coordinated Universal Time)
cuid: cmkcbh6yc000102jjhrno0e64
slug: leetcode-175-combine-two-tables-easy
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768384990273/9cbf52bc-cdec-497d-956c-80ef3574a96d.png
tags: sql, leetcode, dataengineering, build-in-public, dequest

---

**Date:** January 13, 2026  
**Category:** SQL  
**Time Taken:** 2 minutes  
**Difficulty:** Easy

---

## Problem Statement

Table: `Person` and `Address`

Write a solution to report the first name, last name, city, and state of each person in the `Person` table. If the address of a `personId` is not present in the `Address` table, report `null` instead.

Return the result table in **any order**.

**Link:** [175: Combine Two Tables](https://leetcode.com/problems/combine-two-tables/description/?envType=problem-list-v2&envId=wehxh2aj)

---

## My Approach

**Initial thought:**  
It looked like a pretty basic inner join at first glance, as we needed only 2 columns from each table, but it resulted in the wrong solution because we also need null values in case `personId` is not present in the `Address` table.

**Final solution:**  
<mark>I used </mark> **<mark>left join instead of inner join</mark>** <mark> to combine the tables.</mark>

**Why this works:**  
This works because the left join will also include the values that are null along with the common values.

---

## Solution Code

```sql
SELECT firstName, lastName, city, state
FROM Person AS P
LEFT JOIN Address AS A
USING (personId)
```

**Key Takeaway:** Importance of Left and Right Joins.

**Pattern**: Table Join

**Mistakes I Made:** Chose Inner Join instead of Left Join.

**Series**: 90 Days of Data Engineering Progress: 1/90 problems completed

**Tags**: #LearnInPublic #DEQuest #LeetCode #SQL #DataEngineering