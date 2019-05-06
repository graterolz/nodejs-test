const _ = require('lodash');
//
let x = {"nombre": "Emilio"}
let y = {"apodo": "Graterolz"}
//
let resultado = _.assign(x,y);
console.log(resultado);