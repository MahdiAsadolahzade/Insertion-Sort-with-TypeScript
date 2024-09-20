import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Question = (query: string): Promise<string> => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const firstUniqCharacter = (str: string): number => {
  const charCountMap: { [key: string]: number } = {};

  for (let char of str) {
    charCountMap[char] = (charCountMap[char] || 0) + 1;
  }

  for (let i = 0; str.length; i++) {
    if (charCountMap[str[i]] === 1) {
      return i;
    }
  }

  return -1;
};

const main = async () => {
  try {
    const inputString = await Question("Enter your String Word : ");
    const result = firstUniqCharacter(inputString);

    console.log(
      `${
        result === -1
          ? `There are no non-repeating characters`
          : `index of ${result} or the char of '${inputString.charAt(
              result
            )}'  is the first non-repeating character `
      }`
    );
  } catch (error) {
    console.log("tehre is an error :\n", error);
  } finally {
    rl.close();
  }
};

main();
