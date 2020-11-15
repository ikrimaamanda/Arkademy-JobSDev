const db = require('../helpers/db')

module.exports = {
  getAllEngineerModel: (paginate) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT en.en_id, ac.ac_id, ac.ac_name, ac.ac_email, ac.ac_phone_number, en.en_job_title,en.en_job_type,
      en.en_location, en.en_description, en.en_profile_pict
      FROM engineer en
      JOIN account ac
      ON (ac.ac_id = en.ac_id) 
      LIMIT ${paginate.limit}
      OFFSET ${paginate.offset}`

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getEngineerByIdModel: (enId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT en.en_id, ac.ac_id, ac.ac_name, en.en_job_title,en.en_job_type,
      en.en_location, en.en_description, en_profile_pict
      FROM engineer en
      JOIN account ac
      ON (ac.ac_id = en.ac_id) WHERE ?`

      db.query(query, { en_id: enId }, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  createEngineerModel: (acId) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO engineer SET ?'

      db.query(query, { ac_id: acId }, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateAllEngineerByIdModel: (engineerId, data) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE engineer SET ? WHERE en_id = ${engineerId}`

      db.query(query, data, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getSearchEngineerModel: (paginate) => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT en.en_id,
               ac.ac_id,
               ac.ac_name,
               en.en_job_title,
               en.en_job_type,
               en.en_location
          FROM engineer en
          JOIN account ac 
            ON (ac.ac_id = en.ac_id)
          JOIN skill sk 
            ON (sk.en_id = en.en_id)
         WHERE ac.ac_name
          LIKE '%${paginate.search}%'
          OR en.en_job_title
          LIKE '%${paginate.search}%'
            OR sk.sk_skill_name
          LIKE '%${paginate.search}%'
      GROUP BY ac.ac_name
         LIMIT ${paginate.limit} 
        OFFSET ${paginate.offset}
      `

      db.query(query, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },
  getFilterEngineerModel: (paginate) => {
    return new Promise((resolve, reject) => {
      let query

      if (parseInt(paginate.filter) === 0) {
        query = `
          SELECT en.en_id,
               ac.ac_id,
               ac.ac_name,
               en.en_job_title,
               en.en_job_type,
               en.en_location,
               sk.sk_skill_name
            FROM engineer en
            JOIN account ac
              ON ac.ac_id = en.ac_id
            JOIN skill sk
              ON sk.en_id = en.en_id
        GROUP BY ac.ac_name
        ORDER BY ac.ac_name ASC
           LIMIT ${paginate.limit} 
          OFFSET ${paginate.offset}
        `
      } else if (parseInt(paginate.filter) === 1) {
        query = `
          SELECT en.en_id,
                 ac.ac_id,
                 ac.ac_name,
                 en.en_job_title,
                 en.en_job_type,
                 en.en_location,
                 sk.sk_skill_name
            FROM engineer en
            JOIN account ac
              ON ac.ac_id = en.ac_id
            JOIN skill sk
              ON sk.en_id = en.en_id
        GROUP BY ac.ac_name
        ORDER BY sk.sk_skill_name ASC
           LIMIT ${paginate.limit} 
          OFFSET ${paginate.offset}
        `
      } else if (parseInt(paginate.filter) === 2) {
        query = `
          SELECT en.en_id,
                ac.ac_id,
                ac.ac_name,
                en.en_job_title,
                en.en_job_type,
                en.en_location,
                sk.sk_skill_name
            FROM engineer en
            JOIN account ac
              ON ac.ac_id = en.ac_id
            JOIN skill sk
              ON sk.en_id = en.en_id
        GROUP BY ac.ac_name
        ORDER BY en.en_location ASC
           LIMIT ${paginate.limit} 
          OFFSET ${paginate.offset}
        `
      } else if (parseInt(paginate.filter) === 3) {
        query = `
          SELECT en.en_id,
                 ac.ac_id,
                 ac.ac_name,
                 en.en_job_title,
                 en.en_job_type,
                 en.en_location,
                 sk.sk_skill_name
            FROM engineer en
            JOIN account ac
              ON ac.ac_id = en.ac_id
            JOIN skill sk
              ON sk.en_id = en.en_id
           WHERE en.en_job_type = 'freelance'
        GROUP BY ac.ac_name
        ORDER BY en.en_job_type ASC
           LIMIT ${paginate.limit} 
          OFFSET ${paginate.offset}
        `
      } else {
        query = `
          SELECT en.en_id,
                 ac.ac_id,
                 ac.ac_name,
                 en.en_job_title,
                 en.en_job_type,
                 en.en_location,
                 sk.sk_skill_name
            FROM engineer en
            JOIN account ac
              ON ac.ac_id = en.ac_id
            JOIN skill sk
              ON sk.en_id = en.en_id
           WHERE en.en_job_type = 'fulltime'
        GROUP BY ac.ac_name
        ORDER BY en.en_job_type ASC
           LIMIT ${paginate.limit} 
          OFFSET ${paginate.offset}
        `
      }

      db.query(query, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  }
}
