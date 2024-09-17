//bubble sort implementation

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query: string): Promise<string> => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const BubbleSort = (array: number[]): number[] => {
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        //swap
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
};

const main = async () => {
  try {
    const inputArray = await askQuestion("Enter your Array with spaces ");
    const arr = inputArray.split(" ").map((item) => +item);
    console.log(`sorted Array : \n`, BubbleSort(arr));
  } catch (err) {
    console.log(err);
  } finally {
    rl.close();
  }
};

main();
