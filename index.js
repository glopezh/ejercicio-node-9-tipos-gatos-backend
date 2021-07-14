const { crearTipo, borrarTipo } = require ("./db/controladores/tipos");

require("./db");

(async() => {
  /* const nuevoTipo = await crearTipo({
    id: 5,
    tipo: "Angora",
  });
  console.log(nuevoTipo); */

  borrarTipo("60ee6261368e7e75f6ce397d");
})();



