const fs = require('fs');
//
fs.readdir('./../../nodejs-test/2_file_system',(error, files)=>{
    files.forEach(file => {
        console.log(file);
    });
});