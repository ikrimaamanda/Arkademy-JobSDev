const db = require('../helpers/db')

module.exports = {
  getAllCompanyModel: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT cn.cn_id, ac.ac_id, ac.ac_name, ac.ac_email, ac.ac_phone_number, cn.cn_company, cn.cn_position, cn.cn_fields, cn.cn_city, cn.cn_description, cn.cn_instagram, cn.cn_linkedin , cn.cn_profile_pict
      FROM company cn
      JOIN account ac
      ON (ac.ac_id = cn.ac_id)`

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getCompanyByAcIdModel: (acId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT cn.cn_id, ac.ac_id, ac.ac_name, ac.ac_email, ac.ac_phone_number, cn.cn_company, cn.cn_position, cn.cn_fields, cn.cn_city, cn.cn_description, cn.cn_instagram, cn.cn_linkedin , cn.cn_profile_pict
      FROM company cn
      JOIN account ac
      ON (ac.ac_id = cn.ac_id) 
      WHERE ac.ac_id = ${acId}`

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getCompanyByIdModel: (cnId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT cn.cn_id, ac.ac_id, ac.ac_name, ac.ac_email, ac.ac_phone_number, cn.cn_company, cn.cn_position, cn.cn_fields, cn.cn_city, cn.cn_description, cn.cn_instagram, cn.cn_linkedin , cn.cn_profile_pict
      FROM company cn
      JOIN account ac
      ON (ac.ac_id = cn.ac_id) 
      WHERE cn.cn_id = ${cnId}`

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  createCompanyModel: (data) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO company SET ? '

      db.query(query, data, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateAllCompanyByIdModel: (companyId, data) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE company SET ? WHERE cn_id = ${companyId}`

      db.query(query, data, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
