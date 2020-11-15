const { Router } = require('express')

// import controller file
const { createCompany, getCompanyById, updateAllCompanyById, getAllCompany } = require('../controllers/companies')

const router = Router()

router.get('/', getAllCompany)
router.get('/:companyId', getCompanyById)

router.post('/', createCompany)

router.put('/:companyId', updateAllCompanyById)
// router.patch('/:companyId', updateParsialOrAllCompanyById)

module.exports = router
