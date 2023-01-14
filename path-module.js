const path = require('path');

// Platform-specific file separator
console.log(path.sep)

// Generate paths with path.join
const filePath = path.join(__dirname, 'subfolder', 'first.json');
console.log(`Generated file path with platform-specific separator = ${ filePath }`);

// Get the base name of a path (the file name with extension)
const baseName = path.basename(filePath);
console.log(`Base name (just the name of the file) = ${ baseName }`);

// Get absolute path (it appends the absolute path to this file [__dirname])
const absolute = path.resolve('subfolder', 'first.json');
console.log(`Absolute path = ${ absolute }`);