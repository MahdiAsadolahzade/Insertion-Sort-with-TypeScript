const optimizedTwoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>(); // Create a hash map to store number and its index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate complement

    if (map.has(complement)) {
      // Check if the complement is already in the map
      return [map.get(complement)!, i]; // Return the index of the complement and current index
    }

    map.set(nums[i], i); // Otherwise, store the current number and its index in the map
  }

  return []; // Return an empty array if no solution is found (shouldn't happen if the input guarantees a solution)
};

console.log(optimizedTwoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
