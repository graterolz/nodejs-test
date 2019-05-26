const fetch = require('node-fetch');

let promesa = fetch('https://api.github.com/users/graterolz');
promesa.then((res)=>{
    return res.json();
}).then((json)=>{
    console.log(json);
});

let promesa2 = fetch('https://api.github.com/users/graterolz/repos');
promesa2.then((res)=>{
    return res.json();
}).then((json)=>{
    console.log(json);
});