import chalk from "chalk";
let calculation;
// -------------------------------------------------------
export function greeting() {
    console.log(chalk.cyanBright.bold.overline.underline("\n\t Welcome to Currency Converter App"));
}
export function currency(a, b) {
    if (a === "USD") {
        console.log('\n', b, " USD equals to PKR ");
        calculation = b * 289;
        console.log("\t", calculation);
        return (calculation);
    }
    else if (a === "EURO") {
        console.log('\n', b, " EURO equals to PKR ");
        calculation = b * 307;
        console.log("\t", calculation);
        return (calculation);
    }
    else if (a === "RIYAL") {
        console.log('\n', b, " RIYAL equals to PKR ");
        calculation = b * 77;
        console.log("\t", calculation);
        return (calculation);
    }
    else if (a === "TAKKA") {
        console.log('\n', b, " TAKKA equals to PKR ");
        calculation = b * 2;
        console.log("\t", calculation);
        return (calculation);
    }
    else if (a === "POUND") {
        console.log('\n', b, " POUND equals to PKR ");
        calculation = b * 354;
        console.log("\t", calculation);
        return (calculation);
    }
}
