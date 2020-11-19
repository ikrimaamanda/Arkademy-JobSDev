const { Router } = require('express')

// import controller file
const { getAllProject, createProject, getProjectById, getProjectByCnId, updateAllProjectById, deleteProjectById } = require('../controllers/projects')

const router = Router()
const uploadImage = require('../middleware/multer')

router.get('/', getAllProject)
router.get('/:projectId', getProjectById)
router.get('/getProjectByCnId/:cnId', getProjectByCnId)

router.post('/', uploadImage, createProject)

router.put('/:projectId', uploadImage, updateAllProjectById)
// router.patch('/:experienceId', updateParsialOrAllPortfolioById)

router.delete('/:projectId', deleteProjectById)

module.exports = router
