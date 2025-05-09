const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChemicalBatchSchema = new Schema({
    chemical: { type: Schema.Types.ObjectId, ref: 'Chemical', required: true },
    quantity: { type: Number, required: true },      // Số lượng trong lô
    expiration_date: { type: Date, required: true },
    received_date: { type: Date, required: true },
  }, { timestamps: true });

  
  module.exports = {
    ChemicalBatch: mongoose.model('ChemicalBatch', ChemicalBatchSchema)
  };
  