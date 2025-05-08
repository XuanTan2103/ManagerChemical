const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    ten: { type: String, required: true },           // Họ và tên
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },                        // Link ảnh đại diện
    dateOfBirth: { type: Date },
    sdt: { type: String },                           // Số điện thoại
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },          // Vai trò (admin, teacher...)
  }, { timestamps: true });

  module.exports = {
    User: mongoose.model('User', UserSchema)
  };