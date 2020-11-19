require('dotenv')
const { response } = require('express')
const jwt = require('jsonwebtoken')
const { statusHaveToLogin, statusAuthorization } = require('../helpers/statusCRUD')

module.exports = {
  authorizationRecruiter: (req, res, next) => {
    let token = req.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.JWT_KEY, (error, result) => {
        if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
          response.status(403).send({
            success: false,
            message: error.message
          })
        } else {
          console.log(result)
          if (result.ac_level === 1) {
            next()
          } else {
            statusAuthorization(res)
          }
        }
      })
    } else {
      statusHaveToLogin(res)
    }
  },
  authorizationEngineer: (req, res, next) => {
    let token = req.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.JWT_KEY, (error, result) => {
        if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
          response.status(403).send({
            success: false,
            message: error.message
          })
        } else {
          console.log(result)
          if (result.ac_level === 0) {
            next()
          } else {
            statusAuthorization(res)
          }
        }
      })
    } else {
      statusHaveToLogin(res)
    }
  }
}
