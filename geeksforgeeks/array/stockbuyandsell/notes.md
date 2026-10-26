# Question

## Stock Buy and Sell – Max one Transaction Allowed

Given an array **prices[]** of non-negative integers, representing the prices of the stocks on different days. The task is to find the maximum profit possible by buying and selling the stocks on different days when **at most one** transaction is allowed. Here one transaction means 1 buy + 1 Sell. If it is not possible to make a profit then return 0.

**Note**: Stock must be bought before being sold.

### Example

**Input**: prices[] = [7, 10, 1, 3, 6, 9, 2]
**Output**: 8
**Explanation**: You can buy the stock on day 2 at price = 1 and sell it on day 5 at price = 9. Hence, the profit is 8.

**Input**: prices[] = [7, 6, 4, 3, 1]
**Output**: 0 
**Explanation**: Here the prices are in decreasing order, hence if we buy any day then we cannot sell it at a greater price. Hence, the answer is 0.

**Input**: prices[] = [1, 3, 6, 9, 11]
**Output**: 10 
**Explanation**: Since the array is sorted in increasing order, we can make maximum profit by buying at price[0] and selling at price[n-1].

### Constraints

1 ≤ prices.size() ≤ 10⁵
0 ≤ prices[i] ≤ 10⁴

---

# Personal notes

## Languages

1. JavaScript (26/10/2026)
2. TypeScript (26/10/2026)
3. Python (26/10/2026)
4. Go

## Understanding of question
At first glance, it's easy to get stuck on the fact that the questions requests you to find a kind of difference between each pair. I've realised that it's asking for the minimum and maximum possible number in the array. It also requires you to seek the "profit" which essentially just means the difference between the current profit and minimum profit. The sentence can be confusing when read quickly.

As long as you single out the important portions and goals, it should be easier to understand.