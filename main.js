import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.magenta.bold("\n\tWelcome to code with nawaz-Todo list Application\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green("Enter your new Task:")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} task added in todo list successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task?",
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("Your updated Todo list :", todoList);
