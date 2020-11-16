const { Router } = require('express')

// import controller file
const { createEngineer, getCompleteEngineerById, getEngineerById, updateAllEngineerById, getAllEngineer, getFilterEngineer } = require('../controllers/engineers')

const router = Router()

router.get('/', getAllEngineer)
router.get('/filter/', getFilterEngineer)
router.get('/:enId', getEngineerById)
router.get('/completeEngineer/:enId', getCompleteEngineerById)

router.post('/', createEngineer)

router.put('/:engineerId', updateAllEngineerById)
// router.patch('/:engineerId', updateParsialOrAllEngineerById)

module.exports = router
