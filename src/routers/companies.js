const { Router } = require('express')

// import controller file
const { createCompany, getCompanyById, updateAllCompanyById, getAllCompany } = require('../controllers/companies')

const router = Router()
const { authorizationRecruiter } = require('../middleware/authentication')

const uploadImage = require('../middleware/multer')

router.get('/', getAllCompany)
router.get('/:companyId', getCompanyById)

router.post('/', createCompany)

router.put('/:companyId', authorizationRecruiter, uploadImage, updateAllCompanyById)
// router.patch('/:companyId', updateParsialOrAllCompanyById)

module.exports = router
