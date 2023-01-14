const { readFile, writeFile } = require('fs').promises;

const main = async () => {
    try {
        await readJSONFile();
        await writeJSONFile({ name: 'Damian Alanis Ramirez', age: 24 });
    } catch(error) {
        console.error(error);
    }
}

const readJSONFile = async () => {
    const content = await readFile('./content/second.json', 'utf-8');
    console.log(JSON.parse(content));
}

const writeJSONFile = async data => {
    if(typeof data === 'object')
        data = JSON.stringify(data);
    await writeFile('./content/second-promises.json', data, 'utf-8');
}

main();