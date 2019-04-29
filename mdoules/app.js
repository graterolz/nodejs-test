const os = require('os');
const fs = require('fs');

const t1 = require('./test2.js');
//
let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();
//
//console.log(cpu);
//console.log(sistema);
//console.log(usuario);
//
/*
let cpu_string = JSON.stringify(cpu);
fs.appendFile('message.txt', `Informacion del cpu: ${cpu_string}`, function(err){
    if (err){
        console.log(err);
    }else{
        console.log('Creado el archivo message.txt');
    }    
});
*/
/*t1.saludo();
t1.saludo2();
*/
t1.saludo_t2();
t1.saludo2_t2();

setTimeout(() => {
    console.log('Termine');
}, 2000);

let resultado = t1.sumar(10,30);
console.log(resultado);
console.log(t1.cantidad);