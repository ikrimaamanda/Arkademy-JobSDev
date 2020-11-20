const { Router } = require('express')

// import controller file
const { getAllSkill, getSkillById, createSkill, updateAllSkillById, deleteSkillById, getSkillByEnId } = require('../controllers/skill')

const router = Router()

const { authorizationEngineerAndRecruiter, authorizationEngineer } = require('../middleware/authentication')

router.get('/', getAllSkill)
router.get('/:skillId', getSkillById)
router.get('/getSkillByEnId/:enId', authorizationEngineerAndRecruiter, getSkillByEnId)

router.post('/', authorizationEngineer, createSkill)

router.put('/:skillId', authorizationEngineer, updateAllSkillById)
// router.patch('/:portfolioId', updateParsialOrAllPortfolioById)

router.delete('/:skillId', authorizationEngineer, deleteSkillById)

module.exports = router
