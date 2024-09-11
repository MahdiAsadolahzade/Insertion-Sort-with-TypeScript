type StudentType = {
  name: string;
  score: number;
};

const ExampleInput: StudentType[] = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 78 },
  { name: "Charlie", score: 92 },
  { name: "David", score: 67 },
];


const StudentSorting =(data:StudentType[]) :StudentType[]=>{
   
    const size = data.length;
    for(let i=0; i<size ; i++){
        let minIndex=i;
        for(let j=i+1; j<size ;j++){
            if(data[j].score<data[minIndex].score){
                minIndex =j;
            }
        }

        //swap
        let temp = data[i]
        data[i] = data[minIndex]
        data[minIndex] = temp;
    }

    return data
}

const main = ()=>{
    console.log(`the Sorting Students Problem with Selecting Sort \n `);
    
    console.log(`Sorted Students Based on Scores \n`,StudentSorting(ExampleInput));
    
}

main()