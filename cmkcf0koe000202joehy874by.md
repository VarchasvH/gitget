---
title: "LeetCode 217: Contains Duplicates"
seoTitle: "Contains Duplicates: LeetCode 217 Solution"
seoDescription: "Learn how to solve LeetCode's "Contains Duplicate" problem using arrays, loops, HashMaps, and Sets efficiently with explained solutions"
datePublished: Tue Jan 13 2026 09:54:31 GMT+0000 (Coordinated Universal Time)
cuid: cmkcf0koe000202joehy874by
slug: leetcode-217-contains-duplicates-easy
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768385206057/2fb1f6b4-78b6-483f-9cc2-0d78c639a5b9.png
tags: python, dsa, leetcode, dataengineering, dequest

---

**Date:** January 13, 2026  
**Category:** HashMap | Set | Array | Loop  
**Time Taken:** 5 minutes  
**Difficulty:** Easy

---

## Problem Statement

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

**Link:** [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/?envType=problem-list-v2&envId=wehoe3hj)

---

## My Approach

**Initial thought:**

* I could do a **nested loop on the list** that will check for duplicates, and whenever it finds a duplicate, it will return **True**; otherwise, **False**. But this approach will have a **time complexity of O(N<sup>2</sup>)** and **space complexity of O(1)** because I am not storing anything. This is the brute force method.
    
* We can also **sort the list** first and **compare adjacent elements** for duplicates. This solution will have a **time complexity of O(N LogN)** and a **space complexity of O(N).**
    
* One more solution could be to **create a HashMap** and check for duplicates while adding num from `nums` to the HashMap; if we find any duplicates, we return **True**; otherwise, **False**. This solution will have a **time complexity of O(N)** and a **space complexity of O(N),** as HashMap has constant lookup time.
    

**Final solution:**  
<mark>The best solution would be to </mark> **<mark>compare the length of</mark>** `nums` **<mark>list and the length of the set of</mark>** `nums` **<mark>list</mark>**<mark>. If they are equal, we return </mark> **<mark>False,</mark>** <mark>as every value is distinct; else, we return </mark> **<mark>True</mark>**<mark>.</mark>

**Why this works:**

* Sets are better optimized to check uniqueness.
    
* They have an average lookup time of O(1).
    

---

## Solution Code (HashMap)

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen= {}
        for value in nums:
            if value in seen:
                return True
            seen[value] = 1
        return False
```

## Solution Code (Set)

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(nums) != len(set(nums))
```

**Complexity**: Time: O(N) Space: O(N)

**Key Takeaway**: Sets are better for checking the uniqueness of a list.

**Pattern**: Frequency Map

**Mistakes I Made**:

* I did not think about Set solution at the start.
    
* In the HashMap solution, I counted the occurrences at first and did not look for duplicates in the same for loop.
    

**Series**: 90 Days of Data Engineering Progress: 2/90 problems completed

**Tags**: #LeetCode #SQL #DataEngineering