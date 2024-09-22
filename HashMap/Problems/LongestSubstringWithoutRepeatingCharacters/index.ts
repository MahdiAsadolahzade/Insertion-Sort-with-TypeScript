function lengthOfLongestSubstring(s: string): number {
  const charIndexMap: { [key: string]: number } = {}; // Hash map to store the last seen index of characters
  let left = 0; // Left pointer of the sliding window
  let maxLength = 0; // Variable to store the maximum length of substring

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    // If the character is already in the hash map, move the left pointer to the right of its previous position
    if (currentChar in charIndexMap && charIndexMap[currentChar] >= left) {
      left = charIndexMap[currentChar] + 1;
    }

    // Update the last seen index of the current character
    charIndexMap[currentChar] = right;

    // Calculate the maximum length of the substring
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 ("wke")
console.log(lengthOfLongestSubstring("")); // Output: 0
