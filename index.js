const express = require('express'); //es como una importación en flutter
const path = require('path');
require('dotenv').config();

//App de express
const app = express();

//node server

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');



//carpeta publica

const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));


//escuchar algun puerto como el 3000
server.listen(process.env.PORT,(error)=>{

    if(error) throw new Error(error);


    console.log('Servidor corriendo, en puerto',  process.env.PORT);
});