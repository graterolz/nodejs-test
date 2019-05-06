// node app5.js usuario Emilio

const _ = require('lodash');
// n
//
let comando = process.argv[2];
//console.log(comando);

if(comando === 'usuario'){
    if(process.argv[3] === 'Emilio'){
        let z = [
            {nombre: "Emilio", apellido: "Graterol", edad: 28},
            {nombre: "Jose", apellido: "Hernandez", edad: 28}
        ]
        //
        let resultado = _.find(z,{nombre: process.argv[3]});
        console.log(resultado);
    }else{
        console.log('Usuario no valido');
    }
}