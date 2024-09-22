function groupAnagramsOptimized(strs: string[]): string[][] {
    const anagramMap: { [key: string]: string[] } = {};

    for (let str of strs) {
        // Initialize an array to store character counts (26 for lowercase English letters)
        const charCount: number[] = new Array(26).fill(0);
        
        for (let char of str) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        // Create a unique key based on character counts
        const key = charCount.join('#'); // Using '#' as a delimiter to avoid ambiguity

        // Group the anagrams in the hash map
        if (!anagramMap[key]) {
            anagramMap[key] = [];
        }
        anagramMap[key].push(str);
    }

    // Return the grouped anagrams
    return Object.values(anagramMap);
}

// Test cases
console.log(groupAnagramsOptimized(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagramsOptimized([""]));
// Output: [[""]]

console.log(groupAnagramsOptimized(["a"]));
// Output: [["a"]]
