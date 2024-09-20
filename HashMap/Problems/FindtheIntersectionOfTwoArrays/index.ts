//Find the Intersection of Two Arrays

const FindIntersect = (
  firstArray: number[],
  secondArray: number[]
): number[] => {
  const numMap: { [key: number]: boolean } = {};
  const result: number[] = [];

  for (let num of firstArray) {
    numMap[num] = true;
  }

  for (let num of secondArray) {
    if (numMap[num]) {
      result.push(num);
      delete numMap[num];
    }
  }

  return result;
};

const main = () => {
  console.log(FindIntersect([1, 2, 2, 1], [2, 2]));
  console.log(FindIntersect([4, 9, 5], [9, 4, 9, 8, 4]));
};
main();
