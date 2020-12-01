const { Router } = require('express')

// import controller file
const { getAllSkill, createSkill, updateAllSkillById, deleteSkillById, getSkillByEnId } = require('../controllers/skill')

const router = Router()

const { authorizationToAllUser, authorizationEngineer, authorizationAdmin } = require('../middleware/authentication')

router.get('/', authorizationAdmin, getAllSkill)
router.get('/getSkillByEnId/:enId', authorizationToAllUser, getSkillByEnId)

router.post('/', authorizationEngineer, createSkill)

router.put('/:skillId', authorizationEngineer, updateAllSkillById)

router.delete('/:skillId', authorizationEngineer, deleteSkillById)

module.exports = router
