const { Router } = require('express')

// import controller file
const { getAllAccount, registrationAccount, loginAccount, getAccountById, updateAllAccountById } = require('../controllers/accounts')

const router = Router()
const { authorizationRecruiter } = require('../helpers/authentication')

router.get('/', authorizationRecruiter, getAllAccount)
router.get('/:accountId', getAccountById)

router.post('/registration', registrationAccount)
router.post('/login', loginAccount)

router.put('/:accountId', updateAllAccountById)
// router.delete('/:accountId', deleteProjectById)

// patch masih error bagian edit no hp
// router.patch('/:accountId', updateParsialOrAllAcccountById)

module.exports = router
