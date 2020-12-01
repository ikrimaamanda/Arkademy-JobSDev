const db = require('../helpers/db')

const { createEngineerModel } = require('../models/engineers')
const { createCompanyModel } = require('../models/companies')
const { createAdminModel } = require('../models/admin')

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
  getAccountEmailModel: (accountEmail) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM account WHERE ac_email = ?', accountEmail, (err, result, fields) => {
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
  registrationAccountModel: (setData) => {
    return new Promise((resolve, reject) => {
      const dataAcc = {
        ac_name: setData.ac_name,
        ac_email: setData.ac_email,
        ac_phone_number: setData.ac_phone_number,
        ac_password: setData.ac_password,
        ac_level: setData.ac_level,
        ac_created_at: setData.ac_created_at
      }

      const query = 'INSERT INTO account SET ? '

      db.query(query, dataAcc, async (err, result, fields) => {
        if (!err) {
          const newResult = {
            ac_id: result.insertId,
            ...setData
          }
          delete newResult.ac_password
          delete newResult.cn_company
          delete newResult.cn_position
          if (parseInt(setData.ac_level) === 0) {
            await createEngineerModel(result.insertId)
          } else if (parseInt(setData.ac_level) === 2) {
            await createAdminModel(result.insertId)
          } else {
            await createCompanyModel({
              ac_id: result.insertId,
              cn_company: setData.cn_company,
              cn_position: setData.cn_position
            })
          }
          resolve(newResult)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateAllAccountByIdModel: (data, accountId) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE account SET ? WHERE ac_id = '${accountId}'`

      db.query(query, data, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteAccountByIdModel: (accountId) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM account WHERE ac_id = ${accountId}`

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
