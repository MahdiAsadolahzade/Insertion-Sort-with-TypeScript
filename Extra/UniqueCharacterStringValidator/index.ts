//Unique Character String Validator

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Question = (query: string): Promise<string> => {
  return new Promise((resolve) => rl.question(query, resolve));
};

// returns true if all chars are unique
const hasUniqueChars = (str: string): boolean => {
  let strArray = str.split("");
  let isAllUnique = true;

  for (let i = 0; i < strArray.length; i++) {
    let flag = strArray[i];
    for (let j = i + 1; j < strArray.length; j++) {
      if (flag === strArray[j]) isAllUnique = false;
    }
  }

  return isAllUnique;
};

const main = async () => {
  try {
    const inputString = await Question("Eneter your input string : ");

    console.log(
      `the string ${inputString} isAllUnique ? : ${hasUniqueChars(inputString)}`
    );
  } catch (err) {
    console.log(err);
  } finally {
    rl.close();
  }
};

main();
