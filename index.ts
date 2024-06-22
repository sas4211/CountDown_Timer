#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";

let input = await inquirer.prompt([{
    type: "number",
    name: "start",
    message: "Enter the start time (in seconds) :"
}])

let time:number = input.start;

/////console.log(input.start);

function startcounter(val: number){

    ////   setInterval(function(){
/////console.log("Hello")}, 1000) /// milliseconds

let intialTime =new Date();
////console.log(intialTime);

let intervalTime = new Date().setSeconds(intialTime.getSeconds() + val)

let intervalTimeFormate = new Date(intervalTime);

console.log(intervalTimeFormate);

setInterval(() =>{
    let currentTime = new Date();
    let timediff = differenceInSeconds(intervalTimeFormate,currentTime);
    console.log(timediff);
    if(timediff <= 0){
        console.log(chalk.red("Time Up!"));
        process.exit();
    }
    let minute = Math.floor(timediff/60);
    let seconds = Math.floor(timediff % 60);
    console.log(chalk.blue(`${minute} minutes and ${seconds} seconds remaining`)
    
)}, 1000)
}
startcounter(time)    
console.log(chalk.red("Timer started!"));



