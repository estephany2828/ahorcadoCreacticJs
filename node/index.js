console.log('Mi primer programa en nj')

const so = require('os');
const plat=so.platform();
console.log(plat)

const emoji=require('node-emoji') 
emoji.get('coffee')
console.log(emoji.get('coffee'))
emoji.emojify('I :heart: :coffee:!')
console.log(emoji.emojify('I :heart: :coffee:!'))

//const ciudades = require('./ciudades');
//console.log(ciudades.medellin())

const fs=require('fs');
fs.readFile('./datos.txt','utf8',(err,data)=>{
    if(err) return;
    console.log(data);
});

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    fs.readFile("./resource/pagina.html",(err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        res.end(data);
    });
});
server.listen(3000); 
