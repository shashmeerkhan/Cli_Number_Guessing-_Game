#! /user/bin/env node
import inquirer from "inquirer";

//copmuter will generate a rendom number

//user input a guess number

//compare user input with computer generated number then show result

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
  console.log(" Congratulation! \n You guess a right number");
} else {
  console.log(
    " Unfortunatly! You guess a wrong number" +
      " \nThe correct number is = " +
      rendom_number
  );
}
