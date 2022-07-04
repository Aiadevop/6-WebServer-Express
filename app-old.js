//console.log('Hola Mundo.');
const http = require('http');

//Crea el servidor http. 
http.createServer((req, res) => {
        //req es cualquier cliente que se conecte
        //res es la respuesta que va a dar el servidor.

        console.log(req);

        //Si quisieramos cambiar el status. 

        //res.writeHead(200, { 'Content-Type': 'text/plain' }); //devuelve un archivo de texto.

        //res.writeHead(200, { 'Content-Type': 'application/json' });//devuelve un json

        //devuelve un csv
        // res.setHeader('Content-Disposition', 'attachment;filename=lista.csv');
        // res.writeHead(200, { 'Content-Type': 'application/csv' });

        // 200 todo OK
        // 201 se acaba de crear un registro
        // 404 error. Page not found.

        //objeto del lado de javascript para que lo soporte con el json
        // const persona = {
        //     id: 1,
        //     nombre: 'Darío'
        // }
        //res.write(JSON.stringify(persona)); //lo serializamos no puede ser un objecto tiene que ser un String.

        //para trabajar con el csv sin Express
        // res.write('id;nombre\n');
        // res.write('1;Dario\n');
        // res.write('2;Laura\n');
        // res.write('3;Iago\n');
        // res.write('4;Lara\n');

        res.write('Hola Mundo')
        res.end(); //ya termine que respuesta va a dar cuando yo pongo localhost:8090
    })
    .listen(8090); //en que puerto corre

console.log('Escuchando el puerto', 8090);