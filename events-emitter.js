const EventEmitter = require('events');
const { getRandomString } = require('./utils');

const emitter = new EventEmitter();

emitter.on('response', data => {
    console.log(`Data received = ${ data }`);
});

emitter.emit('response', getRandomString(15));
emitter.emit('response', getRandomString(15));