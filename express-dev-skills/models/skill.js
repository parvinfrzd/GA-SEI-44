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
    // New todos wouldn't be done :)
    skill.advanced = false;
    skills.push(skill);
}

module.exports = {
    getAll,
    getOne,
};