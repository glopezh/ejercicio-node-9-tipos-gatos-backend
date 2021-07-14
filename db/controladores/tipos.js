const Tipo = require("../modelos/Tipo");

const crearTipo = async (tipo) =>{
  try {
  const nuevoTipo = await Tipo.create(tipo);
  return nuevoTipo;
  } catch (err){
    console.log("Error al crear el tipo de gatete", err.message);
  }
};

const borrarTipo = async (id) =>{
  try {
    const tipoBorrado = await Tipo.findByIdAndDelete(id);
    console.log(tipoBorrado);
  }catch (err){
    console.log("Error al borrar al tipo de gatete");
  }
};

module.exports = {
  crearTipo,
  borrarTipo
};
