const { Router } = require('express')

// import controller file
const { getAllExperience, createExperience, getExperienceById, updateAllExperienceById, deleteExperienceById } = require('../controllers/experiences')

const router = Router()

router.get('/', getAllExperience)
router.get('/:experienceId', getExperienceById)

router.post('/', createExperience)

router.put('/:experienceId', updateAllExperienceById)
// router.patch('/:experienceId', updateParsialOrAllPortfolioById)

router.delete('/:experienceId', deleteExperienceById)

module.exports = router
