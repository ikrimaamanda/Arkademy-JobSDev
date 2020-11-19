const { Router } = require('express')

// import controller file
const { getAllAccount, registrationAccount, getAccountById, updateAllAccountById, updateParsialOrAllAcccountById } = require('../controllers/accounts')

const router = Router()

router.get('/', getAllAccount)
router.get('/:accountId', getAccountById)
router.post('/registration', registrationAccount)
router.put('/:accountId', updateAllAccountById)
// router.delete('/:accountId', deleteProjectById)

// patch masih error bagian edit no hp
// router.patch('/:accountId', updateParsialOrAllAcccountById)

module.exports = router
