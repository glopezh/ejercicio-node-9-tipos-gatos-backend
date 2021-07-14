const Tipo = require("../modelos/Tipo");

const crearTipo = async (tipo) =>{
  const nuevoTipo = await Tipo.create(tipo);
  console.log(nuevoTipo);
};

module.exports = {
  crearTipo
};
