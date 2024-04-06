#! /usr/bin/env node


  import inquirer from "inquirer";
  import chalk from "chalk";

  let todoList:string[]=[];
  let conditions=true;
 //print welcome message
 console.log(chalk.bold.rgb(204,204,204)(`\n \t\t <<<===============================>>>`));
 console.log(chalk.magenta.bold("\n\tWelcome to code with nawaz-Todo list Application\n"));
 console.log(chalk.bold.rgb(204,204,204)(`\t\t <<<==================================>>>`));

// // while(conditions){
// // let addTask= await inquirer.prompt([
// //     {
// //         name:"task",
// //         type:"input",
// //         message:chalk.green("Enter your new Task:")
// //     }
// // ]);
// // todoList.push(addTask.task);
// // console.log(`${addTask.task} task added in todo list successfully`);
// // let addMoreTask= await inquirer.prompt([
// //     {
// //         name:"addmore",
// //         type:"confirm",
// //         message:"Do you want to add more task?",
// //         default:"false"
// //     }
// // ]);
// // conditions=addMoreTask.addmore

// // }
// // console.log("Your updated Todo list :" , todoList);

 let main=async()=>{
     while (conditions){
         let option=await inquirer.prompt([
             {
                 name:"choice",
                 type:"list",
                 message: "Select an option you want to do:",
                 choices:["Add Task","Delete Task","Update Task","View Todo-List","Exit"],
             }
         ]);
         if(option.choice==="Add Task"){
             await addTask()
         }
        else if(option.choice==="Delete Task"){
             await deleteTask()
        }
        else if(option.choice==="View Todo-List"){
            await viewTask()
         }
         else if (option.choice==="Exit"){
             conditions=false;
         }
     }
 }
// // function to adde new task to the list
 let addTask=async()=>{
     let newTask=await inquirer.prompt([
         {
             name:"task",
             type:"input",
             message:"Enter your new task :"
         }
     ]);
     todoList.push(newTask.task);
     console.log(`\n ${newTask.task} task added successfully in todo-List`);
 }
// // function to view all Todo-List task
 let viewTask=()=>{
     console.log("\n Your Todo-List: \n");
     todoList.forEach((task,index) =>{
         console.log(`${index}:${task}`)
     })
 }
 // Function to delete a task from the List
 let deleteTask=async ()=>{
     await viewTask()
     let taskIndex=await inquirer.prompt([
         {
             name: "index",
             type:"number",
             message:"Enter the `index no.` of the task you want to delete :",
         }
     ]);
     let deleteTask=todoList.splice(taskIndex.index,1);
     console.log(`\n ${deleteTask} this task has been deleted successfully from your Todo-List\n`);
 }
 main();
