// const db = require('../helpers/db')
const { statusRead, statusNotFound, statusErrorServer, statusReadAccountById, statusPost, statusFailedAddData, statusUpdateData, statusFailedUpdate, statusMustFillAllFields } = require('../helpers/statusCRUD')
const { getAllAccountModel, createAccountModel, getAccountByIdModel, updateAllAccountByIdModel, updateParsialOrAllAcccountByIdModel } = require('../models/accounts')

module.exports = {
  getAllAccount: async (req, res) => {
    try {
      const result = await getAllAccountModel()
      if (result.length) {
        statusRead(res, result)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  getAccountById: async (req, res) => {
    try {
      const { accountId } = req.params

      const result = await getAccountByIdModel(accountId)
      if (result.length) {
        statusReadAccountById(res, result, accountId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  createAccount: async (req, res) => {
    try {
      // const { accountName, accountEmail, accountPhoneNumber, accountPassword, accountLevel } = req.body
      const result = await createAccountModel(req.body)
      if (result.affectedRows) {
        statusPost(res, result)
      } else {
        statusFailedAddData(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  updateAllAccountById: async (req, res) => {
    try {
      const { accountId } = req.params
      const { accountName, accountPhoneNumber, accountPassword } = req.body
      const resultSelect = await getAccountByIdModel(accountId)

      if (accountName.trim() && accountPhoneNumber.trim() && accountPassword.trim()) {
        if (resultSelect.length) {
          const resultUpdate = await updateAllAccountByIdModel(accountName, accountPhoneNumber, accountPassword, accountId)
          if (resultUpdate.affectedRows) {
            statusUpdateData(res, resultUpdate)
          } else {
            statusFailedUpdate(res, resultUpdate)
          }
        }
      } else {
        statusMustFillAllFields(res, resultSelect)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  updateParsialOrAllAcccountById: async (req, res) => {
    try {
      const { accountId } = req.params
      const { ac_name = '', ac_phone_number = '', ac_password = '' } = req.body
      const resultSelect = await getAccountByIdModel(accountId)

      if (ac_name.trim() || ac_phone_number.trim() || ac_password.trim()) {
        if (resultSelect.length) {
          const dataColumn = Object.entries(req.body).map(item => {
            return parseInt(item[1]) > 0 ? `${item[0] = item[1]}`
              : `${item[0]} = '${item[1]}'`
          })
          const resultUpdate = await updateParsialOrAllAcccountByIdModel(dataColumn, accountId)
          if (resultUpdate.affectedRows) {
            res.status(200).send({
              success: true,
              message: 'Successfully updated account'
            })
          } else {
            res.status(400).send({
              success: false,
              message: 'Update account failed'
            })
          }
        }
      } else {
        res.status(400).send({
          success: false,
          message: 'Some fields must be filled!'
        })
      }
    } catch (error) {
      console.log(error)
      res.status(500).send({
        success: false,
        message: 'Internal Server Error!'
      })
    }
  }
}
