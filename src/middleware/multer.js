const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads/')
  },
  filename: (req, file, callback) => {
    if (file.fieldname === 'enProfilePict') {
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    } else if (file.fieldname === 'cnProfilePict') {
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    } else if (file.fieldname === 'portfolioImage') {
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    } else if (file.fieldname === 'projectImage') {
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }

    // const extension = file.originalname.split('.').pop()
    // const fileName = file.fieldname + '-' + Date.now() + '.' + extension
    // callback(null, fileName)
  }
})

const fileFilter = (req, file, callback) => {
  if ((file.mimetype === 'image/jpeg') || (file.mimetype === 'image/png')) {
    callback(null, true)
  } else {
    console.log(file)
    return callback(new Error('Extension file must be JPEG or PNG'), false)
  }
}

const limits = { fileSize: 1024 * 1024 * 1 }

const upload = multer({ storage, fileFilter, limits }).fields(
  [
    {
      name: 'enProfilePict',
      maxCount: 1
    },
    {
      name: 'cnProfilePict', maxCount: 1
    },
    {
      name: 'portfolioImage', maxCount: 1
    },
    {
      name: 'projectImage', maxCount: 1
    }
  ]
)

const uploadFilter = (request, response, next) => {
  upload(request, response, function (err) {
    if (err instanceof multer.MulterError) {
      response.status(400).send({
        success: false,
        message: err.message
      })
    } else if (err) {
      response.status(400).send({
        success: false,
        message: err.message
      })
    } else {
      next()
    }
  })
}

module.exports = uploadFilter
