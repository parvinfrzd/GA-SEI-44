var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');



/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);



// router.get('/', function (req, res) {
//     res.render('skills/index', {
//         skills: skill.getAll()
//     });
// });


module.exports = router;
