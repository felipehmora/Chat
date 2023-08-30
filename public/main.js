$(function () {
    //variables
    let message = $("#chat-message");
    let chat = $("#chat");


    $message.focus()
    $("#message-box").submit(function (e){
        e.preventDefault();
        chat.append(message.val() + "<br>")


    })
})