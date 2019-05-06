const fs = require('fs');
//
fs.renameSync('data1.txt','data_renombrado.txt');
fs.renameSync('data_renombrado.txt','data1.txt');
/*
fs.rename('data1.txt','data_renombrado.txt',(error)=>{
    if(error) throw error;
    console.log('¡Renombrado!');
});
*/