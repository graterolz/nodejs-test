const fs = require('fs');
//
fs.createReadStream('data1.txt').pipe(fs.createWriteStream('data2.txt'));