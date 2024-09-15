// implementation merge sort

const MergeSort = (array: number[]): number[] => {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let leftSide = MergeSort(array.slice(0, mid));
  let rightSide = MergeSort(array.slice(mid));

  return Merge(leftSide, rightSide);
};

const Merge = (left: number[], right: number[]): number[] => {
  let result: number[] = [];
  let rightIndex = 0;
  let leftIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};


console.log(MergeSort([1, 6, 4, 0, 2]));
