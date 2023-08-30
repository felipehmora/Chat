const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("mi chat iniciado")
})

app.listen(3000, function () {
    console.log("el servidor se ha iniciado")
})
