const { Router } = require('express')

// import controller file
const { getCompanyByAcId, updateAllCompanyById, getAllCompany } = require('../controllers/companies')

const router = Router()
const { authorizationRecruiter, authorizationAdmin } = require('../middleware/authentication')

const uploadImage = require('../middleware/multer')

router.get('/', authorizationAdmin, getAllCompany)
router.get('/:acId', authorizationRecruiter, getCompanyByAcId)

router.put('/:companyId', authorizationRecruiter, uploadImage, updateAllCompanyById)

module.exports = router
