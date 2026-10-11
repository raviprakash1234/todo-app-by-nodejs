import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\n1: Add a task");
  console.log("2: View Task");
  console.log("3: Exist");
  rl.question("Choose an option:", handleInput);
};

const handleInput = (option) => {
  if (option == 1) {
    rl.question("Enter the task", (task) => {
      todos.push(task);
      console.log("Task added");
      showMenu();
    });
  } else if (option == 2) {
    console.log("\n your todos list");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
    showMenu();
  } else if (option == 3) {
    console.log("Good bye");
    rl.close();
  } else {
    console.log("Invalid option. Please try again");
  }
};
showMenu();
