const fs = require('fs');
//
fs.appendFile('data1.txt','\n¡Demostracion de appendFile en data1.txt!', (error)=>{
    if(error) console.log(`Error ${error}`);
});