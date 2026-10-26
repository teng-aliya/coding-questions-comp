/**
 * TypeScript Solution
 * This solution also is similar to the JavaScript and Python solutions
 */

function maxProfit(prices: number[]): number {
    // Lowest number in the array (so far)
    let minSoFar = prices[0]
    // Result
    let res = 0
    // Length
    let len = prices.length

    for (let i = 1; i < len; i++) {
        // Update the min value we've seen so far
        minSoFar = Math.min(minSoFar, prices[i])

        // Update the results to get the maximum profit between the current price and the minimum price
        res = Math.max(res, prices[i] - minSoFar)
    }

    return res
}