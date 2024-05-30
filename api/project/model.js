// build your `Project` model here
const db= require('../../data/dbConfig')

const getAll = async () => {
    const projects = await db('projects')
    return projects.map(project => ({
        ...project,
        project_completed:Boolean(project.project_completed)
    }))
}

function getprojectById(id) {
    return db('projects').where({project_id:id}).first()
}

const addProject = async (project) =>{
    const [id]= await db('projects').insert(project)
    return getprojectById(id)
}

module.exports = {
    getAll,
    getprojectById,
    addProject
}