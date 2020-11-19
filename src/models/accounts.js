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
      const query = 'INSERT INTO account SET ? '

      const dataAcc = {
        ac_name: setData.ac_name,
        ac_email: setData.ac_email,
        ac_phone_number: setData.ac_phone_number,
        ac_password: setData.ac_password,
        ac_level: setData.ac_level,
        ac_created_at: setData.ac_created_at
      }

      db.query(query, dataAcc, async (err, res, fields) => {
        if (!err) {
          const newResult = {
            ac_id: res.insertId,
            ...setData
          }
          delete newResult.ac_password
          if (parseInt(setData.accountLevel) === 0) {
            await createEngineerModel(res.insertId)
          } else {
            await createCompanyModel({
              ac_id: res.insertId,
              cn_company: setData.companyName,
              cn_position: setData.companyPosition
            })
          }
          resolve(res)
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
