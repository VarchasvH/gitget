---
title: "LeetCode 49: Group Anagrams"
seoTitle: "Group Anagrams Code Solution"
seoDescription: "Group anagrams using efficient methods like sorted strings and character frequency. Improve time complexity to solve the problem optimally"
datePublished: Fri Jan 16 2026 08:12:19 GMT+0000 (Coordinated Universal Time)
cuid: cmkglooqy000402l5flazeoiw
slug: leetcode-49-group-anagrams
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768919879138/d57e8d3a-a9c2-4b84-89a6-4ef613bbe34e.png
tags: python, leetcode, build-in-public, varchasvh, dequest

---

**Date:** January 16, 2026  
**Category:** Array | HashMap | String | Sorting  
**Time Taken:** 25 minutes  
**Difficulty:** Medium

---

## Problem Statement

Given an array of strings `strs`, group the anagrams together. You can return the answer in **any order**.

**Link:** [Group Anagrams](https://leetcode.com/problems/group-anagrams/description/?envType=problem-list-v2&envId=wehoe3hj)

---

## My Approach

**Initial thought:**

* We can create a HashMap where each value is a list containing all the strings with the same characters. For the HashMap key, we can use the sorted version of the string and we can just append the list whenever we find a string matching the sorted key.
    
* This solution will have **time complexity of** \*\*O(N *K logK)*\*\**,* where K is the maximum length of a string and the **space complexity will be O(N \* K).**
    
* This approach works well when strings can contain any characters, not just a-z.
    

**Final solution:**  
The most “optimal” solution would be to count the total number of characters in a string and use them as the key in the HashMap.

* First create a HashMap of lists using `defaultdict(list)` .
    
* Use a for loop to get to each string and define a list `charFreq` which will have the frequencies of each character in it.
    
* Convert this `charFreq` to a tuple and use it as a key for our HashMap.
    

**Why this works:**  
\[Key insight that makes this solution work\]

---

## Solution Code (Sorted String method)

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # hashmap['aet'] = ['eat', 'tea', 'ate']
        # Creating a hashmap with list as it's values.
        anagrams = defaultdict(list)

        for word in strs:
        # Since sorted(str) returns a sorted list, we need to convert it back to a string
        # Because a list cannot be used as a key for a hashmap, or we could convert it to a 
        # tuple
            sword = ''.join(sorted(word))
            anagrams[sword].append(word)
        
        # Since we require a list and not dict_values() as the output.
        return list(anagrams.values())
```

## Solution Code (Count Freq method)

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = defaultdict(list)

        for word in strs:
            # Create a list of length 26, with each value as 0
            charFreq = [0] * 26

            for char in word:
                # Add the frequency of every char in the word to charFreq
                charFreq[ord(char) - ord('a')] += 1

            # Store the charFreq list as a tuple to use it as the key and append the word for the freq
            anagrams[tuple(charFreq)].append(word)
    
        return list(anagrams.values())
```

**Complexity**:

Time: O(N\*K) Space: O(N\*K), where K is the longest word.

**Key Takeaway**: We can use `ord()` to get the value of every char from a-z.

**Pattern**: Frequency Array

**Mistakes I Made**:

* I didn't remember how to define a dictionary with lists as values.
    
* I forgot how `ord()` works in Python and its usage.
    

**Series**: 90 Days of Data Engineering Progress: 8/90 problems completed

**Tags**: #DEQuest #LeetCode #SQL #DataEngineering #BuildInPublic