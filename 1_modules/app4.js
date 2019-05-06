const t2 = require('./test2.js');

t2.saludo_t2();
t2.saludo2_t2();

setTimeout(() => {
    console.log('Termine');
}, 2000);

let resultado = t2.sumar(10,30);
console.log(resultado);
console.log(t2.cantidad);