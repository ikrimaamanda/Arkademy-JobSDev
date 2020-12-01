const { Router } = require('express')

// import controller file
const { getAllExperience, createExperience, getExperienceByEnId, updateAllExperienceById, deleteExperienceById } = require('../controllers/experiences')

const router = Router()

const { authorizationToAllUser, authorizationEngineer, authorizationAdmin } = require('../middleware/authentication')

router.get('/', authorizationAdmin, getAllExperience)
router.get('/getExperienceByEnId/:enId', authorizationToAllUser, getExperienceByEnId)

router.post('/', authorizationEngineer, createExperience)

router.put('/:experienceId', authorizationEngineer, updateAllExperienceById)

router.delete('/:experienceId', authorizationEngineer, deleteExperienceById)

module.exports = router
