// build your `/api/tasks` router here
const express = require('express')
 const Tasks = require('./model')

 const router = express.Router()

 router.get('/', async (req, res, next) => {
    try{
        const tasks = await Tasks.getTasks();
        const tasksWithBoolean= tasks.map(task => ({
            ...task,
            task_completed: Boolean(task.task_completed)
        }))
        res.json(tasksWithBoolean)
    }catch(err){
        next(err)
    }
 })

 router.post('/', async (req, res, next) => {
    try{
            const task= req.body;
            if(!task.project_id){
                return res.status(400).json({message: 'Task must have a project_id'})
            }


  const newTask= await  Tasks.addTask(task)
  newTask.task_completed= Boolean(newTask.task_completed)
        res.status(201).json(newTask)
    }
    catch(err){
        next(err)
    }
 })

 module.exports = router