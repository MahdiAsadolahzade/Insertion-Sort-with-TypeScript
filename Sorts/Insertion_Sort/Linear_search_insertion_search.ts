// Linear Search With Insertion Sort

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query: string): Promise<string> => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const main = async () => {
  try {
    const firstInput = await askQuestion("Enter the array with spaces : ");
    const secondInput = await askQuestion("Enter the value for searchng : ");

    const array = firstInput.split(" ").map((item) => {
      return +item;
    });
    const arrayLen = array.length;
    let finalIndex = -1;

    for (let i = 0; i < arrayLen; i++) {
      if (array[i] === +secondInput) {
        finalIndex = i;
        break;
      }
    }

    console.log(
      `${
        finalIndex === -1
          ? `the value not found in array`
          : `value is found on index of ${finalIndex} in array`
      }`
    );
  } catch (err) {
    console.log("there is error ", err);
  } finally {
    rl.close();
  }
};

main();
