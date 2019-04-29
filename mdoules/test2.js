const t1 = require('./test1.js');

module.exports = {
    cantidad : t1.cantidad,
    saludo_t2 : function() {
        console.log('Saludo desde test2');
    },
    saludo2_t2 : () => {
        console.log('Saludo desde test2 v2');
    },
    sumar : (a,b) => {
        return a + b;
    }
}