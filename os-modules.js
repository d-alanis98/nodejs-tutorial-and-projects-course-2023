const os = require('os');


// Information about the current user
const { uid, username, homedir } = os.userInfo();
console.log(`User ID = ${ uid }, user name = ${ username }, homedir = ${ homedir }`);

// Uptime
const uptime = os.uptime();
console.log(`System uptime is ${ uptime } seconds`);

// OS information
const currentOs = {
    name: os.type(),
    distribution: os.version(),
    architecture: os.arch(),
    release: os.release(),
    freeMemory: os.freemem()
}

console.log(currentOs)