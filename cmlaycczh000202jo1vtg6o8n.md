---
title: "LeetCode 550: Game Play Analysis IV"
seoTitle: "Game Play Analysis IV Solution"
seoDescription: "Determine player re-login fraction on next day after first login using SQL. Medium level LeetCode problem with aggregation and CTE"
datePublished: Fri Feb 06 2026 13:59:44 GMT+0000 (Coordinated Universal Time)
cuid: cmlaycczh000202jo1vtg6o8n
slug: leetcode-550-game-play-analysis-iv
tags: mysql, sql, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** February 06, 2026  
**Category:** SQL  
**Time Taken:** 20 minutes  
**Difficulty:** Medium

---

# Problem Statement

Write a solution to report the **fraction** of players that logged in again on the day after the day they first logged in, **rounded to 2 decimal places**. In other words, you need to determine the number of players who logged in on the day immediately following their initial login, and divide it by the number of total players.

**Link:** [Game Play Analysis IV](https://leetcode.com/problems/game-play-analysis-iv/?envType=problem-list-v2&envId=weh5ncag)

---

# Approach:

* The first solution that comes to mind is to calculate the `first_login` dates from the table using `MIN(event_date)`. This allows us to check if a date is the day after the `first_login`.
    
* The formula is the total number of players who log in the day after their first login, divided by all distinct players.
    
* We can calculate the total number of players with a subquery. We will join this with our CTE on their `player_id`, and if the `event_date` is just after the `first_login`, we will use `DATE_ADD` to achieve this.
    

## Solution Code:

```sql
WITH first_logins AS (
    SELECT player_id, MIN(event_date) AS first_login
    FROM Activity
    GROUP BY player_id
)

-- first_login players / Total distinct players
SELECT ROUND(COUNT(DISTINCT a.player_id) / (SELECT COUNT(DISTINCT player_id) FROM Activity), 2) AS fraction

FROM Activity AS a
JOIN first_logins AS f

ON a.player_id = f.player_id AND a.event_date = DATE_ADD(f.first_login, INTERVAL 1 DAY)
```

**Pattern**: Aggregation and CTE.

**Mistakes I Made:** I initially had some trouble figuring out the logic.

**Series**: 90 Days of Data Engineering Progress: 35/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic