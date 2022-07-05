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
* Para desplegar la aplicación
        Firebase hosting
        AWS Free Tier
        Google Cloud 
        Azure 
        DigitalOcean 
        Heroku (es el que vamos a usar aquí.)
        Instalamos Heroku git en su página
        heroku login en la terminal para autenticarnos
        Establecemos la conexión con heroku git:remote -a webserver-nodealag (aparece en la pg de Heroku)
        Con git branch, nos aparece en nuestro caso main
        Y luego desplegamos la aplicación con: git push heroku main 
        En heroku -> Open app tenemos nuestra aplicación
* Desplegando aplicaciones de Angular y React 96.
        npm install --global http-server (para que pueda correr la aplicación)
        vamos a la carpeta de React y escribimos http-server -o
        y ya entramos en nuestra aplicación puede que haya que recargar la página.

        Añadimos la carpeta de React a public

