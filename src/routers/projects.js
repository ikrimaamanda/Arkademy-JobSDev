const { Router } = require('express')

// import controller file
const { getAllProject, createProject, getProjectByCnId, updateAllProjectById, deleteProjectById } = require('../controllers/projects')

const router = Router()
const { authorizationRecruiter, authorizationAdmin } = require('../middleware/authentication')
const uploadImage = require('../middleware/multer')

router.get('/', authorizationAdmin, getAllProject)
router.get('/getProjectByCnId/:cnId', authorizationRecruiter, getProjectByCnId)

router.post('/', authorizationRecruiter, uploadImage, createProject)

router.put('/:projectId', authorizationRecruiter, uploadImage, updateAllProjectById)
// router.patch('/:experienceId', updateParsialOrAllPortfolioById)

router.delete('/:projectId', authorizationRecruiter, deleteProjectById)

module.exports = router
