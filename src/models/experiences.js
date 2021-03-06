const db = require('../helpers/db')

module.exports = {
  getAllExperienceModel: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM experience'

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getExperienceByIdModel: (expId) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM experience WHERE ex_id = ${expId}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getExperienceByEnIdModel: (enId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM experience WHERE en_id = ${enId}`

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  createExperienceModel: (data) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO experience SET ?'

      db.query(query, data, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateAllExperienceByIdModel: (data, expId) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE experience SET ? WHERE ex_id = '${expId}'`

      db.query(query, data, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteExperienceByIdModel: (expId) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM experience WHERE ex_id = ${expId}`

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
