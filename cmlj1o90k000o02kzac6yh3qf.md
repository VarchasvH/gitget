---
title: "LeetCode 1141: User Activity for the Past 30 Days I"
seoTitle: "Track 30-Day User Activity on LeetCode"
seoDescription: "Learn to determine daily active users over 30 days using SQL approaches with LeetCode problem 1141. Perfect for data engineering enthusiasts"
datePublished: Thu Feb 12 2026 05:55:07 GMT+0000 (Coordinated Universal Time)
cuid: cmlj1o90k000o02kzac6yh3qf
slug: leetcode-1141-user-activity-for-the-past-30-days-i
tags: mysql, sql, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** February 12, 2026  
**Category:** SQL  
**Time Taken:** 10 minutes  
**Difficulty:** Easy

---

# Problem Statement

Write a solution to find the daily active user count for a period of `30` days ending `2019-07-27` inclusively. A user was active on someday if they made at least one activity on that day.

**Link:** [**User Activity for the Past 30 Days I**](https://leetcode.com/problems/user-activity-for-the-past-30-days-i/description/?envType=problem-list-v2&envId=weh5ncag)

---

## Approach 1 (BETWEEN):

* The basic solution would be use `BETWEEN` clause to count the distinct user\_ids inside a specific date range that would be from “2019-06-28” to “2019-07-27“.
    
* This will work properly but it is not scalable and if the date is changed we will have to do manual calculations to calculate the prior date.
    
* But we can use Indexing on this so it will be faster.
    

### Solution Code:

```sql
SELECT activity_date AS `day`, COUNT(DISTINCT user_id) AS active_users
FROM Activity
WHERE activity_date BETWEEN "2019-06-28" AND "2019-07-27"
GROUP BY activity_date
```

---

## Approach 2 (DATEDIFF):

* A more dynamic and scalable solution would be to use `DATEDIFF` to find unique `user_ids` with a difference of less than 30 days from "2019-07-27", meaning 30 days before that date.
    
* We will also add another condition that `activity_date` should not be later than 2019-07-27, or we will get negative results.
    
* This approach will provide accurate results, but it will be slower as we cannot use indexing on the `activity_date` column if we use `DATEDIFF`. But this will be much more dynamic in case the number of days are changed.
    

### Solution Code:

```sql
SELECT activity_date AS `day`, COUNT(DISTINCT user_id) AS active_users
FROM Activity
WHERE DATEDIFF("2019-07-27", activity_date) < 30 AND activity_date <= "2019-07-27"
GROUP BY activity_date
```

---

**Pattern**: Date difference

**Mistakes I Made:** Was able to think of the `DATEDIFF` solution but not the “easier“ `BETWEEN` solution.

**Series**: 90 Days of Data Engineering Progress: 41/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic