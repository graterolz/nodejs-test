const fs = require('fs');
const os = require('os');
//
let cpu = os.cpus();
//
let cpu_string = JSON.stringify(cpu);
fs.appendFile('message.txt', `Informacion del cpu: ${cpu_string}`, function(err){
    if (err){
        console.log(err);
    }else{
        console.log('Creado el archivo message.txt');
    }    
});