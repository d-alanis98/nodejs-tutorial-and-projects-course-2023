const { readFile, writeFile } = require('fs');

// Callbacks
readFile('./content/first.json', 'utf-8', (error, data) => {
    if(error) {
        console.error(error.message);
        process.exit(1);
    }

    const result = JSON.parse(data);
    console.log(result);
});

const dataToWrite = JSON.stringify({
    name: 'Damian Alanis Ramirez',
    age: 24
}, null, 4);

writeFile('./content/second-async.json', dataToWrite, 'utf-8', error => {
    if(error) {
        console.error(error.message);
        process.exit(1);
    }
    console.log('Content was successfully written to the file');
})