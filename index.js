const express = require('express');
const reload = require('reload');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', (req, res) => res.render('home'));



// Socket Server
io.on('connection', socket => {
   
   /*setInterval(()=>{
        const num = Math.random();
        // gửi qua client
        socket.emit('Server_Send_Message', num);
        // có thể gửi object, string, array, ..
   }, 1000);
   */
//   xử lý message client gửi lên
   socket.on('Client_Send_Message', message => {
       io.emit('Server_Send_Message', message);
   });
})
reload(app);
server.listen(3000, () => console.log('Server start!'));
