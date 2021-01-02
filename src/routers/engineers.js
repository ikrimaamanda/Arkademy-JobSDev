const { Router } = require('express')

// import controller file
const { getCompleteEngineerById, getEngineerByAcId, updateAllEngineerById, getAllEngineer, getFilterEngineer } = require('../controllers/engineers')

const router = Router()
const { authorizationEngineer, authorizationToAllUser } = require('../middleware/authentication')

const uploadImage = require('../middleware/multer')

router.get('/', authorizationToAllUser, getAllEngineer)

router.get('/filter/', authorizationToAllUser, getFilterEngineer)

router.get('/:acId', authorizationToAllUser, getEngineerByAcId)

router.get('/completeEngineer/:enId', authorizationToAllUser, getCompleteEngineerById)

router.put('/:engineerId', authorizationEngineer, uploadImage, updateAllEngineerById)

module.exports = router
