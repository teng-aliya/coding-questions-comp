# Question

## 2 Sum - Find a pair with given sum

Given an array arr[] and an integer target, return the pair of elements whose sum equals target. An element cannot be used twice unless it appears multiple times in the array.

**Note**:  If no pair exist, return an empty array.

### Example

**Input**: arr[] = [2, 9, 10, 4, 15], target = 12
**Output**: [2, 10]
**Explanation**: Pair with sum equal to 12 is (2, 10).

**Input**: arr[] = [3, 2, 4], target = 8
**Output**: []
**Explanation**: No pair exists with sum equal to 8.

**Input**: arr[] = [1, 4, 5, 6, 1], target = 2
**Output**: [1, 1]
**Explanation**: Pair with sum equal to 2 is (1, 1).

### Constraints

1 ≤ arr.size() ≤ 10⁵
0 ≤ arr[i] ≤ 10⁴
1 ≤ target ≤ 10⁴

---

# Personal notes

## Languages

All languages were added on 25/10/2026

1. JavaScript 
2. TypeScript
3. Python
4. Go

## Understanding of question

The point of the question is to see if the coder has a simple understanding on arrays. It highlights on array manipulation and optimization search operations through hashing.

While brute forcing it with double loops could work but it isn't necessarily efficient and seen as slow. I've also read the other solutions that include a binary search or a two pointer sort but I do find the solution that uses hashmaps the fastest.

When looking at the solutions and explanations for golang, people recommended two different solutions that use hashmaps. However, it seems the preferred one was the one-pass hashmaps.