const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChemicalSchema = new Schema({
    name: { type: String, required: true },          // Tên hóa chất
    unit: { type: String, required: true },          // Đơn vị (g, ml, ...)
    type: { type: String },                          // Loại (axit, bazơ, ...)
  }, { timestamps: true });

  
  module.exports = {
    Chemical: mongoose.model('Chemical', ChemicalSchema)
  };