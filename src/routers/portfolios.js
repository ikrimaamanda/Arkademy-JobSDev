const { Router } = require('express')

// import controller file
const { getAllPortfolio, createPortfolio, getPortfolioByEnId, deletePortfolioById, updateAllPortfolioById } = require('../controllers/portfolios')

const router = Router()
const uploadImage = require('../middleware/multer')

const { authorizationToAllUser, authorizationEngineer, authorizationAdmin } = require('../middleware/authentication')

router.get('/', authorizationAdmin, getAllPortfolio)
router.get('/getPortfolioByEnId/:enId', authorizationToAllUser, getPortfolioByEnId)

router.post('/', authorizationEngineer, uploadImage, createPortfolio)

router.put('/:portfolioId', authorizationEngineer, uploadImage, updateAllPortfolioById)
// router.patch('/:portfolioId', updateParsialOrAllPortfolioById)

router.delete('/:portfolioId', authorizationEngineer, deletePortfolioById)

module.exports = router
