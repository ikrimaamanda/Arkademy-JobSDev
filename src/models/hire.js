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
      const query = `SELECT *
      FROM hire hr
      JOIN project pj
        ON (pj.pj_id = hr.pj_id)
     WHERE pj.pj_id = ${projectId}`

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
  updateAllHireByIdModel: (data) => {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE hire SET ?'

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
