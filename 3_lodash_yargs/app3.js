const _ = require('lodash');
//
let z = [
    {nombre: "Emilio", apellido: "Graterol", edad: 28},
    {nombre: "Jose", apellido: "Hernandez", edad: 28}
]
//
let resultado = _.find(z,{edad: 28});
console.log(resultado);