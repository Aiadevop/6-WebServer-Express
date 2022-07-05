*   npm init -y (y así instalemos el .json por defecto.)
*   Instalamos Express nmp i express
        Creamos su carpeta public
*   Instalamos npm install hbs (es Handlebars)
        Dejamos como archivos estáticos assets y js y 
            creamos una carpeta templates para archivos dinámicos.
        Creamos su carpeta views
        Se utiliza normalmente para contenido sencillo 
        Commit "Renderizando"
* Creamos una carpeta partials.
        93. vamos a trabajar con los parciales de hbs.
* Configuramos una variable de entorno de puerto.
        94. Preparar webserver para subirlo a un hosting
        npm i dotenv (para establecer las variables de entorno)
        creamos el archivo .env
        En el package.json hay que añadir en scripts "start": "node app.js"
        npm start para levantar la aplicación

