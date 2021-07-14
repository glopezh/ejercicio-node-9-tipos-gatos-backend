const express = require("express");

const app = express();

app.listen(3010, (err) => {
  if(err){
    console.log("No se ha podido levantar el servidor");
    return;
  }
  console.log("Servidor escuchando en el puerto 3010");
});

// Creando cadena de middleware
// Recoge la request y hace lo que quiere con ella xD

// Por convencion : request = req , respuesta = res , siguiente = next

app.use(() =>{
  console.log("Paso 1");
});

app.use(() => {
  console.log("Paso 2");
});

app.use(() => {
  console.log("Paso 3");
});
