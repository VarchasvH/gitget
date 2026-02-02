---
title: "LeetCode 704: Binary Search"
seoTitle: "Binary Search Explained: LeetCode 704"
seoDescription: "Learn optimized binary search and HashMap solutions for LeetCode 704 with complexity analysis and Python implementation"
datePublished: Mon Feb 02 2026 11:05:40 GMT+0000 (Coordinated Universal Time)
cuid: cml52d3fy000b02jsh649hjcw
slug: leetcode-704-binary-search
tags: python, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** February 02, 2026  
**Category:** Arrays | Binary Search  
**Time Taken:** 15 minutes  
**Difficulty:** Easy

---

# Problem Statement

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

**Link:** [Binary Search](https://leetcode.com/problems/binary-search/description/?envType=problem-list-v2&envId=wac3gye6)

---

# **Solution 1 (HashMap):**

* We could use a HashMap to associate each value with its index.
    
* Then, we can check if the target is in the HashMap. If it is, we return the index; if not, we return -1.
    
* <mark>This solution is not </mark> **<mark>Not O(logN).</mark>**
    

## Solution Code

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        seen = {}
        for index, value in enumerate(nums):
            seen[value] = index
        
        if target in seen:
            return seen[target]
        return -1
```

### **Complexity**:

Time: O(N) Space: O(N)

---

# **Solution 2 (Binary Search) \[Optimized\]:**

* The proper solution is to write a Binary Search algorithm. We will start with two pointers: `left` and `right`.
    
* While `left <= right`, we will define a variable `middle` as `left + (right - left) // 2`. We use `//` instead of `/` to ensure we get whole numbers, not decimals.
    
* If the target is smaller than `middle`, we will move `right` to `middle - 1`. If the target is larger than `middle`, we will move `left` to `middle + 1`. If neither is true, it means `middle` equals the target, and we will return the `middle` index.
    

## Solution Code (No separate arrays)

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1
        
        while left <= right:
            middle = left + (right - left) // 2
            if target > nums[middle]:
                left = middle + 1
            elif target < nums[middle]:
                right = middle - 1
            else:
                return middle
        return -1
```

### **Complexity**:

Time: O(logN) Space: O(1)

---

**Key Takeaway:** How Binary Search in written in Python.

**Pattern**: Binary Search

**Series**: 90 Days of Data Engineering Progress: 29/90 problems completed

**Tags**: #DEQuest #LeetCode #Python #DataEngineering #BuildInPublic