---
title: "LeetCode 347: Top K Frequent Elements"
seoTitle: "Find Top K Frequent Elements Efficiently"
seoDescription: "Learn how to solve LeetCode 347: Top K Frequent Elements using HashMap and Bucket Sort with a time complexity of O(N)"
datePublished: Mon Jan 19 2026 12:06:44 GMT+0000 (Coordinated Universal Time)
cuid: cmkl4dpfc000d02jv1c099y5a
slug: leetcode-347-top-k-frequent-elements
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768920022919/20c4cc28-9ab6-4487-ab8d-347776ddae9a.png
tags: python, data-engineering, leetcode, build-in-public, varchasvh, dequest

---

**Date:** January 19, 2026  
**Category:** Array | HashMap | Bucket Sort  
**Time Taken:** 45 minutes  
**Difficulty:** Medium

---

## Problem Statement

Given an integer array `nums` and an integer `k`, return *the* `k` *most frequent elements*.

**Link:** [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/description/?envType=problem-list-v2&envId=wehoe3hj)

---

## My Approach

**Initial thought:** I was unable to think up of any solution.

**Final solution:**

* First, create a HashMap `counter` that will count the occurrences of all the numbers in the `nums` list and use a for loop to count them or can use `Collections.Counter`.
    
* After this, create `freq` a list of lists that will store all the numbers that appeared times equal to index as a list. Fix the length of `freq` to be equal to `len(nums) + 1` .
    
* Create a list `resultList` that will store all the top k elements, we will start the for loop at the end of `freq` until we reach 0 index. Inside this make another for loop that will loop in the internal list of `freq` and append the numbers in to the `resultList`.
    

This is called Bucket Sort solution.

---

## Solution Code (Bucket Sort)

```sql
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Hashmap to count the occurences of each element
        counter = {}
        for num in nums:
            counter[num] = counter.get(num, 0) + 1

        # List of List to store the elements that occur a particular time, of total length = len(nums) + 1
        freq = [[] for i in range(len(nums) + 1)]

        for number, frequency in counter.items():
            freq[frequency].append(number)

        # Result list that will have the top k elements
        resultList = []
        for i in range(len(freq) - 1, 0, -1):
            for num in freq[i]:
                resultList.append(num)
                if len(resultList) == k:
                    return resultList
```

**Complexity**:

Time: O(N + N + N) = O(N)

Space: O(N)

**Key Takeaway:** Bucket Sorting algorithm.

**Pattern**: Top K Elements

**Mistakes I Made:** Did not even figure out a brute force solution.

**Series**: 90 Days of Data Engineering Progress: 10/90 problems completed

**Tags**: #DEQuest #LeetCode #Python #DataEngineering #BuildInPublic