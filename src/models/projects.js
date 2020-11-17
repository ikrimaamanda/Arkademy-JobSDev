const db = require('../helpers/db')

module.exports = {
  getAllProjectModel: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM project'

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getProjectByIdModel: (projectId) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM project WHERE pj_id = ${projectId}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getProjectByCnIdModel: (cnId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM project WHERE cn_id = ${cnId}`

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  createProjectModel: (data) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO project SET ?'

      db.query(query, data, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateAllProjectByIdModel: (data) => {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE project SET ?'

      db.query(query, data, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteProjectByIdModel: (projectId) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM project WHERE pj_id = ${projectId}`

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
