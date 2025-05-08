const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReportSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, required: true },  // ID hóa chất/dụng cụ
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String },                              // Mô tả
    date_time: { type: Date, default: Date.now },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
  }, { timestamps: true });

  
  module.exports = {
    Report: mongoose.model('Report', ReportSchema)
  };
  