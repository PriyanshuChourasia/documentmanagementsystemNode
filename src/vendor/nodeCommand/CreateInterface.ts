// const fs  = require("node:fs")
const readline = require("node:readline");


function runCommand(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
    rl.question(`What is you name? `,(name:string) =>{
        console.log(name);
        rl.close();
    })
} 


export default runCommand;


// fs.writeFileSync("Interface.ts","export interface UserInterface{}");