const { Router } = require('express')

// import controller file
const { getAllProject, createProject, getProjectById, updateAllProjectById, deleteProjectById } = require('../controllers/projects')

const router = Router()

router.get('/', getAllProject)
router.get('/:projectId', getProjectById)

router.post('/', createProject)

router.put('/:projectId', updateAllProjectById)
// router.patch('/:experienceId', updateParsialOrAllPortfolioById)

router.delete('/:projectId', deleteProjectById)

module.exports = router
