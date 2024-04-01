#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.clear;
console.log(chalk.blue.bold("\n \t This is Number Guessing Game\t"));

const rendom_number = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    type: "number",
    name: "guess_number",
    message: "Please guess a number between 1 to 6 =  ",
  },
]);
console.log(answer);

if (answer.guess_number === rendom_number) {
  console.log(
    chalk.green(" \n \t Congratulation! \n You guess a right number")
  );
} else {
  console.log(
    chalk.red(" \n \tUnfortunatly! You guess a wrong number\n") +
      chalk.green(" \n \tThe correct number is = " + rendom_number)
  );
}
