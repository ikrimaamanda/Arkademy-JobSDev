const db = require('../helpers/db')

const { createEngineerModel } = require('../models/engineers')
const { createCompanyModel } = require('../models/companies')

module.exports = {
  getAllAccountModel: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM account'

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAccountByIdModel: (accountId) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM account WHERE ac_id = ${accountId}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  createAccountModel: (data) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO account SET ? '

      const dataAcc = {
        ac_name: data.ac_name,
        ac_email: data.ac_email,
        ac_phone_number: data.ac_phone_number,
        ac_password: data.ac_password,
        ac_level: data.ac_level
      }

      db.query(query, dataAcc, async (err, res, fields) => {
        if (!err) {
          if (parseInt(data.ac_level) === 0) {
            await createEngineerModel(res.insertId)
          } else {
            await createCompanyModel({
              ac_id: res.insertId,
              cn_company: data.cn_company,
              cn_position: data.cn_position
            })
          }
          resolve(res)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateAllAccountByIdModel: (accountName, accountPhoneNumber, accountPassword, accountId) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE account SET ac_name = '${accountName}', ac_phone_number = '${accountPhoneNumber}', ac_password = '${accountPassword}' WHERE ac_id = '${accountId}'`

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateParsialOrAllAcccountByIdModel: (dataColumn, accountId) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE account SET ${dataColumn} WHERE ac_id = ${accountId}`
      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
