---
title: "LeetCode 3: Longest Substring Without Repeating Characters"
seoTitle: "Finding Longest Unique Substring in Python"
seoDescription: "Find the length of the longest substring without repeating characters using sliding window techniques on LeetCode"
datePublished: Fri Jan 23 2026 13:52:00 GMT+0000 (Coordinated Universal Time)
cuid: cmkqxwhqc000002l1dmsbh7bt
slug: leetcode-3-longest-substring-without-repeating-characters
tags: python, leetcode, build-in-public, leetcode-solution, dequest

---

**Date:** January 23, 2026  
**Category:** Arrays  
**Time Taken:** 60 minutes  
**Difficulty:** Medium

---

## Problem Statement

Given a string `s`, find the length of the **longest** **substring** without duplicate characters.

**Link:** [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=problem-list-v2&envId=wehoe3hj)

---

## My Approach

## **Solution 1 (Brute-Force):**

The brute-force solution would be check each and every possible substring using nested for loop, but that would beO(N²) so it’s not appropriate.

---

## **Solution 2 (Window + Set) \[Better\]:**

* We use a set to keep track of values we have already seen to ensure every character in our current window is unique.
    
* We set the left side of our window to 0 and start the right side at 0 as well, moving it forward using a for loop.
    
* If the value at the right pointer is already in the set, it means the substring is repeating, so we enter a while loop to remove the left value from the set and increase the left index by 1 until the duplicate is gone.
    
* Outside this while loop, we add the current right index value to the set.
    
* We then check and update the maximum length by comparing our current `max_Len` with the current window size, calculated as `right - left + 1`.
    

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seen = set()
        left = 0
        max_len = 0

        for right in range(len(s)):
            while s[right] in seen:
                seen.remove(s[left])
                left += 1
            seen.add(s[right])
            max_len = max(max_len, right - left + 1)
        
        return max_len
```

**Complexity**:

Time: O(N) Space: O(N)

---

## Solution 3 (Window + HashMap) \[Best\]

* Instead of a set, we use a **HashMap** (or dictionary) to store each character as a key and its **index** as the value.
    
* We initialize the `left` pointer at 0 and move the `right` pointer through the string using a `for` loop.
    
* If we hit a character that is already in our HashMap, it means we’ve seen it before. Instead of moving the `left` pointer one by one, we "jump" it directly to the right of the previous occurrence.
    
* We use the formula `left = max(left, seen[char] + 1)`. The `max` is important because it prevents the `left` pointer from ever moving backward into an old window.
    
* Inside the loop, we update the HashMap with the character's newest index so we always have its most recent position.
    
* Finally, we update our `max_Len` at every step using `right - left + 1`.
    
* This is the most efficient solution because the `left` pointer never has to "wait" in a while loop; it simply jumps to the correct spot in one step.
    

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # Hashmap value -> index
        seen = {}
        left = max_len = 0
        for right, char in enumerate(s):
            if char in seen:
                left = max(left, seen[char] + 1)
            seen[char] = right
            max_len = max(max_len, right - left + 1)
        return max_len
```

**Complexity:**

Time: O(N) Space: O(N)

---

**Key Takeaway:** How Sliding window pattern works

**Pattern**: Sliding Window

**Series**: 90 Days of Data Engineering Progress: 18/90 problems completed

**Tags**: #DEQuest #LeetCode #Python #DataEngineering #BuildInPublic