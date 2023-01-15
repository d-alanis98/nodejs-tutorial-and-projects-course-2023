// Synchronous methods
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const contentPath = path.join(__dirname, 'content');
const pathToFile = path.join(contentPath, 'first.json');


const file = readFileSync(pathToFile, 'utf-8');
console.log(file);

const data = {
    name: 'Damian Alanis',
    age: 24
}

// If the file does not exist, it is going to be created
const pathToNewFile = path.join(contentPath, 'second.json');
writeFileSync(pathToNewFile, JSON.stringify(data, null, 4), {
    encoding: 'utf-8',
});

const dataToWrite = JSON.stringify(new Array(100_000).fill('Hello world'));
writeFileSync('./content/first.json', dataToWrite, 'utf-8');