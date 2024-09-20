function firstUniqChar(s: string): number {
  const charCountMap: { [key: string]: number } = {};

  // Step 1: Count occurrences of each character
  for (let char of s) {
    charCountMap[char] = (charCountMap[char] || 0) + 1;
  }

  // Step 2: Find the first character with a count of 1
  for (let i = 0; i < s.length; i++) {
    if (charCountMap[s[i]] === 1) {
      return i; // Return the index of the first unique character
    }
  }

  return -1; // No unique character found
}

// Test cases
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1
