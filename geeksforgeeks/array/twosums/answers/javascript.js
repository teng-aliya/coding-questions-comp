// JavaScript Solution
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
class Solution {
    twoSum(arr, target) {
        let res = [];
        let st = new Set();
        
        for (let i = 0; i < arr.length; i++){
            // Calculate the complement so that
            // arr[i] + complement = target
            let complement = target - arr[i];
            
            // Check if the complement exists in the set
            if (st.has(complement)) {
                // Push complement & number its own to res
                // This way you don't have to loop twice
                res.push(complement);
                res.push(arr[i])
                break
            }
            
            // Add the current element to the set
            st.add(arr[i]);
        }
        return res;
    }
}

const arr = [2, 9, 10, 4, 15];
const target = 12;

const res = twoSum(arr, target);
console.log(res.join(" "));