const db = require('../helpers/db')

module.exports = {
  createAdminModel: (acId) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO admin SET ?'

      db.query(query, { ac_id: acId }, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          console.log(err)
          reject(new Error(err))
        }
      })
    })
  }
}
