---
title: "LeetCode 183: Customers Who Never Order."
seoTitle: "Find Customers Without Orders"
seoDescription: "Learn to find customers who never order using SQL with both a left join and a NOT EXISTS approach"
datePublished: Mon Jan 19 2026 07:36:23 GMT+0000 (Coordinated Universal Time)
cuid: cmkkuq1io000102jvaj3o8n68
slug: leetcode-183-customers-who-never-order
tags: mysql, sql, leetcode, leetcode-solution, varchasvh, 90dayschallenge, dequest

---

**Date:** January 19, 2026  
**Category:** SQL  
**Time Taken:** minutes  
**Difficulty:** Easy

---

## Problem Statement

Write a solution to find all customers who never order anything.

**Link:** [Customers Who Never Order](https://leetcode.com/problems/customers-who-never-order/description/?envType=problem-list-v2&envId=wehxh2aj)

---

## My Approach

**Initial thought:**
Since we only need the names of customers who have never ordered, we can perform a left join on the `customers` and `orders` tables using `customers.id = orders.customerId`. Then, we can use the `WHERE` clause to find customers who have no `order.id`.

**Final solution:**
A more efficient solution is to use `NOT EXISTS` with a subquery instead of a join. With this method, as soon as we find a customer with any orders, we can skip to the next customer. This saves time by not having to check all the data for each customer.

**Why this works:**  
This works because as soon as we find any `order.id` for a customer, we stop looking for customers with no orders and move on to the next customer. This saves time.

---

## Solution Code (Left Join)

```sql
SELECT c.name AS Customers
FROM Customers AS c
LEFT JOIN Orders AS o
ON c.id = o.customerId
WHERE o.id IS NULL
```

## Solution Code (Optimized)

```sql
SELECT c.name AS Customers
FROM Customers AS c
WHERE NOT EXISTS (
    SELECT 1
    FROM Orders AS o
    WHERE o.customerId = c.id
)
```

**Key Takeaway**: Better optimization with NOT EXISTS.

**Pattern**: Anti Join / Anti-Semi Join

**Mistakes I Made**: There were no mistakes to mention. I simply wasn't aware of the optimized solution for this.

**Series**: 90 Days of Data Engineering Progress: 7/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic