const {Schema, model} = require("mongoose");

// Contrato 
const TipoSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  tipo: String
});

const Tipo = model("Tipo", TipoSchema,"tipos");

module.exports = Tipo;
