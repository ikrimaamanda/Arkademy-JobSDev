const { Router } = require('express')

// import controller file
const { getAllSkill, getSkillById, createSkill, updateAllSkillById, deleteSkillById } = require('../controllers/skill')

const router = Router()

router.get('/', getAllSkill)
router.get('/:skillId', getSkillById)

router.post('/', createSkill)

router.put('/:skillId', updateAllSkillById)
// router.patch('/:portfolioId', updateParsialOrAllPortfolioById)

router.delete('/:skillId', deleteSkillById)

module.exports = router
