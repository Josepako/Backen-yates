const { Schema, model } = require("mongoose");

const YatesSchema = new Schema({
  nombre: String,
  descripcion: {
    type: String,
    required: true,
  },
  precio: Number,
  Longitud: Number,
});

module.exports = model("Yates", YatesSchema);
