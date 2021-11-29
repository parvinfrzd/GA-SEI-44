
const Skill = require('../models/skill');

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        time: req.time
    });
}
function addNew(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Skill.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.delete(req.params.id);
    res.redirect('/skills');
}

function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect('/skills');
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id)
    });
}

module.exports = {
    index: index,
    show: show,
    new: addNew,
    create: create,
    delete: deleteSkill,
    edit: edit,
    update: update,
};