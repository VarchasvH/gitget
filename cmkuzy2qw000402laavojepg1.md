---
title: "LeetCode 584: Find Customer Referee"
seoTitle: "Find Customer Referee Guide"
seoDescription: "Learn how to find customer names either not referred by customer 2 or with no referral using SQL on LeetCode"
datePublished: Mon Jan 26 2026 10:00:18 GMT+0000 (Coordinated Universal Time)
cuid: cmkuzy2qw000402laavojepg1
slug: leetcode-584-find-customer-referee
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769447897589/947850d7-06db-4d29-b77c-7bf32cbc1809.png
tags: sql, leetcode, build-in-public, leetcode-solution, dequest

---

**Date:** January 26, 2026  
**Category:** SQL  
**Time Taken:** 1 minute  
**Difficulty:** Easy

---

## Problem Statement

Find the names of the customer that are either:

1. **referred by** any customer with `id != 2`.
    
2. **not referred by** any customer.
    

**Link:** [Find Customer Referee](https://leetcode.com/problems/find-customer-referee/description/?envType=problem-list-v2&envId=wehxh2aj)

---

## My Approach

Since we only need names not referred by customer 2 or with no referral, it is a very basic problem.

---

## Solution Code

```sql
SELECT name
FROM Customer
WHERE referee_id != 2 OR referee_id IS NULL
```

**Key Takeaway:** Nothing, very easy problem.

**Pattern**: Filter

**Mistakes I Made:** None

**Series**: 90 Days of Data Engineering Progress: 19/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic