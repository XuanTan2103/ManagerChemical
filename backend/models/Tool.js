const mongoose = require('mongoose');
const { Schema } = mongoose;

const ToolSchema = new Schema({
    name: { type: String, required: true },          // Tên dụng cụ
    quantity: { type: Number, required: true },      // Số lượng hiện có
    unit: { type: String, required: true },          // Đơn vị (chiếc, bộ...)
}, { timestamps: true });

module.exports = {
    Tool: mongoose.model('Tool', ToolSchema)
};
