function threeSum(arr, target) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = Infinity; // Initialize the closest sum to a large value

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; // Pointer to the element on the right side of arr[i]
    let right = arr.length - 1; // Pointer to the last element in the array

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum === target) {
        return sum; // Found an exact match, return the sum
      } else if (sum < target) {
        left++; // Move the left pointer to increase the sum
      } else {
        right--; // Move the right pointer to decrease the sum
      }
    }
  }

  return closestSum; // Return the closest sum found
}

// Example usage:
const arr = [-1, 2, 1, -4];
const target = 1;
const result = threeSum(arr, target);
console.log(result);
