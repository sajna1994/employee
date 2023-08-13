const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  empname: { type: String, required: true },
  empsection: { type: String, required: true },
  salary: { type: Number, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);