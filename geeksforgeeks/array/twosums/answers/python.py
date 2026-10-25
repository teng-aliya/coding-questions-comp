# Python Solution
# Using HashSet

# Function to find a pair whose sum is equal to the given target
def twoSum(arr, target):
    # Initialize an empty array and set to store the elements
    res = []
    st = set()

    for i in range(len(arr)):
        # Calculate the complement so that arr[i] + complement = target
        complement = target - arr[i]

        # Check if the complement exists in the set
        if complement in st:
            # Push complement & number to res
            res.append(complement)
            res.append(arr[i])
            break

        # Add the current element to the set
        st add(arr[i])

    return res

if __name__ == "__main__":
    arr = [2, 9, 10, 4, 15]
    target = 12

    res = twoSum(arr, target)

    for i in range(len(res)):
        print(res[i], end=" ")