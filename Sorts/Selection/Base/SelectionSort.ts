import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  rl.question("\n Enter your Array with spaces \n", (answer) => {
    let array = answer.split(" ").map((item) => {
      return +item;
    });
    let arrayLen = array.length;

    for (let i = 0; i < arrayLen; i++) {
      let minIndex = i;

      for (let j = i + 1; j < arrayLen; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }

    console.log("sorted array with selection array : ", array);
    rl.close();
  });
}

main();
