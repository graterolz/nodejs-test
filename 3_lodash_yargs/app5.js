// node app5.js --usuario=Emilio
// o
// node app5.js --usuario Emilio

const _ = require('lodash');
const argv = require('yargs').argv;
//
if(argv.usuario === 'Emilio'){
    let z = [
        {nombre: "Emilio", apellido: "Graterol", edad: 28},
        {nombre: "Jose", apellido: "Hernandez", edad: 28}
    ]
    //
    let resultado = _.find(z,{nombre: argv.usuario});
    console.log(resultado);
} else{
    console.log('Usuario no valido');
}