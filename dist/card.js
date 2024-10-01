import chalk from "chalk";
import boxen from "boxen";
const email = chalk.bold.blue("mugishapascal@gmail.com");
const number = chalk.bold.blue("+250786493844");
const github = chalk.bold.yellow("https://github.com/MUGISHA-Pascal");
const linkedin = chalk.bold.yellow("www.linkedin.com/in/mugisha-pascal");
const role = chalk.bold.yellow("Software engineer");
const output = `  
            MUGISHA Pascal
${chalk.bold.green("role")}         : ${role} 
${chalk.bold.green("phone number")} : ${number} 
${chalk.bold.green("email")}        : ${email} 
${chalk.bold.green("linkedin")}     : ${linkedin} 
${chalk.bold.green("github")}       : ${github} 
`;
const frameOutput = boxen(output, {
    padding: 1,
    borderStyle: "round",
    margin: 1,
    borderColor: "green",
});
console.log(frameOutput);
