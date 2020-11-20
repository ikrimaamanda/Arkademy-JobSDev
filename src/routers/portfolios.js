const { Router } = require('express')

// import controller file
const { getAllPortfolio, createPortfolio, getPortfolioById, getPortfolioByEnId, deletePortfolioById, updateAllPortfolioById } = require('../controllers/portfolios')

const router = Router()
const uploadImage = require('../middleware/multer')

const { authorizationEngineerAndRecruiter, authorizationEngineer } = require('../middleware/authentication')

router.get('/', getAllPortfolio)
router.get('/:portfolioId', getPortfolioById)
router.get('/getPortfolioByEnId/:enId', authorizationEngineerAndRecruiter, getPortfolioByEnId)

router.post('/', authorizationEngineer, uploadImage, createPortfolio)

router.put('/:portfolioId', authorizationEngineer, uploadImage, updateAllPortfolioById)
// router.patch('/:portfolioId', updateParsialOrAllPortfolioById)

router.delete('/:portfolioId', authorizationEngineer, deletePortfolioById)

module.exports = router
