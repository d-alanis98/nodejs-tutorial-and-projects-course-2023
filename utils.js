const _ = require('lodash');

const greeting = ({ name, age }) => console.log(`Hi ${ name }, you are ${ age } years old`);

const getRandomString = length => {
    const values = Array.from('qwertyuiopasdfghjklzxcvbnm1234567890');
    return _.sampleSize(values, length).join('');
}

module.exports = {
    greeting,
    getRandomString
}