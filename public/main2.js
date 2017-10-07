//Xử lý client khi có res từ server
const socket = io();
// socket.on('Random_Num', num =>{
//     $('#messageX').append(`<h3>${num}</h3>`);
// })

// $('#btnSend').click(()=>{
//     const message = $('#messageX').val();
//     socket.emit('ClientSendText', message);
//     $('#messageX').val('');
// });

// socket.on('ServerRes', message =>{
//     $('#messageX').append(`<h3>${message}</h3>`)
// })

socket.on('ServerSend', message =>{
    $('#messageX').append(`<h3>${message}</h3>`);
});

$('#btnSend').click(()=>{
    const message = $('#textInput').val();
    socket.emit('ClientSend', message);
    $('#textInput').val('');
});