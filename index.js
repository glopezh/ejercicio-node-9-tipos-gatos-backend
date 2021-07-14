const { crearTipo } = require ("./db/controladores/tipos");

require("./db");

crearTipo({
  id: 5,
  tipo: "Angora",
});
