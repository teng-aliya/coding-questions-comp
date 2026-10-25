// TypeScript Solution
// Class is not entirely necessary for this case
// Instead of an array and set, we can also use a map
// This method is not following the same practice as the JavaScript
// And Python Solutions but it uses the same concept of hashmaps

function twoSum(arr: number[], target: number): number[] {
    // Initialize an empty map to store the elements
    let map: { [key: number]: number } = {};

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[arr[i]] = i
    }
    return [];
}