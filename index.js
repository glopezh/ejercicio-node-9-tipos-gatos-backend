require("dotenv").config();
const express = require("express");


// Pase lo que pase pete lo que pete primero quiero que se registre que tipop de petición llego

const morgan = require("morgan");

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// No olvidar de agregar el formato dev
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(app.get("port"), (err) => {
  if (err) {
    console.log("No se ha podido levantar el servidor");
    return;
  }
  console.log(`Server on port ${app.set("port")}`);
});


// Por convencion : request = req , respuesta = res , siguiente = next

// Rutas

app.get("/", (req, res, next) => {
  res.send("Hello World");
  next();
});

