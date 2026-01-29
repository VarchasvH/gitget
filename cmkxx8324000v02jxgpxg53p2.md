---
title: "LeetCode 141: Linked List Cycle"
seoTitle: "Detect Cycle in a Linked List"
seoDescription: "Detect cycles in a linked list using HashSet or Tortoise and Hare algorithm. Efficient solutions with different time and space complexities"
datePublished: Wed Jan 28 2026 11:07:25 GMT+0000 (Coordinated Universal Time)
cuid: cmkxx8324000v02jxgpxg53p2
slug: leetcode-141-linked-list-cycle
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769678756818/4253566a-8817-4d88-a742-4f79511c6e46.png
tags: python, data-engineering, leetcode, leetcode-solution, varchasvh, dequest

---

**Date:** January 28, 2026  
**Category:** Linked List  
**Time Taken:** 30 minutes  
**Difficulty:** Easy

---

# Problem Statement

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that** `pos` is not passed as a parameter.

Return `true` *if there is a cycle in the linked list*. Otherwise, return `false`.

**Link:** [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description/?envType=problem-list-v2&envId=wehoe3hj)

---

# My Approach

## **Solution 1 (HashSet):**

* We will create a variable `current` to keep track of the current node and define a HashSet `seen` to store all the nodes we have already encountered.
    
* We will run a while loop until our current node is null, meaning we have reached the end of the linked list. If this happens, it means there is no cycle, and we can return `False`.
    
* While `current` is not null, we will check if the current node is already in `seen`. If it is, then there is a cycle. If not, we will add the current node to `seen` and update `current` to `current.next`.
    

### Solution Code

```python
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        seen = set()
        current = head

        while current:
            if current in seen:
                return True
            
            seen.add(current)
            current = current.next
        
        return False
```

**Complexity**:

Time: O(N) Space: O(N)

---

## **Solution 2 (Tortoise and Hare Algorithm) \[Optimized\]:**

* A more efficient solution uses two pointers: `fast` and `slow`. The slow pointer moves forward by one node, while the fast pointer moves forward by two nodes. If they meet at any point other than the start, it means there is a loop.
    
* We will run a while loop until the `fast` or `fast.next` pointer is null. If they are null, it means there is no cycle.
    
* If `fast` and `fast.next` have not reached null, we will move `slow` to `slow.next` and `fast` to `fast.next.next`. Then, we will check if `fast == slow`. If this happens, it means there is a cycle.
    
* This is a better solution because we don’t need a HashSet to keep track of previous nodes.
    

### Solution Code

```python
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        # We will use Tortoise and Hare algorithm
        # We will use a fast and a slow pointer

        slow, fast = head, head

        # While the fast pointer and the next to that don't point to null
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

            # If slow and fast pointer meet anywhere we have a cycle
            if slow == fast:
                return True

        # If fast reaches null that means there is no cycle
        return False
```

**Complexity**:

Time: O(N) Space: O(1)

---

**Key Takeaway:** Tortoise and Hare Algorithm.

**Pattern**: Linked List | Tortoise and Hare Algorithm

**Series**: 90 Days of Data Engineering Progress: 25/90 problems completed

**Tags**: #DEQuest #LeetCode #Python #DataEngineering #BuildInPublic