const { greeting } = require('./utils');
const _ = require('lodash');

const greetingData = { name: 'Damian', age: 24 };
const clonedData = Object.assign({ }, greetingData);


greeting(greetingData);

console.log(_.isEqual(greetingData, clonedData));

const items = [1, [2, [3, [4]]]];
const flatItems = _.flattenDeep(items);

console.log(flatItems);
