const router = require('express').Router();
const db = require('./sprint_model');
module.exports = router;


router.post('/projects', (req ,res) => {
   const { name, description } = req.body;
   
    db
    .addProjects({ name, description })
    .then(ids => {
        res.status(200).json(ids)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/actions', (req ,res) => {
    const { description, project_id  } = req.body;
    db
    .addActions( { description, project_id} )
    .then(ids => {
        res.status(200).json(ids)
    })
    .catch(err => {
        res.status(500).json(err)
    })
 })

router.get('/projects/:id'), (req, res) => {
    const { id } = req.params
    db
    .getProjectsbyID(id)
    .then(project => {
        if (!project){ res.status(400).json({ message: "action cannot be found"})
        } else {res.status(200).json(project)}
    })
    .catch(err => {
        res.status(500).json({message: "sorry cannot be done"})
    })
}