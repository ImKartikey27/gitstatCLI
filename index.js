#!/usr/bin/env node
import chalk from "chalk";
import {argv} from "process"
import { colors, icons , message} from "./lib/theme.js"

console.log(chalk.red("Hello, Welcome to GitStats CLI!"));



argv.forEach((val, index) => {
    if(index === 2 && val === "-help"){
        console.log("Help will be added soon!");
    }

})