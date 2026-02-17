---
title: "LeetCode 262: Trips and Users"
seoTitle: "SQL Challenge: Trips and Users"
seoDescription: "Learn how to calculate cancellation rates for unbanned user trips in SQL with this LeetCode challenge guide"
datePublished: Tue Feb 17 2026 06:35:51 GMT+0000 (Coordinated Universal Time)
cuid: cmlq8bwbi000102kz1l4b09z6
slug: leetcode-262-trips-and-users
tags: mysql, sql, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** February 17, 2026  
**Category:** SQL  
**Time Taken:** 30 minutes  
**Difficulty:** Hard

---

# Problem Statement

The **cancellation rate** is computed by dividing the number of canceled (by client or driver) requests with unbanned users by the total number of requests with unbanned users on that day.

Write a solution to find the **cancellation rate** of requests with unbanned users (**both client and driver must not be banned**) each day between `"2013-10-01"` and `"2013-10-03"` with **at least** one trip. Round `Cancellation Rate` to **two decimal** points.

**Link:** [Trips and Users](https://leetcode.com/problems/trips-and-users/description/?envType=problem-list-v2&envId=w262wq41)

---

## Approach 1 (NOT IN):

* The first way to solve this problem is by using the `NOT IN` clause to select only those trips where `client_id` and `driver_id` are not in the Users table and are also unbanned.
    
* Since we need to focus on a specific date range, we will use `BETWEEN` on `request_at`.
    
* We will use the aggregation function `AVG` because it automatically performs the division we need, canceled/total. We just need to `ROUND` it, and since we are using an aggregation function, we will also use `GROUP BY`.
    

### Solution Code:

```sql
SELECT 
    request_at AS Day, 
    ROUND(AVG(status != 'completed'), 2) AS 'Cancellation Rate'
FROM Trips
WHERE client_id NOT IN (SELECT users_id FROM Users WHERE banned = 'Yes')
  AND driver_id NOT IN (SELECT users_id FROM Users WHERE banned = 'Yes')
  AND request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY request_at;
```

---

## Approach 2 (Joins):

* A more common method is to use two joins instead of `NOT IN`. Most of the code will stay the same, but instead of checking for unbanned users in the WHERE clause, we will join the table twice, once for drivers and once for clients.
    
* We will still use `BETWEEN`, `AVG`, and `GROUP BY`.
    

### Solution Code:

```sql
SELECT 
    t.request_at AS 'Day',
    ROUND(AVG(status != "completed"), 2) AS "Cancellation Rate"
FROM Trips AS t

JOIN Users AS client
    ON t.client_id = client.users_id AND client.banned = "No"
JOIN Users AS driver
    ON t.driver_id = driver.users_id AND driver.banned = "No"

WHERE t.request_at BETWEEN "2013-10-01" AND "2013-10-03"
GROUP BY t.request_at
```

**Pattern**: Window Functions

**Mistakes I Made:** Many, I was not able to think of this solution on my own. Must practice.

**Series**: 90 Days of Data Engineering Progress: 44/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic