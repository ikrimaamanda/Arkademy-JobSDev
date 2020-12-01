const { Router } = require('express')

// import controller file
const { getAllAccount, registrationAccount, loginAccount, getAccountById, updateAllAccountById, deleteAccountById } = require('../controllers/accounts')

const router = Router()
const { authorizationToAllUser, authorizationAdmin } = require('../middleware/authentication')

router.get('/', authorizationAdmin, getAllAccount)
router.get('/:accountId', authorizationToAllUser, getAccountById)

router.post('/registration', registrationAccount)
router.post('/login', loginAccount)

router.put('/:accountId', authorizationToAllUser, updateAllAccountById)

router.delete('/:accountId', authorizationAdmin, deleteAccountById)

module.exports = router
