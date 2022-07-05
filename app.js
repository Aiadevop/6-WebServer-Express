//Trabajando con Express 
//Instalamos Express nmp i express


//Código que aparece en la página de npm express

const express = require('express');
const hbs = require('hbs');

const app = express()
const port = 8090;

//Para usar hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});

//Servir contenido estático ej html

app.use(express.static('public'));


app.get('/', (req, res) => {
    //renderizamos(permite compartir código) la ruta con el archivo home.hbs
    res.render('home', {
        nombre: 'Lara',
        titulo: 'Renderizando'
    });

});

app.get('/generic', (req, res) => {
    //renderizamos(permite compartir código) la ruta con el archivo home.hbs
    res.render('generic', {
        nombre: 'Lara',
        titulo: 'Renderizando'
    });

});

app.get('/elements', (req, res) => {
    //renderizamos(permite compartir código) la ruta con el archivo home.hbs
    res.render('elements', {
        nombre: 'Lara',
        titulo: 'Renderizando'
    });

});

//Si lo de arriba se ejecuta no se ejecuta esta parte de abajo.
//Si queremos que funcione alguna otra ruta hay que definirla
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});

//Cualquier otra ruta.
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html'); //Le mando la ruta del archivo que quiero servir
});


app.listen(port, () => {
    console.log(`Está escuchando el puerto ${port}`)
})