import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Question = (query: string): Promise<string> => {
  return new Promise((resolve) => rl.question(query, resolve));
};

// Optimized version using a Set
const hasUniqueChars = (str: string): boolean => {
  const charSet = new Set<string>();

  for (let i = 0; i < str.length; i++) {
    if (charSet.has(str[i])) {
      return false; // If character is already in the set, it's not unique
    }
    charSet.add(str[i]);
  }

  return true; // All characters are unique
};

const main = async () => {
  try {
    const inputString = await Question("Enter your input string: ");
    console.log(
      `The string "${inputString}" has all unique characters: ${hasUniqueChars(
        inputString
      )}`
    );
  } catch (err) {
    console.log(err);
  } finally {
    rl.close();
  }
};

main();
