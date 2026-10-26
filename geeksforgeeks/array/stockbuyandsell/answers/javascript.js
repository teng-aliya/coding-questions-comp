// JavaScript Solution
/**
 * This solution uses a single loop to iterate through the array
 * and checks for the minimum and maximum by using the Math.min and
 * Math.max functions.
 */
/**
 * @param {number[]} prices
 * @returns {number}
 */

class Solution {
    maxProfit(prices) {
        // Lowest number in the array (so far)
        let minSF = prices[0]
        // Length
        let len = prices.length
        // Result
        let res = 0
        
        for (let i = 1; i < len; i++){
            // Update the min we've seen so far
            minSF = Math.min(minSF, prices[i])
            
            // Update results to get the maximum profit between the current price and the minimum price we've seen so far
            res = Math.max(res, prices[i] - minSF)
        }
        
        return res
    }
}