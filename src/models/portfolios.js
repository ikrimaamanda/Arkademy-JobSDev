const db = require('../helpers/db')

module.exports = {
  getAllPortfolioModel: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM portfolio'

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getPortfolioByIdModel: (portfolioId) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM portfolio WHERE pr_id = ${portfolioId}`, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  createPortfolioModel: (data) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO portfolio SET ?'

      db.query(query, data, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateAllPortfolioByIdModel: (portfolioName, portfolioDesc, portfolioLinkPub, portfolioLinkRepo, portfolioWorkPlace, portfolioType, portfolioImage, portfolioId) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE portfolio SET pr_app_name = '${portfolioName}', pr_description = '${portfolioDesc}', pr_link_pub = '${portfolioLinkPub}', pr_link_repo = '${portfolioLinkRepo}', pr_workplace = '${portfolioWorkPlace}', pr_type = '${portfolioType}', pr_image = '${portfolioImage}' WHERE pr_id = '${portfolioId}'`

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deletePortfolioByIdModel: (portfolioId) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM portfolio WHERE pr_id = ${portfolioId}`

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
