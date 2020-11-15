const { Router } = require('express')

// import controller file
const { createEngineer, getEngineerById, updateAllEngineerById, getAllEngineer, getFilterEngineer } = require('../controllers/engineers')

const router = Router()

router.get('/', getAllEngineer)
router.get('/filter/', getFilterEngineer)
router.get('/:enId', getEngineerById)

router.post('/', createEngineer)

router.put('/:engineerId', updateAllEngineerById)
// router.patch('/:engineerId', updateParsialOrAllEngineerById)

module.exports = router
