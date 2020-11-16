const { Router } = require('express')

// import controller file
const { getAllHire, createHire, getHireById, updateAllHireById, getHireByProjectId, deleteHireById } = require('../controllers/hire')

const router = Router()

router.get('/', getAllHire)
router.get('/:hireId', getHireById)
router.get('/project/:projectId', getHireByProjectId)

router.post('/', createHire)

router.put('/:hireId', updateAllHireById)
// router.patch('/:experienceId', updateParsialOrAllPortfolioById)

router.delete('/:hireId', deleteHireById)

module.exports = router
