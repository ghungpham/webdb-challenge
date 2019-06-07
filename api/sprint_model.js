const db = require('../data/dbConfig');

module.exports = {
    addProjects, addActions, getProjectsbyID, getActions
}

function addProjects (projects) {
    return db('projects')
    .insert(projects)
    .then(ids => ({ id: ids[0] }))
}

function addActions(actions) {
    return db('actions')
    .insert(actions)
    .then(ids => ({ id: ids[0] }))
}

async function getActions (id) {
    return await db('actions')
        .where('actions.project_id', id)
}


function getProjectsbyID(id) {
    return db('projects')
    .where('projects.id', id)
    .first()
}