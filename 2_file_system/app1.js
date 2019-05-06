const fs = require('fs');
//
fs.readFile('data1.txt','utf-8', (error,data)=>{
    if(error){
        console.log(`Mensaje de error : ${error}`);
    }else{
        console.log(data);
    }
});