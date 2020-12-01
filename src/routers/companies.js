const { Router } = require('express')

// import controller file
const { getCompanyById, updateAllCompanyById, getAllCompany } = require('../controllers/companies')

const router = Router()
const { authorizationRecruiter, authorizationAdmin } = require('../middleware/authentication')

const uploadImage = require('../middleware/multer')

router.get('/', authorizationAdmin, getAllCompany)
router.get('/:companyId', authorizationRecruiter, getCompanyById)

router.put('/:companyId', authorizationRecruiter, uploadImage, updateAllCompanyById)

module.exports = router
