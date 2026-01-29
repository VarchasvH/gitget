---
title: "LeetCode 607: Sales Person"
seoTitle: "LeetCode 607: Sales Person Solution"
seoDescription: "Learn to find salespersons without orders from "RED" using SQL techniques like CTE and NOT EXISTS. Ideal for SQL beginners"
datePublished: Thu Jan 29 2026 10:06:12 GMT+0000 (Coordinated Universal Time)
cuid: cmkzah7jz000302jvg42a0ue5
slug: leetcode-607-sales-person
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769681162949/8ff1aecb-5def-499b-8556-9152391aae64.png
tags: mysql, sql, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** January 29, 2026  
**Category:** SQL  
**Time Taken:** 10 minute  
**Difficulty:** Easy

---

# Problem Statement

Write a solution to find the names of all the salespersons who did not have any orders related to the company with the name **"RED"**.

**Link:** [Sales Person](https://leetcode.com/problems/sales-person/description/?envType=problem-list-v2&envId=wehxh2aj)

---

## Approach 1 (CTE):

* First, we can create a CTE to store all orders where the company name is "RED".
    
* Then, we will perform a Left Join between SalesPerson and the CTE using their sales\_id.
    
* The Left Join ensures that any sales\_id in the CTE that doesn't match a SalesPerson sales\_id will be null. We will use a filter condition to select the names where the CTE sales\_id is NULL.
    

### Solution Code:

```sql
WITH red_orders AS (
    SELECT o.sales_id
    FROM Orders o
    JOIN Company c ON o.com_id = c.com_id
    WHERE c.name = 'RED'
)

SELECT s.name
FROM SalesPerson s
LEFT JOIN red_orders r ON s.sales_id = r.sales_id
WHERE r.sales_id IS NULL
```

---

## Approach 2 (NOT EXISTS):

### Solution Code:

* In this approach, we will use the NOT EXISTS clause to select all values that don't meet the condition.
    
* In the condition, we will select companies with the name "RED" and match them with the SalesPerson sales\_id.
    
* This will return the name from SalesPerson for whom the sales\_id does not exist.
    

```sql
SELECT s.name
FROM SalesPerson AS s
WHERE NOT EXISTS (
    SELECT 1
    FROM Orders AS o
    JOIN Company AS c
    ON o.com_id = c.com_id
    WHERE c.name = "RED" AND s.sales_id = o.sales_id
)
```

**Key Takeaway:** How to use NOT EXISTS properly, still unsure but got better understanding.

**Pattern**: Aggregation

**Mistakes I Made:** Many, was not able to solve without help.

**Series**: 90 Days of Data Engineering Progress: 26/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic