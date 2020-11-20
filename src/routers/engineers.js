const { Router } = require('express')

// import controller file
const { createEngineer, getCompleteEngineerById, getEngineerById, updateAllEngineerById, getAllEngineer, getFilterEngineer } = require('../controllers/engineers')

const router = Router()
const { authorizationEngineer, authorizationRecruiter } = require('../middleware/authentication')

const uploadImage = require('../middleware/multer')

router.get('/', authorizationRecruiter, getAllEngineer)
router.get('/filter/', authorizationRecruiter, getFilterEngineer)
router.get('/:enId', getEngineerById)
router.get('/completeEngineer/:enId', getCompleteEngineerById)

router.post('/', createEngineer)

router.put('/:engineerId', authorizationEngineer, uploadImage, updateAllEngineerById)
// router.patch('/:engineerId', updateParsialOrAllEngineerById)

module.exports = router
