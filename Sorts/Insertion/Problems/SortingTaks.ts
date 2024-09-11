type Task = {
  name: string;
  priority: number;
  deadline: string; 
};

const tasks: Task[] = [
  { name: "Task 1", priority: 2, deadline: "2024-09-10" },
  { name: "Task 2", priority: 1, deadline: "2024-09-09" },
  { name: "Task 3", priority: 2, deadline: "2024-09-08" },
  { name: "Task 4", priority: 3, deadline: "2024-09-12" },
  { name: "Task 5", priority: 1, deadline: "2024-09-15" },
];

// Helper function to parse and compare dates
const compareDates = (date1: string, date2: string): number => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1.getTime() - d2.getTime(); // Returns negative if date1 is sooner than date2
};

const insertionSortTasks = (tasks: Task[]): Task[] => {
  for (let j = 1; j < tasks.length; j++) {
    const key = tasks[j];
    let i = j - 1;

    // Insert `key` into the sorted part of the array
    while (
      i >= 0 &&
      (tasks[i].priority < key.priority ||
        (tasks[i].priority === key.priority &&
          compareDates(tasks[i].deadline, key.deadline) > 0))
    ) {
      tasks[i + 1] = tasks[i];
      i = i - 1;
    }
    tasks[i + 1] = key;
  }
  return tasks;
};

// Sort the tasks by priority and deadline
const sortedTasks = insertionSortTasks(tasks);
console.log("Sorted tasks by priority and deadline:", sortedTasks);
