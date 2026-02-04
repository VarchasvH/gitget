---
title: "LeetCode 33: Search in Rotated Sorted Array"
seoTitle: "Rotated Sorted Array Search Guide"
seoDescription: "Efficiently search rotated sorted arrays using optimized binary search for quick data engineering problem-solving"
datePublished: Wed Feb 04 2026 09:12:16 GMT+0000 (Coordinated Universal Time)
cuid: cml7t6z7h000b02l6eqwzb6ql
slug: leetcode-33-search-in-rotated-sorted-array
tags: python, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** February 04, 2026  
**Category:** Arrays  
**Time Taken:** 15 minutes  
**Difficulty:** Medium

---

## Problem Statement

There is an integer array `nums` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, `nums` is **possibly left rotated** at an unknown index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (**0-indexed**). For example, `[0,1,2,4,5,6,7]` might be left rotated by `3` indices and become `[4,5,6,7,0,1,2]`.

Given the array `nums` **after** the possible rotation and an integer `target`, return *the index of* `target` *if it is in* `nums`*, or* `-1` *if it is not in* `nums`.

You must write an algorithm with `O(log n)` runtime complexity.

**Link:** [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/?envType=problem-list-v2&envId=wac3gye6).

---

# **Solution 1 (HashMap):**

* One solution could be to use a HashMap to map the values to their indices and then checking if the target is in the HashMap or not.
    
* <mark>This will have a time complexity of O(N), but we need O(logN) so this is not the proper solution.</mark>
    

### Solution Code

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

**Complexity**:

Time: O(N) Space: O(1)

---

## **Solution 2 (Modified Binary Search) \[Optimized\]:**

* * We will define three pointers: `left` at the start, `right` at the last index, and `mid` inside the while loop, which will hold the middle value.
        
    * If `nums[mid]` is equal to the target, we will return `mid`.
        
    * Otherwise, we will check which side of `mid` has sorted values. When divided into two parts, one part will be sorted while the other will not.
        
    * If the value at the `left` index is equal to or smaller than the value at the `mid` index, we know the left side is sorted.
        
    * We will check if the `target` is in this range. If it is, we will move the `right` index to `mid - 1`. If it isn’t, it means the target is in the unsorted part, so we will move the `left` pointer to `mid + 1`.
        
    * If the left side is not sorted, we will apply the same logic to the right side..
        

### Solution Code:

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = left + (right - left) // 2

            if nums[mid] == target:
                return mid

            # Left side is sorted
            if nums[left] <= nums[mid]:
                # Is the target in the sorted half?
                if nums[left] <= target < nums[mid]:
                    right = mid - 1
                # Target is in the broken half or the other half
                else:
                    left = mid + 1

            # Right side is sorted
            else:
                # Is the target in the sorted half?
                if nums[mid] <= target <= nums[right]:
                    left = mid + 1
                # Target is in the broken half or the other half
                else:
                    right = mid - 1
        return -1
```

**Complexity**:

Time: O(logN) Space: O(1)

---

**Key Takeaway:** How to modify Binary Search to get our desired results.

**Pattern**: Binary Search

**Series**: 90 Days of Data Engineering Progress: 34/90 problems completed

**Tags**: #DEQuest #LeetCode #Python #DataEngineering #BuildInPublic