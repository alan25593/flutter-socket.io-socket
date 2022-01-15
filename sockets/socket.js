const {io} = require('../index');



//mensajes de sockets

io.on('connection', client => {
    console.log('Cliente ON');
    client.on('disconnect', () => { console.log('Cliente OFF'); });

    client.on('mensaje',(payload)=>{
      //escucho Mensaje para el server
      console.log('Mensaje de ', payload);     

      //emito Mensaje desde el server
      io.emit('mensaje', {admin: 'Escuchen prros'});
    });

    


  });