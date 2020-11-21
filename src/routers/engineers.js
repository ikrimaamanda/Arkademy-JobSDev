const { Router } = require('express')

// import controller file
const { getCompleteEngineerById, getEngineerById, updateAllEngineerById, getAllEngineer, getFilterEngineer } = require('../controllers/engineers')

const router = Router()
const { authorizationEngineer, authorizationRecruiter, authorizationToAllUser } = require('../middleware/authentication')

const uploadImage = require('../middleware/multer')

router.get('/', authorizationRecruiter, getAllEngineer)
router.get('/filter/', authorizationRecruiter, getFilterEngineer)
router.get('/:enId', authorizationToAllUser, getEngineerById)
router.get('/completeEngineer/:enId', authorizationToAllUser, getCompleteEngineerById)

router.put('/:engineerId', authorizationEngineer, uploadImage, updateAllEngineerById)
// router.patch('/:engineerId', updateParsialOrAllEngineerById)

module.exports = router
