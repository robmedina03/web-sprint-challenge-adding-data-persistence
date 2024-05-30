// build your `/api/projects` router here
 const express = require('express')
 const Projects = require('./model')

 const router = express.Router()

 router.get('/', async (req, res,next) => {
    try{
        const projects = await Projects.getAll()
        res.json(projects)
    }catch(err){
        next(err)
    }
 })

 router.post('/', (req, res, next) => {
    
     Projects.addProject(req.body)
    .then(project => {
        project.project_completed = Boolean(project.project_completed)
        res.status(201).json(project)
    })
    .catch(next)
   
    
 })

 module.exports = router