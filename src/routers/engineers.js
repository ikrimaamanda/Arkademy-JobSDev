const { Router } = require('express')

// import controller file
const { getCompleteEngineerById, getEngineerById, updateAllEngineerById, getAllEngineer, getFilterEngineer } = require('../controllers/engineers')

const router = Router()
const { authorizationEngineer, authorizationToAllUser } = require('../middleware/authentication')

const uploadImage = require('../middleware/multer')

router.get('/', authorizationToAllUser, getAllEngineer)

router.get('/filter/', authorizationToAllUser, getFilterEngineer)

router.get('/:enId', authorizationToAllUser, getEngineerById)

router.get('/completeEngineer/:enId', authorizationToAllUser, getCompleteEngineerById)

router.put('/:engineerId', authorizationEngineer, uploadImage, updateAllEngineerById)

module.exports = router
