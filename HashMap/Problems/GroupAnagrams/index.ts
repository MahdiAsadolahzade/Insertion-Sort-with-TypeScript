function groupAnagrams(strs: string[]): string[][] {
    const anagramMap: { [key: string]: string[] } = {};

    for (let str of strs) {
        // Step 1: Sort the string to use as a key
        const sortedStr = str.split('').sort().join('');
        
        // Step 2: Group anagrams by their sorted string key
        if (!anagramMap[sortedStr]) {
            anagramMap[sortedStr] = [];
        }
        anagramMap[sortedStr].push(str);
    }

   
    return Object.values(anagramMap);
}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


console.log(groupAnagrams([""]));


console.log(groupAnagrams(["a"]));

