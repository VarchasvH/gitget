---
title: "LeetCode 1045: Customers Who Bought All Products"
seoTitle: "SQL Challenge: Find Customers Buying All Products"
seoDescription: "Find out how to identify customers who bought every product in the database using this medium-level SQL challenge"
datePublished: Thu Feb 12 2026 09:36:59 GMT+0000 (Coordinated Universal Time)
cuid: cmlj9lkw0000u02ju4fbp7yj8
slug: leetcode-1045-customers-who-bought-all-products
tags: sql, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** February 12, 2026  
**Category:** SQL  
**Time Taken:** 10 minutes  
**Difficulty:** Medium

---

# Problem Statement

Write a solution to report the customer ids from the `Customer` table that bought all the products in the `Product` table.

**Link:** [Customers Who Bought All Products](https://leetcode.com/problems/customers-who-bought-all-products/description/?envType=problem-list-v2&envId=weh5ncag)

---

# My Approach:

This solution comes down to checking if the number of distinct products a customer bought is equal to the total number of products in the Product table. We use `DISTINCT` because a customer can buy a product multiple times, and without it, we would get an incorrect answer.

## Solution Code:

```sql
SELECT customer_id
FROM Customer
GROUP BY customer_id
HAVING COUNT(DISTINCT product_key) = (
    SELECT COUNT(*)
    FROM Product
)
```

**Pattern**: Subquery | Aggregation

**Mistakes I Made:** I did not use `DISTINCT` initially and that resulted in incorrect solution.

**Series**: 90 Days of Data Engineering Progress: 42/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic