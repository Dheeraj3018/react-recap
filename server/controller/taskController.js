const mongoose = require('mongoose');
const taskModel = require('../models/TaskModel');


const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await taskModel.create({ title, description });
    res.status(200).json(task);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//To get All Tasks

const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find({});
    res.status(200).json(tasks)

  } catch (error) {
    res.status(400).json({ error: e.message });
  }
}


//To get a single task

const getSingleTask = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Task not found" })
  }
  try {
    const singleTask = await taskModel.findById(id)
    res.status(200).json(singleTask);
  } catch (error) {
    res.status(400).json({ error: e.message });

  }
}

const updateTask = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Task not found" });
  }
  try {
    const task = await taskModel.findByIdAndUpdate({
      _id:id
    },{
      ...req.body
    })
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({error:e.message});
  }
}

//Delete task
const deleteTask = async (req,res)=>{
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Task not found" });
  }
  try {
    const task = await taskModel.findByIdAndDelete(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({error:e.message});
  }

}
module.exports = { createTask, getTasks, getSingleTask ,updateTask,deleteTask};