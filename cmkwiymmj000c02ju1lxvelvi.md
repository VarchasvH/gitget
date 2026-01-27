---
title: "LeetCode 206: Reverse Linked List"
seoTitle: "Reverse Linked List Guide"
seoDescription: "Reverse a singly linked list using iterative and recursive approaches with time complexity O(N). Learn linked list reversal techniques"
datePublished: Tue Jan 27 2026 11:40:23 GMT+0000 (Coordinated Universal Time)
cuid: cmkwiymmj000c02ju1lxvelvi
slug: leetcode-206-reverse-linked-list
tags: python, leetcode, build-in-public, leetcode-solution, varchasvh, dequest

---

**Date:** January 27, 2026  
**Category:** Linked List  
**Time Taken:** 50 minutes  
**Difficulty:** Easy

---

## Problem Statement

Given the `head` of a singly linked list, reverse the list, and return *the reversed list*.

**Link:** [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/description/?envType=problem-list-v2&envId=wehoe3hj)

---

## My Approach

**Initial thought:**  
The straightforward solution would be to first store the node values in a list or stack and then reverse the nodes using that list. However, this is not an ideal solution because it doesn't actually reverse the way the nodes are linked.

---

## **Solution 1 (Iterative):**

* Initialize `curr` to the list head and `prev` to NULL.
    

* Save the address of the next node in a temporary variable `next_node`, so you do not lose the rest of the list.
    
* Change the current node's next pointer to point to the previous node.
    
* Move the `prev` pointer forward to the current node.
    
* Move the `curr` pointer forward to the saved next node.
    
* Repeat the loop until `curr` is NULL and return `prev` as the new head.
    

### Solution Code

```python
def reverseList(head):
    prev = None
    curr = head
    
    while curr:
        next_node = curr.next  # 1. Temporarily store the next node
        curr.next = prev       # 2. Reverse the link (current node points back)
        prev = curr            # 3. Move 'prev' one step forward
        curr = next_node       # 4. Move 'curr' one step forward
        
    return prev  # 'prev' is now the new head
```

**Complexity**:

Time: O(N) Space: O(1)

---

## **Solution 2 (Recursive):**

* Check if the current node is NULL or the very last node in the list.
    
* Return the current node if either condition is true, as a single node is already its own reversal.
    
* Recursively call the function for the rest of the list and store the returned result as the new head.
    
* Access the next node and set its next pointer to the current node to flip the direction of the link.
    
* Set the current node's next pointer to NULL to break the old forward link and prevent a cycle.
    
* Return the stored new head back through each level of the recursion..
    

### Solution Code

```python
def reverseList(head):
    # Base Case: if list is empty or has only one node
    if not head or not head.next:
        return head
    
    # 1. Recursively find the new head (the original tail)
    new_head = reverseList(head.next)
    
    # 2. Re-wire: Make the next node point back to the current node
    head.next.next = head
    
    # 3. Disconnect: Set the current node's next to None
    head.next = None
    
    return new_head
```

**Complexity**:

Time: O(N) Space: O(N)

---

**Key Takeaway:** Understood how linked lists work.

**Pattern**: Linked List

**Series**: 90 Days of Data Engineering Progress: 22/90 problems completed

**Tags**: #DEQuest #LeetCode #Python #DataEngineering #BuildInPublic