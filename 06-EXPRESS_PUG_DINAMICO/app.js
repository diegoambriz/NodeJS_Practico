var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(peticion, respuesta){
    respuesta.render('index.pug', {
        titulo:"El nombre de mi App",
        textoParrafo: "Nuestra tienda de camisetas ofrece lo mejor, satisfaccion 100% garantizada" 
    })
})

app.listen(3000, function(){
    console.log("Escuchando en el puerto 3000");
})