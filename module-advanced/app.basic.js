const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);

/**
 * The interesting of node js is:
 * _Before, javascript run on the browser, working only iwth window or document object
 * _Now, javascrtip can get the information about the operation system
 * In nodejs javascript run outside the browser => run on server: working with operation system,
 * listens http request on a given port, files, build web server
 */

var fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

/**
 * Every asynchronous methods take a function as their last arguemnt
 * We will call this function when the asynchronous operation completes
 * We call this function is CALLBACK
 */

fs.readdir('./', callback);

function callback(err, files) {
  if (err) console.log('Error', err);
  else console.log('Result', files);
}
console.log(callback);
