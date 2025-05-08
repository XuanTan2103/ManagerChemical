const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChemicalTransactionSchema = new Schema({
    chemicalBatch: { type: Schema.Types.ObjectId, ref: 'ChemicalBatch', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },        // borrow, return...
    quantity: { type: Number, required: true },
    date_time: { type: Date, default: Date.now },
    class: { type: String },                       // Lớp
    lesson_name: { type: String },                 // Tên bài dạy
    period: { type: String },                      // Tiết
  }, { timestamps: true });

  module.exports = {
    ChemicalTransaction: mongoose.model('ChemicalTransaction', ChemicalTransactionSchema)
  };