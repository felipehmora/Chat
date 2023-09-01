$(function () {
    //socket iniciado
    let socket = io();

    //variables
    let message = $("#chat-message");
    let chat = $("#chat");


    message.focus()
    
    $("#message-box").submit(function (e) {
        e.preventDefault();
        socket.emit("mensaje-del-cliente", message.val())
    })
    
    socket.on("mensaje-del-servidor", function (data){
        chat.append(data + '<br/>')
    })
})