import inquirer from "inquirer";
import chalk from "chalk";
//--------------------------------------
export let currencies = await inquirer.prompt([{
        type: 'rawlist',
        name: 'currency',
        message: chalk.gray.italic.bold("\nSelect a currency you want to convert into PKR"),
        choices: ['USD', 'EURO', 'RIYAL', 'TAKKA', 'POUND']
    }]);
export let amount = await inquirer.prompt([{
        type: 'number',
        name: "money",
        message: chalk.red.bgBlack(("Enter the amount of money\n"))
    }]);
