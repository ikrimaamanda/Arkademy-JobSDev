const { Router } = require('express')

// import controller file
const { getAllAccount, createAccount, getAccountById, updateAllAccountById, updateParsialOrAllAcccountById } = require('../controllers/accounts')

const router = Router()

router.get('/', getAllAccount)
router.get('/:accountId', getAccountById)
router.post('/', createAccount)
router.put('/:accountId', updateAllAccountById)
// router.delete('/:accountId', deleteProjectById)

// patch masih error bagian edit no hp
// router.patch('/:accountId', updateParsialOrAllAcccountById)

module.exports = router
