---
title: "LeetCode 1070: Product Sales Analysis III"
seoTitle: "Product Sales Analysis III Overview"
seoDescription: "Find first-year sales for each product using SQL subqueries or window functions. Ideal for data engineering professionals"
datePublished: Fri Feb 13 2026 12:17:25 GMT+0000 (Coordinated Universal Time)
cuid: cmlkurqmq000802ie2xnr7ich
slug: leetcode-1070-product-sales-analysis-iii
tags: mysql, sql, leetcode, leetcode-solution

---

**Date:** February 13, 2026  
**Category:** SQL  
**Time Taken:** 15 minutes  
**Difficulty:** Medium

---

# Problem Statement

Write a solution to find all sales that occurred in the **first year** each product was sold.

* For each `product_id`, identify the earliest `year` it appears in the `Sales` table.
    
* Return **all** sales entries for that product in that year.
    

Return a table with the following columns: **product\_id**, **first\_year**, **quantity,** and **price**.

**Link:** [Product Sales Analysis III](https://leetcode.com/problems/product-sales-analysis-iii/description/?envType=problem-list-v2&envId=weh5ncag)

---

## Approach 1 (Subquery):

* We only need the sales made in the first year, so we will calculate the `first_year` using the MIN clause in the inner subquery.
    
* In the outer query, we will select the required columns and filter the rows where the `product_id` and year match those in the inner query.
    

### Solution Code:

```sql
SELECT product_id, year as first_year, quantity, price
FROM Sales
WHERE (product_id, year) IN (
    SELECT product_id, MIN(`year`) AS first_year
    FROM sales
    GROUP BY product_id
)
```

---

## Approach 2 (Window Functions):

* By using the window functions `RANK()` or `DENSE_RANK()`, we can assign ranks based on the year in ascending order, so the earliest year will have a rank of 1.
    
* We will partition the data by each `product_id` and select sales with a rank of 1.
    

### Solution Code:

```sql
SELECT product_id, year AS first_year, quantity, price
FROM (
    SELECT *, DENSE_RANK() OVER(PARTITION BY product_id ORDER BY year ASC) AS rnk
    FROM Sales
) AS first_sales
WHERE rnk = 1
```

**Pattern**: Subquery | Window Functions

**Mistakes I Made:** Brain was just not working, I was unable to think of the solution and I also interpreted the problem incorrectly.

**Series**: 90 Days of Data Engineering Progress: 43/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic