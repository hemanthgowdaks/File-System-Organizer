#!/usr/bin/env node
//dont forget shebang syntax //the first line has to be in the first line
const fs = require("fs")
let path = require("path")
let helpObj = require("./commands/help")
let treeObj = require("./commands/tree")
let organizeObj = require("./commands/organize")

//To get input from the user
let inputArr = process.argv.slice(2) // it will return in the form of array
//here the process.argv is the thing to get input. Slice(2) is used because when we try to run the code in the terminal
//using node main.js node and main.js become first 2(0,1 index) of the array and we want everything after 1st index so 2
console.log(inputArr)

let destPath;
let command = inputArr[0];
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
switch (command) {
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Enter the right command")
        break;
}
