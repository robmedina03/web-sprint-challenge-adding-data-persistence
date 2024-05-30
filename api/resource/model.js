// build your `Resource` model here
const db= require('../../data/dbConfig')

function getResources() {
    return db('resources')
}

function getResourceId(id) {
    return db('resources').where({resource_id: id}).first()
}

function addResource(resource) {
    return db('resources').insert(resource).then(([id]) => getResourceId(id))
}

module.exports = {

    getResources,
    getResourceId,
    addResource
}