const { Router } = require('express')

// import controller file
const { getAllExperience, createExperience, getExperienceById, getExperienceByEnId, updateAllExperienceById, deleteExperienceById } = require('../controllers/experiences')

const router = Router()

const { authorizationEngineerAndRecruiter } = require('../middleware/authentication')

router.get('/', getAllExperience)
router.get('/:experienceId', getExperienceById)
router.get('/getExperienceByEnId/:enId', authorizationEngineerAndRecruiter, getExperienceByEnId)

router.post('/', createExperience)

router.put('/:experienceId', updateAllExperienceById)
// router.patch('/:experienceId', updateParsialOrAllPortfolioById)

router.delete('/:experienceId', deleteExperienceById)

module.exports = router
