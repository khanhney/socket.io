// viết JS ở brower
// Phía Client

const socket = io();
// cùng server

// xử lý từ server gửi lại

socket.on('Server_Send_Message', message => {
    // console.log(message);
    $('#message-ex').append(`<h4>${message}</h4>`) 
});

// gửi tin nhắn từ client lên server
$('#btn-send').click(()=>{
    const message = $('#input-text').val();
    socket.emit('Client_Send_Message', message);
    $('#input-text').val('');
});