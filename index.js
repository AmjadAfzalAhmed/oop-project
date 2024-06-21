#! /usr/bin/env node
import readline from "readline";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// first created a sleep function containing promise that helps the welcome msg to run for 3 seconds
const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));
// created a welcome msg function that will show the msg in multicolored text
async function welcome() {
    let multiColors = chalkAnimation.rainbow(`\n\t----- Welcome to OOPs Programming -----\n
        \n\t----- Created by Amjad Afzal Ahmed -----\n`);
    await sleep(); // here called the sleep function that pauses for 3 second
    multiColors.stop(); // this line stops the execution of chalkAnimation after given time
}
//defined class person with private property
class Person {
    personality;
    constructor() {
        //here assinged string mystery to private porperty personality
        this.personality = "Mystery";
    }
    // here defined a public method askQuestion that can be accessed from outside the class and it carries a question or answer to be processed
    askQuestion(answer) {
        if (answer === 1) {
            this.personality = "Extravert";
        }
        else if (answer === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still a Mystery";
        }
    }
    // here defined public method getPersonality that returns the value of personality
    getPersonality() {
        return this.personality;
    }
}
// declared a class Student that inherits from class Person
class Student extends Person {
    _name; // use of underscore indicates that the name variable should not be accessed driectly from outside the class
    constructor() {
        super(); //super is a function caller that allows to access constructor of the parent class
        this._name = ""; // here assigned the name with an empty string
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
const askQuestion = readline.createInterface({
    input: process.stdin, //this will take a standard input 
    output: process.stdout, //this will show standard output
});
await welcome(); //here called the function to display welcome msg before execution of the code
console.log(chalk.blue.bold("\n This code is just a conversion of C# code to Typescript, the code was referred by Sir Zia Khan for learning OOP Programming"));
askQuestion.question(//here used the question created through readline to take user input
chalk.greenBright.bold("\n Type 1 if you like to talk to others and type 2 if you would rather keep to yourself: "), (input) => {
    try {
        const answer = parseInt(input); // here used method to convert the string to integer
        const myPerson = new Person(); //here created a new instance of the Person class
        myPerson.askQuestion(answer); //this part will store the answer after being parsed
        console.log(chalk.cyanBright("\n You are: " + myPerson.getPersonality()));
        askQuestion.question(//this part asks the user to input their name
        chalk.redBright.bold("\n What is your name? "), (name) => {
            const myStudent = new Student();
            myStudent.name = name;
            console.log(chalk.blueBright.bold("\n Your name is: " +
                myStudent.name +
                " and your personality type is: " +
                myStudent.getPersonality()));
            askQuestion.close(); //this line closes the interface of readline
        });
    }
    catch {
        console.log("Please enter an integer value.");
        askQuestion.close();
    }
});
