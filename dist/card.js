#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";
var email = chalk.bold.blue("mugishapascal@gmail.com");
var number = chalk.bold.blue("+250786493844");
var github = chalk.bold.yellow("https://github.com/MUGISHA-Pascal");
var linkedin = chalk.bold.yellow("www.linkedin.com/in/mugisha-pascal");
var role = chalk.bold.yellow("Software engineer");
var name = chalk.bold("MUGISHA Pascal");
var output = "               ".concat(name, "\n").concat(chalk.bold.green("role"), "         : ").concat(role, " \n").concat(chalk.bold.green("phone number"), " : ").concat(number, " \n").concat(chalk.bold.green("email"), "        : ").concat(email, " \n").concat(chalk.bold.green("linkedin"), "     : ").concat(linkedin, " \n").concat(chalk.bold.green("github"), "       : ").concat(github, " \n");
var frameOutput = boxen(output, {
    padding: 1,
    borderStyle: "round",
    margin: 1,
    borderColor: "green",
});
console.log(frameOutput);
