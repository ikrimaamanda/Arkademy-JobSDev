// const db = require('../helpers/db')
const { statusRead, statusNotFound, statusErrorServer, statusReadAccountById, statusUpdateData, statusFailedUpdate, statusCheckEmail, statusMustFillAllFields, statusAccountNotRegister, statusWrongPassword, statusLogin, statusDeleteById, statusFailedDeleteById } = require('../helpers/statusCRUD')
const { getAllAccountModel, getAccountEmailModel, registrationAccountModel, getAccountByIdModel, updateAllAccountByIdModel, deleteAccountByIdModel } = require('../models/accounts')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv')

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
  registrationAccount: async (req, res) => {
    const { accountName, accountEmail, accountPhoneNumber, accountPassword, accountLevel, companyName, companyPosition } = req.body
    const salt = bcrypt.genSaltSync(10)
    const encryptPassword = bcrypt.hashSync(accountPassword, salt)

    const setData = {
      ac_name: accountName,
      ac_email: accountEmail,
      ac_phone_number: accountPhoneNumber,
      ac_password: encryptPassword,
      ac_level: accountLevel,
      ac_created_at: new Date(),
      cn_company: companyName,
      cn_position: companyPosition
    }
    try {
      const dataUser = await getAccountEmailModel(accountEmail)

      if (accountName.trim() && accountEmail.trim() && accountPhoneNumber.trim() && accountPassword.trim() && accountLevel.trim()) {
        // action check email
        if (dataUser.length >= 1) {
          statusCheckEmail(res)
        } else {
          const resultRegist = await registrationAccountModel(setData)
          res.status(200).send({
            success: true,
            message: 'Registration Success',
            data: resultRegist
          })
        }
      } else {
        statusMustFillAllFields(res)
      }
    } catch (error) {
      statusErrorServer(res, error)
      console.log(error)
    }
  },
  loginAccount: async (req, res) => {
    try {
      const { accountEmail, accountPassword } = req.body
      const dataUser = await getAccountEmailModel(accountEmail)

      if (accountEmail.trim() && accountPassword.trim()) {
        if (dataUser.length >= 1) {
          const checkPassword = bcrypt.compareSync(accountPassword, dataUser[0].ac_password)
          if (checkPassword) {
            const { ac_id, ac_email, ac_level } = dataUser[0]
            let payload = {
              ac_id, ac_email, ac_level
            }
            const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '24H' })
            payload = { ...payload, token }
            statusLogin(res, payload)
          } else {
            statusWrongPassword(res, checkPassword)
          }
        } else {
          statusAccountNotRegister(res)
        }
      } else {
        statusMustFillAllFields(res)
      }
    } catch (error) {
      statusErrorServer(res, error)
      console.log(error)
    }
  },
  updateAllAccountById: async (req, res) => {
    try {
      const { accountId } = req.params
      const resultSelect = await getAccountByIdModel(accountId)
      const { accountName, accountPhoneNumber, accountPassword } = req.body
      const salt = bcrypt.genSaltSync(10)
      const encryptPassword = bcrypt.hashSync(accountPassword, salt)

      const setData = {
        ac_name: accountName,
        ac_phone_number: accountPhoneNumber,
        ac_password: encryptPassword
      }

      if (resultSelect.length) {
        const resultUpdate = await updateAllAccountByIdModel(setData, accountId)
        if (resultUpdate.affectedRows) {
          statusUpdateData(res, resultUpdate)
        } else {
          statusFailedUpdate(res, resultUpdate)
        }
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  deleteAccountById: async (req, res) => {
    try {
      const { accountId } = req.params
      const resultSelect = await getAccountByIdModel(accountId)
      if (resultSelect.length) {
        const resultDelete = await deleteAccountByIdModel(accountId)
        if (resultDelete.affectedRows) {
          statusDeleteById(res, resultDelete)
        } else {
          statusFailedDeleteById(res, resultDelete)
        }
      } else {
        statusNotFound(res, resultSelect)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  }
}
