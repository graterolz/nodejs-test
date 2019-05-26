let promesa = new Promise((resolve,reject)=>{
    //resolve('Exito al procesar los datos');
    reject('Error al procesar los datos');
});

promesa.then((resultado)=>{
    console.log(resultado);
},(error)=>{
    console.log(error);
})