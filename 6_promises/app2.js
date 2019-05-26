let prom = require('./promesa');

prom.calcular(2,3).then((resultado) => {
    console.log(resultado);
}, (error) => {
    console.log(error);
});