const { Router } = require('express')

// import controller file
const { getAllExperience, createExperience, getExperienceByEnId, updateAllExperienceById, deleteExperienceById } = require('../controllers/experiences')

const router = Router()

const { authorizationEngineerAndRecruiter, authorizationEngineer } = require('../middleware/authentication')

router.get('/', getAllExperience)
router.get('/getExperienceByEnId/:enId', authorizationEngineerAndRecruiter, getExperienceByEnId)

router.post('/', authorizationEngineer, createExperience)

router.put('/:experienceId', authorizationEngineer, updateAllExperienceById)
// router.patch('/:experienceId', updateParsialOrAllPortfolioById)

router.delete('/:experienceId', authorizationEngineer, deleteExperienceById)

module.exports = router
