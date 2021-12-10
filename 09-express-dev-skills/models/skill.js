const skills = [
    { id: 125223, skill: 'Full-stack Development', advanced: true },
    { id: 127904, skill: 'Gameplay Development', advanced: false },
    { id: 139608, skill: 'AR/VR', advanced: false }
];

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find((skill) => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.advanced = false;
    skills.push(skill);
}

function deleteSkill(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function update(id, skill) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    // Ensure the id is copied over
    skill.id = parseInt(id);
    skills.splice(idx, 1, skill);
}

module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteSkill,
    update,
};