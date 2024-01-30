const taskmodel = require("../model/taskmodel");
const mongoose = require("mongoose");

// to create a task - post
const createTask = async (request, response) => {
  console.log("request", request);
  const { employeeName, date, timeIn, timeOut, taskInformation } = request.body;

  try {
    const Task = await taskmodel.create({
      employeeName,
      date,
      timeIn,
      timeOut,
      taskInformation,
    });
    response.status(200).json(Task);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
};
// to get all task - GET
const getTask = async (request, response) => {
  try {
    const tasks = await taskmodel.find({});
    response.status(200).json(tasks);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
};
// to to get a task - GET
const getSingleTask = async (request, response) => {
  const { id } = request.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(404).json({ error: "Task not found" });
  } ///id validation
  try {
    const singleTask = await taskmodel.findById(id);
    response.status(200).json(singleTask);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
};

//to update a task -PATCH
const updateTask = async (request, response) => {
  const { id } = request.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(404).json({ error: "Task not found" });
  } ///id validation
  try {
    const tasks = await taskmodel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        ...request.body,
      }
    );
    response.status(200).json(tasks);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
};
//to delete a task -DELETE
const deleteTask = async (request, response) => {
  const { id } = request.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(404).json({ error: "Task not found" });
  } ///id validation
  try {
    const tasks = await taskmodel.findByIdAndDelete(
      {
        _id: id,
      },
      {
        ...request.body,
      }
    );
    response.status(200).json(tasks);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
};
module.exports = { createTask, getTask, getSingleTask, updateTask, deleteTask };
