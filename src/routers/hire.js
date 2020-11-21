const { Router } = require('express')

// import controller file
const { getAllHire, createHire, updateAllHireById, getHireByProjectId, getHireByEnId, deleteHireById } = require('../controllers/hire')

const router = Router()
const { authorizationEngineer, authorizationRecruiter } = require('../middleware/authentication')

router.get('/', getAllHire)
router.get('/project/:projectId', authorizationRecruiter, getHireByProjectId)
router.get('/getHireByEnId/:enId', authorizationEngineer, getHireByEnId)

router.post('/', authorizationRecruiter, createHire)

router.put('/:hireId', authorizationRecruiter, updateAllHireById)
// router.patch('/:experienceId', updateParsialOrAllPortfolioById)

router.delete('/:hireId', authorizationRecruiter, deleteHireById)

module.exports = router
