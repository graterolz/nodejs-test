const os = require('os');
//
let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();
//
console.log(cpu);
console.log(sistema);
console.log(usuario);