// const skill = require('../controllers/skill')
const db = require('../helpers/db')

module.exports = {
  getAllSkillModel: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM skill'

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getSkillByIdModel: (skillId) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM skill WHERE sk_id = ${skillId}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getSkillByEnIdModel: (enId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM skill WHERE en_id = ${enId}`

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  createSkillModel: (data) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO skill SET ?'

      db.query(query, data, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateAllSkillByIdModel: (skillName, skillId) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE skill SET sk_skill_name = '${skillName}' WHERE sk_id = '${skillId}'`

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteSkillByIdModel: (skillId) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM skill WHERE sk_id = ${skillId}`

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
