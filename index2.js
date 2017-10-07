
// test again socket
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.render('home2');
});

io.on('connection', socket =>{
    socket.on('ClientSend', message =>{
        io.emit('ServerSend', message);
    })
});

server.listen(3000, ()=> console.log('Hello Server'));