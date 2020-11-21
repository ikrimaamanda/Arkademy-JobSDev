const { Router } = require('express')

// import controller file
const { getAllProject, createProject, getProjectById, getProjectByCnId, updateAllProjectById, deleteProjectById } = require('../controllers/projects')

const router = Router()
const { authorizationRecruiter } = require('../middleware/authentication')
const uploadImage = require('../middleware/multer')

router.get('/', getAllProject)
router.get('/getProjectByCnId/:cnId', authorizationRecruiter, getProjectByCnId)

router.post('/', authorizationRecruiter, uploadImage, createProject)

router.put('/:projectId', authorizationRecruiter, uploadImage, updateAllProjectById)
// router.patch('/:experienceId', updateParsialOrAllPortfolioById)

router.delete('/:projectId', authorizationRecruiter, deleteProjectById)

module.exports = router
