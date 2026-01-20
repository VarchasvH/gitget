---
title: "LeetCode 238: Product of Array Except Self"
seoTitle: "Array Product Excluding Self in Python"
seoDescription: "Tackle LeetCode 238 with a non-division O(n) solution for the product array except self problem in Python"
datePublished: Tue Jan 20 2026 13:55:38 GMT+0000 (Coordinated Universal Time)
cuid: cmkmnplnd000002ld9vrj6aal
slug: leetcode-238-product-of-array-except-self
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768920162747/18d6f4d6-c6cc-4221-aabd-5ac25323e701.png
tags: python, data-engineering, leetcode, build-in-public, leetcode-solution, varchasvh, dequest

---

**Date:** January 20, 2026  
**Category:** Arrays  
**Time Taken:** 30 minutes  
**Difficulty:** Medium

---

## Problem Statement

Given an integer array `nums`, return *an array* `answer` *such that* `answer[i]` *is equal to the product of all the elements of* `nums` *except* `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

**Link:** [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/?envType=problem-list-v2&envId=wehoe3hj)

---

## My Approach

**Initial thought:**  
The first solution I thought of was a **brute-force approach**. It involved using nested for loops and a variable inside the first loop to keep track of the products of all values except the current one. The results would then be placed in the index that doesn't match the current value. This solution would have a **time complexity of O(N²)** and a **space complexity of O(1)** since the output array is not counted. However, LeetCode requires at least an O(N) solution, so we can't use this approach.

---

## **Solution 1 (Separate prefix and suffix arrays):**

* First, we define the `answer`, `prefix`, and `suffix` arrays, making them the same size as the `nums` array. The `prefix` and `suffix` arrays will be initialized with 1, while the `answer` array will be initialized with 0.
    
* Next, we use a for loop to store the product of all values before the current one in the `prefix` array. We start from the first index and go up to the length of `nums`.
    
* Similarly, we store the products of all values after the current index in the `suffix` array.
    
* Finally, we use another for loop to store the product of `prefix[i]` and `suffix[i]` in `answer[i]`.
    

### Solution Code

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # Prefix and Suffix approach
        size = len(nums)
        answer = [0] * size
        prefix = [1] * size
        suffix = [1] * size

        for i in range(1, size):
            prefix[i] = prefix[i - 1] * nums[i - 1]
            
        for i in range(size - 2, -1, -1):
            suffix[i] = suffix[i + 1] * nums[i + 1]

        for i in range(size):
            answer[i] = suffix[i] * prefix[i]
        
        return answer
```

**Complexity**:

Time: O(N) Space: O(N)

---

## **Solution 2 (Separate prefix and suffix arrays) \[Optimized\]:**

* Similar to the above approach, we will create an `answer` array but won't use separate prefix and suffix arrays. Instead, we'll store the values directly in the answer array.
    
* Use a for loop to store the product of numbers before the current index directly in the answer array. This is the prefix loop.
    
* Use another loop starting from the last index `len(nums) - 1` and go to index -1. Along the way, store the product of the numbers after the current index and multiply it with the product already in the answer array from the prefix loop.
    

### Solution Code (No separate arrays)

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        size = len(nums)
        answer = [0] * size

        prefix = 1
        for i in range(size):
            answer[i] = prefix
            prefix *= nums[i]

        suffix = 1
        for i in range(size - 1, -1, -1):
            answer[i] *= suffix
            suffix *= nums[i]

        return answer
```

**Complexity**:

Time: O(N) Space: O(1)

---

**Key Takeaway:** Understood how prefix and suffix problems work.

**Pattern**: Prefix Sum

**Series**: 90 Days of Data Engineering Progress: 12/90 problems completed

**Tags**: #DEQuest #LeetCode #Python #DataEngineering #BuildInPublic