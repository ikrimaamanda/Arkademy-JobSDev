const { query } = require('express')
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
  getPortfolioByEnIdModel: (enId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM portfolio WHERE en_id = ${enId}`

      db.query(query, (err, result, fields) => {
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
  updateAllPortfolioByIdModel: (data, portfolioId) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE portfolio SET ? WHERE pr_id = ${portfolioId}`

      db.query(query, data, (err, result, fields) => {
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
