---
title: "LeetCode 242: Valid Anagram"
seoTitle: "Valid Anagram: LeetCode 242 Solution"
seoDescription: "Learn how to determine if two strings are anagrams using different approaches, focusing on efficiency and handling Unicode characters"
datePublished: Wed Jan 14 2026 12:23:48 GMT+0000 (Coordinated Universal Time)
cuid: cmkdzseb2000202i814k0eft3
slug: leetcode-242-valid-anagram
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768393303393/462e2c6f-fd4c-4bd8-9c12-79d91b3b88d5.png
tags: python, leetcode, build-in-public, varchasvh, dequest

---

**Date:** January 14, 2026  
**Category:** Array | HashMap  
**Time Taken:** 15 minutes  
**Difficulty:** Easy

---

## Problem Statement

Given two strings, `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

**Link:** [Valid Anagram](https://leetcode.com/problems/valid-anagram/)

---

## [My Approach](https://leetcode.com/problems/valid-anagram/)

**Initial thought:**

* I could compare the sorted strings and return `true` if they are the same or `false` if they are not. This approach would have a **time complexity of O(N log N)** and a **space complexity of O(N)**.
    
* We can also use `collections.Counter` on both strings and compare them. This method will have a **time complexity of O(N)** and a **space complexity of O(N)**.
    
* I could also create a hashmap to map the characters of a string to their frequencies and then compare it to the next string. This approach will have a **time complexity of O(N)** and a **space complexity of O(1)** \[since there can only be 26 possible characters.\]
    

**Final solution:**

* <mark>First, we will compare the length of both the strings; if they are not the same, we will return </mark> `false`<mark>.</mark>
    
* <mark>Initialize a hashmap, then use a for loop on one string to map the frequencies of each character in the hashmap.</mark>
    
* <mark>Use another for loop to go through each character in the other string. If the frequency for that character is 0, we return false. If it's not, we reduce the value by 1. At the end of the loop, if it does not return false, then it is an anagram, so we return true.</mark>
    

**Why this works:**  
The follow-up question for this problem is: **What if the inputs contain Unicode characters? How would you adapt your solution to such a case?** The hashmap solution is the best way to handle all types of characters it might have.

---

## Solution Code (Counter)

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        return Counter(s) == Counter(t)
```

## Solution Code (HashMap)

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        hashmap = {}
        for char in s:  
            hashmap[char] = hashmap.get(char, 0) + 1
        
        for char in t:
            if hashmap.get(char, 0) == 0:
                return False
            else:
                hashmap[char] -= 1
        return True
```

**Complexity**: Time: O(N) Space: O(N)

**Key Takeaway:** I can use `collections.Counter` to count frequencies instead of manually doing it with a hashmap each time. I can also avoid `KeyError` by using `hashmap.get()`.

**Pattern**: Frequency Counter Pattern.

**Mistakes I Made**: I didn't think to compare the lengths of both strings beforehand, which caused my solution to fail even though all the other logic was correct.

**Series**: 90 Days of Data Engineering Progress: 4/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic