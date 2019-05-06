const fs = require('fs');
//
console.log('Inicio');
fs.readdirSync('./../../nodejs-test/2_file_system').forEach(file => {
    console.log(file);
});
console.log('Fin');