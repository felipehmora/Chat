const io = require('socket.io');
module.exports = function (server){
    
let sockets = io(server);

sockets.on('connection', function(socket){
    console.log("nuevo cliente conectado"); 
    
    socket.on("mensaje-del-cliente", function(data){
        sockets.emit("mensaje-del-servidor", data)
    })

})
}