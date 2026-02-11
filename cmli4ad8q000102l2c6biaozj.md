---
title: "LeetCode 608: Tree Node"
seoTitle: "Tree Node Solution Guide"
seoDescription: "Determine node type in a tree using SQL: "Leaf," "Root," or "Inner" with optimized solutions"
datePublished: Wed Feb 11 2026 14:20:32 GMT+0000 (Coordinated Universal Time)
cuid: cmli4ad8q000102l2c6biaozj
slug: leetcode-608-tree-node
tags: mysql, sql, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** February 11, 2026  
**Category:** SQL  
**Time Taken:** 10 minutes  
**Difficulty:** Medium

---

# Problem Statement

Each node in the tree can be one of three types:

* **"Leaf"**: if the node is a leaf node.
    
* **"Root"**: if the node is the root of the tree.
    
* **"Inner"**: If the node is neither a leaf node nor a root node.
    

Write a solution to report the type of each node in the tree.

**Link:** [Tree Node](https://leetcode.com/problems/tree-node/description/?envType=problem-list-v2&envId=weh5ncag)

---

## Approach 1 (“IN" Approach):

* A node is a root if the `p_id` is null. This means we can check if `p_id IS NULL`, and whenever we find one, we can label it as "Root".
    
* The difference between `Leaf` and `Inner` nodes is that Inner nodes will not appear in the `p_id` column. So, if a node is in the column, it is "Inner"; if not, it is "Leaf".
    
* To check if the node is in the `p_id` column, we will use the `IN` keyword.
    

### Solution Code:

```sql
SELECT 
    id,
    CASE 
        WHEN p_id IS NULL THEN "Root"
        WHEN id IN (SELECT p_id FROM tree WHERE p_id IS NOT NULL) THEN "Inner"
        ELSE "Leaf"
    END AS type
FROM tree
```

---

## Approach 2 (Self-Join)\[Better Optimized\]:

We can make it more robust and optimized by using a Self-Join instead of `IN`. We can perform a left join on `t1.id = t2.p_id`. If `t2.p_id` is null, then it is "Leaf"; if not, it is "Inner".

### Solution Code:

```sql
SELECT 
    DISTINCT t1.id,
    CASE
        WHEN t1.p_id IS NULL THEN "Root"
        WHEN t2.p_id IS NOT NULL THEN "Inner"
        ELSE "Leaf"
    END AS type
FROM Tree AS t1
LEFT JOIN Tree AS t2
ON t1.id = t2.p_id
```

**Pattern**: CASE WHEN

**Mistakes I Made:** I did not know how to use Case when statements properly and now I do.

**Series**: 90 Days of Data Engineering Progress: 39/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic