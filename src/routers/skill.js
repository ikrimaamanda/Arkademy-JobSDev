const { Router } = require('express')

// import controller file
const { getAllSkill, getSkillById, createSkill, updateAllSkillById, deleteSkillById, getSkillByEnId } = require('../controllers/skill')

const router = Router()

const { authorizationEngineerAndRecruiter } = require('../middleware/authentication')

router.get('/', getAllSkill)
router.get('/:skillId', getSkillById)
router.get('/getSkillByEnId/:enId', authorizationEngineerAndRecruiter, getSkillByEnId)

router.post('/', createSkill)

router.put('/:skillId', updateAllSkillById)
// router.patch('/:portfolioId', updateParsialOrAllPortfolioById)

router.delete('/:skillId', deleteSkillById)

module.exports = router
