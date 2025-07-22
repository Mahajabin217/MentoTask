const mongoose = require("mongoose");
const TaskSchema = new mongoose.schema({
  taskTitle: String,
  taskDesc: String,
  empName: String,
});

module.exports = mongoose.model("Task", TaskSchema);
