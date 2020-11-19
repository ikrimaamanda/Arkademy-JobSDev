// const db = require('../helpers/db')
const { statusRead, statusNotFound, statusErrorServer, statusReadAccountById, statusPost, statusFailedAddData, statusUpdateData, statusFailedUpdate, statusMustFillAllFields, statusCheckEmail, statusRegistration, statusAccountNotRegister } = require('../helpers/statusCRUD')
const { getAllAccountModel, getAccountEmailModel, registrationAccountModel, getAccountByIdModel, updateAllAccountByIdModel, updateParsialOrAllAcccountByIdModel } = require('../models/accounts')
const bcrypt = require('bcrypt')

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
      // action check email
      const dataUser = await getAccountEmailModel(accountEmail)
      if (dataUser.length >= 1) {
        statusCheckEmail(res)
      } else {
        const resultRegist = await registrationAccountModel(setData)
        console.log(resultRegist)
        if (resultRegist.affectedRows) {
          statusRegistration(res, setData)
        } else {
          statusFailedAddData(res)
        }
      }
    } catch (error) {
      statusErrorServer(res, error)
      console.log(error)
    }
  },
  // loginAccount: async (req, res) => {
  //   try {
  //     const {accountEmail, accountPassword} = req.body
  //     const dataUser = await getAccountEmailModel(accountEmail)
  //     if(dataUser.length){

  //     } else {
  //       statusAccountNotRegister(res)
  //     }
  //   } catch(error) {
  //     statusErrorServer(res, error)
  //   }
  // },
  updateAllAccountById: async (req, res) => {
    try {
      const { accountId } = req.params
      const resultSelect = await getAccountByIdModel(accountId)

      if (resultSelect.length) {
        const resultUpdate = await updateAllAccountByIdModel(req.body, accountId)
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
