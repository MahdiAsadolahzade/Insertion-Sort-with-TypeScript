// Insertion Sort

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your array with space \n", (answer) => {
  // array with length of n
  let array = answer.split(" ").map((item) => {
    return +item;
  });
  let n = array.length;

  // proccess the insertion sort

  for (let j = 1; j < n; j++) {
    let key = array[j];
    let i = j - 1;
    while (i >= 0 && key < array[i]) {
      array[i + 1] = array[i];
      i = i - 1;
    }
    array[i + 1] = key;
  }

  // log the res
  console.log(array);
  

  rl.close();
});
