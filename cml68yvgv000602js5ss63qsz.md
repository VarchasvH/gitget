---
title: "LeetCode 169: Majority Element"
seoTitle: "Find the Majority Element Efficiently"
seoDescription: "Learn to find the majority element in an array using HashMap or the Boyer-Moore algorithm on LeetCode 169"
datePublished: Tue Feb 03 2026 06:58:20 GMT+0000 (Coordinated Universal Time)
cuid: cml68yvgv000602js5ss63qsz
slug: leetcode-169-majority-element
tags: python, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** February 03, 2026  
**Category:** HashMap | Arrays  
**Time Taken:** 30 minutes  
**Difficulty:** Easy

---

# Problem Statement

Given an array `nums` of size `n`, return *the majority element*.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

**Link:** [Majority Element](https://leetcode.com/problems/majority-element/description/?envType=problem-list-v2&envId=wac3gye6)

---

# **Approach 1 (HashMap Counter):**

* The first solution that comes to mind is to create a HashMap to count the occurrences of each element. We'll also create two variables, `maxCounter` and `maxElem`, to keep track of the highest count and the corresponding element.
    
* We will use a for loop to go through the array. Inside the loop, we'll increase the counter for the current value and check if this counter is greater than `maxCounter`. If it is, we'll update `maxCounter` and `maxElem`.
    
* At the end, we will return `maxElem`.
    

## Solution Code

```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        counter = {}
        maxCounter = 0
        maxElem = 0
        for num in nums:
            counter[num] = counter.get(num, 0) + 1
            if counter[num] > maxCounter:
                maxCounter = counter[num]
                maxElem = num
        return maxElem
```

### **Complexity**:

Time: O(N) Space: O(N)

---

# **Solution 2 (Boyer-Moore) \[Optimized\]:**

* The more optimized solution is to use the Boyer-Moore voting algorithm. We will define two variables: `candidate` and `count`.
    
* We will run a for loop. Inside this loop, we will make the first element our candidate and start counting. If we see the same element again, we will increase the count. If we see a different element, we will decrease the count.
    
* If the count reaches 0, we will update the candidate to the next value.
    
* Since there is a definite majority element, this method will work perfectly. At the end of the loop, we will return the latest candidate.
    

## Solution Code:

```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        candidate = 0
        count = 0
        for num in nums:
            if count == 0:
                candidate = num
            count += (1 if num == candidate else -1)
        return candidate
```

### **Complexity**:

Time: O(N) Space: O(1)

---

**Key Takeaway:** Boyer-Moore Voting Algorithm

**Pattern**: Frequency Counter

**Series**: 90 Days of Data Engineering Progress: 31/90 problems completed

**Tags**: #DEQuest #LeetCode #Python #DataEngineering #BuildInPublic