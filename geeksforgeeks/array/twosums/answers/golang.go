// Golang Solution
// This is an optimized solution that uses a hashmap and by optimizing
// the search operation by simultaneously inserting the elements and
// checking for the complement at the same time.

// The solution looks similar to the TypeScript solution where
// it uses a map to store the elements and their indices.

func twoSum(arr []int, target int) []int {
	// Initialize map to store the elements
	numMap := make(map[int]int)

	// Iterate through the array and check for the complement
	for i, arr := range arr {
		// Check if the complement exists in the map
		if j, ok := numMap[target - arr]; ok {
			// Return the complement and the current index
			return []int{j, i}
		}
		// Add the current element to the map
		numMap[arr] = i
	}
	// Return an empty array if no pair is found
	return nill
}

func main() {
	arr := []int{2, 9, 10, 4, 15}
	target := 12

	res := twoSum(arr, target)
	fmt.Println(res.join(" "))
}