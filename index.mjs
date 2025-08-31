import { Command } from 'commander';
const program = new Command();

import chalk from 'chalk';

//Promisified version of readfile (async)
import fs from 'fs';
function readFilePromisified(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if(err) reject("FIle not found");
            else resolve(data);
        })
    })
}


//Commander code
program 
    .name("Word Count")
    .description("To count the number of words from the given file")
    .version('0.0.0');

program
    .command('count')
    .description('count the number of words')
    .argument('<path>', 'path of the file')
    .action((path) => {
        console.log('Path: ', path);
        readFilePromisified(path)
            .then((data) => {
                let words = data.split(' ').length;
                console.log("You have ", chalk.red(words), " words ", chalk.blue("in this"), " file.");
            })
            .catch((err) => console.log(err));
    });


program.parse();
