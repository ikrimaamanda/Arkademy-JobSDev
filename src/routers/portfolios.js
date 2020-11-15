const { Router } = require('express')

// import controller file
const { getAllPortfolio, createPortfolio, getPortfolioById, deletePortfolioById, updateAllPortfolioById } = require('../controllers/portfolios')

const router = Router()

router.get('/', getAllPortfolio)
router.get('/:portfolioId', getPortfolioById)
router.post('/', createPortfolio)
router.put('/:portfolioId', updateAllPortfolioById)
// router.patch('/:portfolioId', updateParsialOrAllPortfolioById)
router.delete('/:portfolioId', deletePortfolioById)

module.exports = router
