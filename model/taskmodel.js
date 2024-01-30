const mongoose = require("mongoose");
const schema = mongoose.Schema;
const TaskSchema = new schema(
  {
    employeeName: {
      type: String,
    },
    date: {
      type: String,
    },
    timeIn: {
      type: String,
    },
    timeOut: {
      type: String,
    },
    taskInformation: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
