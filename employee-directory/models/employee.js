const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  department: { type: String, required: true },
  jobTitle: { type: String, required: true },
  email: { type: String, required: true },
  phoneExtension: { type: Number, required: true }
});

const Employee = mongoose.model("Emmployee", employeeSchema);

module.exports = Employee;