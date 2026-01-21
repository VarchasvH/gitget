---
title: "LeetCode 128: Longest Consecutive Sequence"
seoTitle: "Longest Consecutive Sequence Solution"
seoDescription: "Solve LeetCode 128: Longest Consecutive Sequence in O(n) time using arrays and hashsets techniques"
datePublished: Wed Jan 21 2026 11:23:18 GMT+0000 (Coordinated Universal Time)
cuid: cmknxpk83000202l56nt6fv6t
slug: leetcode-128-longest-consecutive-sequence
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769012641598/1067e66d-509a-431b-b838-eec57ef4b19e.png
tags: python, data-engineering, leetcode, build-in-public, leetcode-solution, varchasvh, dequest

---

**Date:** January 21, 2026  
**Category:** Arrays | HashSets  
**Time Taken:** 30 minutes  
**Difficulty:** Medium

---

## Problem Statement

Given an unsorted array of integers `nums`, return *the length of the longest consecutive elements sequence.*

You must write an algorithm that runs in `O(n)` time.

**Link:** [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=problem-list-v2&envId=wehoe3hj)

---

## My Approach

**Initial thought:**  
The first solution I thought of was a **brute-force approach**. It involved using nested for loops and a variable inside the first loop to keep track of the products of all values except the current one. The results would then be placed in the index that doesn't match the current value. This solution would have a **time complexity of O(N²)** and a **space complexity of O(1)** since the output array is not counted. However, LeetCode requires at least an O(N) solution, so we can't use this approach.

---

## **Solution 1 (Brute Force):**

* We will start by initializing a variable to store the longest streak we have seen so far.
    
* Next, we will use a for loop on `nums` to set `currentNum` and `currentStreak`.
    
* We will search for numbers that fit the sequence, and each time we find one, we will increase both `currentNum` and `currentStreak` by 1.
    
* Finally, we will return the maximum of `longestStreak` or `currentStreak`.
    

### Solution Code

```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        longestStreak = 0

        for num in nums:
            currentNum = num
            currentStreak = 1

            while currentNum + 1 in nums:
                currentNum += 1
                currentStreak += 1
            
            longestStreak = max(longestStreak, currentStreak)

        return longestStreak
```

**Complexity**:

Time: O(N³) Space: O(1)

---

## **Solution 2 (Sorting Method) \[Better\]:**

* First, if we don’t have an array or the array is empty, we simply return 0.
    
* Sort the array so similar values are next to each other.
    
* Create two variables to store the overall longest streak and the current streak.
    
* Loop through the `nums` array and skip duplicate values.
    
* If we find values that fit the sequence, we increase `currentStreak`. If not, we set `longestStreak` to be the maximum of `longestStreak` or `currentStreak`, and reset `currentStreak` for the next values.
    
* At the end, we return the maximum of `longestStreak` and `currentStreak`.
    

### Solution Code:

```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # If the array is empty return 0
        if not nums: return 0
        nums.sort()

        longestStreak = 1
        currentStreak = 1

        for i in range(1, len(nums)):
            # To skip duplicates
            if nums[i] != nums[i - 1]:
                # It's a sequence
                if nums[i - 1] + 1 == nums[i]:
                    currentStreak += 1
                else:
                # not a sequence continue to the next value
                    longestStreak = max(longestStreak , currentStreak)
                    currentStreak = 1
            
        return max(longestStreak, currentStreak)
```

**Complexity**:

Time: O(N log N) Space: O(1)

---

## **Solution 3 (HashSet Method) \[Best\]:**

* If we don't have an array or the array is empty, we simply return 0.
    
* Convert the nums array into a hashset to store only unique values.
    
* Keep track of the longest streak so far using a variable.
    
* Look for numbers that could start a sequence, meaning the number before them doesn't exist.
    
* When you find such a number, start counting the current streak and set the current number or head to this number.
    
* Use a while loop on the hashset to find the sequence numbers.
    
* Update the number to the next in the sequence.
    
* Increase the current streak count until no more sequence numbers are possible.
    
* When that happens, set `longestStreak` to be the maximum of `currentStreak` and `longestStreak`.
    

### Solution Code:

```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums: return 0
        nums_set = set(nums)
        longestStreak = 1

        for num in nums_set:
            # Start of the sequence
            if (num - 1) not in nums_set:
                currentNum = num
                currentStreak = 1

                while (currentNum + 1) in nums_set:
                    currentStreak += 1
                    currentNum += 1
            
                longestStreak = max(longestStreak, currentStreak)
        
        return longestStreak
```

**Complexity**:

Time: O(N) Space: O(N)

---

**Key Takeaway:** Learned about hash sets and how to solve similar problems.

**Pattern**: Island Pattern

**Series**: 90 Days of Data Engineering Progress: 13/90 problems completed

**Tags**: #DEQuest #LeetCode #Python #DataEngineering #BuildInPublic