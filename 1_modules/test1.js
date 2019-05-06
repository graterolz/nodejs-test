console.log('Ejemplo de require en test1');
let cantidad = 123456;

function saludo () {
    console.log('Hola, desde test1');
}

module.exports.cantidad = cantidad;
module.exports.saludo = saludo;
module.exports.saludo2 = function () {
    console.log('Hola, segundo saludo desde test1');
}