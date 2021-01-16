const { Router } = require('express')

// import controller file
const { getAllHire, createHire, updateAllHireById, getHireByProjectId, getHireByEnId, deleteHireById } = require('../controllers/hire')

const router = Router()
const { authorizationEngineer, authorizationToAllUser, authorizationRecruiter, authorizationAdmin } = require('../middleware/authentication')

router.get('/', authorizationAdmin, getAllHire)
router.get('/project/:projectId', authorizationRecruiter, getHireByProjectId)
router.get('/getHireByEnId/:enId', authorizationToAllUser, getHireByEnId)

router.post('/', authorizationRecruiter, createHire)

router.put('/:hireId', authorizationEngineer, updateAllHireById)

router.delete('/:hireId', authorizationRecruiter, deleteHireById)

module.exports = router
