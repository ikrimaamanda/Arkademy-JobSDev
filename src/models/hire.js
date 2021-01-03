const db = require('../helpers/db')

module.exports = {
  getAllHireModel: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM hire'

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getHireByIdModel: (hireId) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM hire WHERE hr_id = ${hireId}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getHireByProjectIdModel: (projectId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT hr.hr_id, cn.cn_id, en.en_id, en.en_job_title, en.en_job_type, en.en_profile_pict, pj.pj_id, pj.pj_project_name, 
      pj.pj_description, pj.pj_deadline, pj.pj_image, hr.hr_price, hr.hr_message, 
      hr.hr_status, hr.hr_date_confirm, hr.hr_created_at, pj.pj_created_at, pj.pj_updated_at, ac.ac_name, ac.ac_email, ac.ac_phone_number
      FROM hire hr
      JOIN engineer en
      ON (hr.en_id = en.en_id)
      JOIN project pj
      ON (hr.pj_id = pj.pj_id)
      JOIN company cn
      ON (pj.cn_id = cn.cn_id)
      JOIN account ac
      ON (en.ac_id = ac.ac_id)
      WHERE
      pj.pj_id = ${projectId}`

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getHireByEnIdModel: (enId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT hr.hr_id, cn.cn_id, cn.cn_company, 
      cn.cn_position, cn.cn_fields, cn.cn_city, cn.cn_description, 
      cn.cn_instagram, cn.cn_linkedin, en.en_id, pj.pj_id, pj.pj_project_name, 
      pj.pj_description, pj.pj_deadline, pj.pj_image, hr.hr_price, hr.hr_message, 
      hr.hr_status, hr.hr_date_confirm 
      FROM hire hr
      JOIN engineer en
      ON (hr.en_id = en.en_id)
      JOIN project pj
      ON (hr.pj_id = pj.pj_id)
      JOIN company cn
      ON (pj.cn_id = cn.cn_id)
      WHERE
      hr.en_id = ${enId}
      `

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  createHireModel: (data) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO hire SET ?'

      db.query(query, data, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateAllHireByIdModel: (data, hireId) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE hire SET ? WHERE hr_id = ${hireId}`

      db.query(query, data, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteHireByIdModel: (hireId) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM hire WHERE hr_id = ${hireId}`

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
