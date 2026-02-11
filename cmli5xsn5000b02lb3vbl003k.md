---
title: "LeetCode 626: Exchange Seats"
seoTitle: "Swap Seats: LeetCode 626 Solution"
seoDescription: "Swap consecutive seat IDs efficiently in SQL and handle odd-numbered students in this LeetCode problem"
datePublished: Wed Feb 11 2026 15:06:45 GMT+0000 (Coordinated Universal Time)
cuid: cmli5xsn5000b02lb3vbl003k
slug: leetcode-626-exchange-seats
tags: mysql, sql, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** February 09, 2026  
**Category:** SQL  
**Time Taken:** 15 minutes  
**Difficulty:** Medium

---

# Problem Statement

Write a solution to swap the seat id of every two consecutive students. If the number of students is odd, the id of the last student is not swapped.

Return the result table ordered by `id` **in ascending order**.

**Link:** [Exchange Seats](https://leetcode.com/problems/exchange-seats/description/?envType=problem-list-v2&envId=weh5ncag)

---

## Approach 1 (Intuitive Way):

The straightforward way to solve this is to understand that if no ID is skipped, we are basically decreasing even values by 1 and increasing odd values by 1. However, if the last value is odd, we don't make any changes. <mark>This method will not work if IDs can be skipped.</mark>

### Solution Code:

```sql
SELECT
    CASE
        WHEN id % 2 = 1 AND id = (SELECT MAX(id) FROM Seat) THEN id
        WHEN id % 2 = 1 THEN id + 1
        ELSE id - 1
    END AS id,
    student
FROM Seat
ORDER BY id ASC
```

---

## Approach 2 (Window Functions):

* A more suitable and modern approach is to use LAG/LEAD window functions.
    
* We use `CASE WHEN` statements to check if the value is odd or even. If it’s odd, we replace the student name with the next student’s name using `LEAD()`. If there is no next student name, we won't replace anything, and for that, we use `COALESCE()`.
    
* If it’s even, we replace it with the previous student’s name using `LAG()`.
    

### Solution Code:

```sql
SELECT  
    id,
    CASE
        WHEN id % 2 = 1 THEN COALESCE(LEAD(student) OVER(ORDER BY id ASC), student)
        ELSE LAG(student) OVER(ORDER BY id ASC)
    END AS student
FROM Seat
ORDER BY id ASC 
```

**Pattern**: Window Functions

**Mistakes I Made:** I didn't come up with the idea of incrementing odd numbers and decrementing even numbers on my own; I had to look it up.

**Series**: 90 Days of Data Engineering Progress: 40/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic