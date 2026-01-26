---
title: "LeetCode 424: Longest Repeating Character"
seoTitle: "Longest Repeating Character Solution"
seoDescription: "Learn to solve LeetCode 424: Longest Repeating Character using the sliding window algorithm. Read about various solutions and optimization techniques"
datePublished: Mon Jan 26 2026 17:15:38 GMT+0000 (Coordinated Universal Time)
cuid: cmkvfhwqz000302l22ugn55h5
slug: leetcode-424-longest-repeating-character
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769447717888/e1e1ac91-6a0b-4bed-8683-30e1cc64b205.png
tags: python, leetcode, build-in-public, leetcode-solution, varchasvh, dequest

---

**Date:** January 26, 2026  
**Category:** Arrays  
**Time Taken:** minutes  
**Difficulty:** Medium

---

## Problem Statement

You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return *the length of the longest substring containing the same letter you can get after performing the above operations*.

**Link:** [Longest Repeating Character](https://leetcode.com/problems/longest-repeating-character-replacement/description/?envType=problem-list-v2&envId=wehoe3hj)

---

## My Approach

**Initial thought:**  
I did not have any idea on how to solve this problem.

---

## **Solution 1 :**

* We will define the necessary variables and a hashmap to store the counts of each character.
    
* We will define `right` in the for loop as we do in the sliding window algorithm, and inside this for loop, we will count the frequencies first.
    
* After counting them, we will check if a specific condition is met. If the difference between the window, which is `right - left + 1`, and the max frequency we found is greater than `k`, it means we don’t have enough `k` to change the required values.
    
* In this case, we will decrease the count of the left value in the hashmap and increase the left value index. At the end of the for loop, we will update our end result with the max of the previous result or the window.
    
* Because if the window is bigger, it means we have a bigger possible substring.
    

### Solution Code

```python
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}
        res = 0
        left = 0
        for right in range(len(s)):
            count[s[right]] = 1 + count.get(s[right], 0)

            while right - left + 1 - max(count.values()) > k:
                count[s[left]] -= 1
                left += 1

            res = max(res, right - left + 1)
        return res
```

**Complexity**:

Time: O(26\*N) Space: O(N)

---

## **Solution 2 \[Optimized\]:**

Almost the same as the above approach, but instead of looking for the max values every time, which would increase the time complexity, we will create a variable `maxf` to store the max count for us. All the other conditions remain the same.

### Solution Code (No separate arrays)

```python
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}
        res = 0
        left = 0
        maxf = 0
        for right in range(len(s)):
            count[s[right]] = 1 + count.get(s[right], 0)
            maxf = max(maxf, count[s[right]])

            while right - left + 1 - maxf > k:
                count[s[left]] -= 1
                left += 1

            res = max(res, right - left + 1)
        return res
```

**Complexity**:

Time: O(N) Space: O(N)

---

**Key Takeaway:** Whenever you see a substring or subarray problem and some condition is supposed to be met, we have to use the Sliding window algorithm.

**Pattern**: Sliding Window Algorithm.

**Series**: 90 Days of Data Engineering Progress: 20/90 problems completed

**Tags**: #DEQuest #LeetCode #Python #DataEngineering #BuildInPublic