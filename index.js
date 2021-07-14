const express = require("express");

const app = express();

app.listen(3010, (err) => {
  if(err){
    console.log("No se ha podido levantar el servidor");
    return;
  }
  console.log("Servidor escuchando en el puerto 3010");
});
