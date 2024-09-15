interface Employee {
    name: string;
    experience: number;
  }
  
  // Merge Sort function for employees based on experience
  const mergeSortEmployees = (array: Employee[]): Employee[] => {
    if (array.length <= 1) return array;
  
    const mid = Math.floor(array.length / 2);
    const leftSide = mergeSortEmployees(array.slice(0, mid));
    const rightSide = mergeSortEmployees(array.slice(mid));
  
    return mergeEmployees(leftSide, rightSide);
  };
  
  // Merge function for Employee objects
  const mergeEmployees = (left: Employee[], right: Employee[]): Employee[] => {
    let result: Employee[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex].experience < right[rightIndex].experience) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };
  
  // Example usage with employee lists from different branches
  const branch1: Employee[] = [
    { name: "Alice", experience: 3 },
    { name: "David", experience: 7 },
  ];
  
  const branch2: Employee[] = [
    { name: "Bob", experience: 2 },
    { name: "Charlie", experience: 6 },
  ];
  
  const branch3: Employee[] = [
    { name: "Eve", experience: 5 },
    { name: "Frank", experience: 9 },
  ];
  
  // Combine all branches into one array
  const allEmployees = [...branch1, ...branch2, ...branch3];
  const sortedEmployees = mergeSortEmployees(allEmployees);
  
  console.log("Sorted employees by experience: ", sortedEmployees);
  