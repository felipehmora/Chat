const http = require("http")
const express = require("express");
const app = express();
const morgan = require("morgan")

const server = http.createServer(app);

//configuracion del servidor
app.set("port", 3000);
app.use(morgan())
app.use(express.static(__dirname + "/public"));

//inicializacion del servidor
server.listen(app.get("port"), function () {
    console.log("el servidor se ha iniciado");
})

//este es la logica de los sockets
require('./sockets')(server)