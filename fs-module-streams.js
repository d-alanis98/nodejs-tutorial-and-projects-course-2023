const { createReadStream } = require('fs');

const readStream = createReadStream('/var/log/syslog');
readStream.on('data', data => {
    console.log(`Reading ${ data.byteLength } bytes of data`);
});

setTimeout(() => {
    readStream.close();
}, 5000);