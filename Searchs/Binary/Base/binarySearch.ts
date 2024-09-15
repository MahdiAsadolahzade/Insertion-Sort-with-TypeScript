// binary search implementation
// first list must be sorted then search begins

import * as readline from "readline";

// create interface for reading lines
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//define question for getting cmd line

const question = (query: string): Promise<string> => {
  return new Promise((resolve) => rl.question(query, resolve));
};

// implement merge sort for sorting giving array

const MergeSort = (array: number[]): number[] => {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let leftSide = MergeSort(array.slice(0, mid));
  let rightSide = MergeSort(array.slice(mid));

  return Merge(leftSide, rightSide);
};

const Merge = (left: number[], right: number[]): number[] => {
  let result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
};

// impement binary search

function BinarySearch(arr: number[], target: number): number {  
    let left = 0;  
    let right = arr.length - 1;  

    while (left <= right) {  
        const mid = Math.floor((left + right) / 2);  
        
        if (arr[mid] === target) {  
            return mid; // Target found  
        }  
        if (arr[mid] < target) {  
            left = mid + 1; // Search in the right half  
        } else {  
            right = mid - 1; // Search in the left half  
        }  
    }  
    
    return -1; 
}

const main = async () => {
  try {
    const array = await question("Enter array nums with spaces \n");
    const value = await question("Enter the value you want to search : ");

    const sortedArray = MergeSort(array.split(" ").map((item) => +item));

    const result = BinarySearch(sortedArray, +value);

    if (result === -1) {
      console.log(`the value isnt in array or the value is invalid `);
    } else {
      console.log(
        `array is sorted : \n`,
        sortedArray,
        `the ${value} is found on index of ${result} in sorted array `
      );
    }
  } catch (err) {
    console.log("there is an error : \n", err);
  } finally {
    rl.close();
  }
};

main();
