const db = require('../helpers/db')
const { getSkillByEnIdModel } = require('../models/skill')
const { getPortfolioByEnIdModel } = require('../models/portfolios')
const { getExperienceByEnIdModel } = require('../models/experiences')

module.exports = {
  getAllEngineerModel: (paginate) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT en.en_id, ac.ac_id, ac.ac_name, ac.ac_email, ac.ac_phone_number, 
      en.en_job_title,en.en_job_type, en.en_location, en.en_description, en.en_profile_pict, 
      sk.sk_skill_name
      FROM engineer en
      JOIN account ac
      ON (ac.ac_id = en.ac_id)
      LEFT JOIN skill sk
      ON (en.en_id = sk.en_id)
      GROUP BY ac.ac_name
      LIMIT ${paginate.limit}
      OFFSET ${paginate.offset}`

      db.query(query, async (err, result, fields) => {
        if (!err) {
          const data = []

          let i = 0
          while (i < result.length) {
            const item = result[i]
            const skill = await getSkillByEnIdModel(item.en_id)
            data[i] = {
              en_id: item.en_id,
              ac_id: item.ac_id,
              ac_name: item.ac_name,
              ac_email: item.ac_email,
              ac_phone_number: item.ac_phone_number,
              en_job_title: item.en_job_title,
              en_job_type: item.en_job_type,
              en_location: item.en_location,
              en_description: item.en_description,
              en_profile_pict: item.en_profile_pict,
              en_skill: skill
            }
            i++
          }

          resolve(data)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getCompleteEngineerByIdModel: (enId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT en.en_id, ac.ac_id, ac.ac_name, ac.ac_email, ac.ac_phone_number, 
      en.en_job_title, en.en_job_type, en.en_location, en.en_description, en.en_profile_pict,  
      sk.sk_skill_name,
      pr.pr_app_name,
      ex.ex_company
      FROM account ac 
      JOIN engineer en 
      ON ac.ac_id = en.ac_id 
      LEFT JOIN skill sk
      ON en.en_id = sk.en_id
      LEFT JOIN portfolio pr
      ON en.en_id = pr.en_id
      LEFT JOIN experience ex
      ON en.en_id = ex.en_id
      WHERE en.en_id = ${enId}`

      db.query(query, async (err, result, fields) => {
        if (!err) {
          const data = []

          let i = 0
          while (i < result.length) {
            const item = result[i]
            const skill = await getSkillByEnIdModel(item.en_id)
            const portfolio = await getPortfolioByEnIdModel(enId)
            const experience = await getExperienceByEnIdModel(enId)
            data[i] = {
              en_id: item.en_id,
              ac_id: item.ac_id,
              ac_name: item.ac_name,
              ac_email: item.ac_email,
              ac_phone_number: item.ac_phone_number,
              en_job_title: item.en_job_title,
              en_job_type: item.en_job_type,
              en_location: item.en_location,
              en_description: item.en_description,
              en_profile_pict: item.en_profile_pict,
              en_skill: skill,
              en_portfolio: portfolio,
              en_experience: experience
            }
            i++
          }
          resolve(data)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getEngineerByIdModel: (enId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT en.en_id, ac.ac_id, ac.ac_name, ac.ac_email, ac.ac_phone_number, 
      en.en_job_title, en.en_job_type, en.en_location, en.en_description, en.en_profile_pict
      FROM engineer en
      JOIN account ac
      ON (ac.ac_id = en.ac_id)
      WHERE en.en_id = ${enId}`

      db.query(query, (err, result, fields) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getEngineerByAcIdModel: (acId) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT en.en_id, ac.ac_id, ac.ac_name, ac.ac_email, ac.ac_phone_number, 
      en.en_job_title, en.en_job_type, en.en_location, en.en_description, en.en_profile_pict
      FROM engineer en
      JOIN account ac
      ON (ac.ac_id = en.ac_id)
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
  updateAllEngineerByIdModel: (engineerId, setData) => {
    return new Promise((resolve, reject) => {
      const query = `UPDATE engineer SET ? WHERE en_id = ${engineerId}`

      db.query(query, setData, (err, result, fields) => {
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
      const query = `SELECT en.en_id, ac.ac_id, ac.ac_name, ac.ac_email, ac.ac_phone_number, 
      en.en_job_title,en.en_job_type, en.en_location, en.en_description, en.en_profile_pict, 
      sk.sk_skill_name
      FROM engineer en
        JOIN account ac 
        ON (ac.ac_id = en.ac_id)
        LEFT JOIN skill sk
        ON (en.en_id = sk.en_id)
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

      db.query(query, async (err, result, fields) => {
        if (!err) {
          const data = []

          let i = 0
          while (i < result.length) {
            const item = result[i]
            const skill = await getSkillByEnIdModel(item.en_id)
            data[i] = {
              en_id: item.en_id,
              ac_id: item.ac_id,
              ac_name: item.ac_name,
              ac_email: item.ac_email,
              ac_phone_number: item.ac_phone_number,
              en_job_title: item.en_job_title,
              en_job_type: item.en_job_type,
              en_location: item.en_location,
              en_description: item.en_description,
              en_profile_pict: item.en_profile_pict,
              en_skill: skill
            }
            i++
          }

          resolve(data)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getFilterEngineerModel: (paginate) => {
    return new Promise((resolve, reject) => {
      let query

      if (parseInt(paginate.filter) === 0) {
        query = `
        SELECT en.en_id, ac.ac_id, ac.ac_name, ac.ac_email, ac.ac_phone_number, 
        en.en_job_title,en.en_job_type, en.en_location, en.en_description, en.en_profile_pict, 
        sk.sk_skill_name
        FROM engineer en
        JOIN account ac
        ON ac.ac_id = en.ac_id
        LEFT JOIN skill sk
        ON sk.en_id = en.en_id
        GROUP BY ac.ac_name
        ORDER BY ac.ac_name ASC
        LIMIT ${paginate.limit} 
        OFFSET ${paginate.offset}
        `
      } else if (parseInt(paginate.filter) === 1) {
        query = `
        SELECT en.en_id, ac.ac_id, ac.ac_name, ac.ac_email, ac.ac_phone_number, 
        en.en_job_title,en.en_job_type, en.en_location, en.en_description, en.en_profile_pict, 
        sk.sk_skill_name
        FROM engineer en
        JOIN account ac
        ON ac.ac_id = en.ac_id
        LEFT JOIN skill sk
        ON sk.en_id = en.en_id
        GROUP BY ac.ac_name
        ORDER BY sk.sk_skill_name ASC
        LIMIT ${paginate.limit} 
        OFFSET ${paginate.offset}
        `
      } else if (parseInt(paginate.filter) === 2) {
        query = `
        SELECT en.en_id, ac.ac_id, ac.ac_name, ac.ac_email, ac.ac_phone_number, 
        en.en_job_title,en.en_job_type, en.en_location, en.en_description, en.en_profile_pict, 
        sk.sk_skill_name
        FROM engineer en
        JOIN account ac
        ON ac.ac_id = en.ac_id
        LEFT JOIN skill sk
        ON sk.en_id = en.en_id
        GROUP BY ac.ac_name
        ORDER BY en.en_location ASC
        LIMIT ${paginate.limit} 
        OFFSET ${paginate.offset}
        `
      } else if (parseInt(paginate.filter) === 3) {
        query = `
        SELECT en.en_id, ac.ac_id, ac.ac_name, ac.ac_email, ac.ac_phone_number, 
        en.en_job_title,en.en_job_type, en.en_location, en.en_description, en.en_profile_pict, 
        sk.sk_skill_name
        FROM engineer en
        JOIN account ac
        ON ac.ac_id = en.ac_id
        LEFT JOIN skill sk
        ON sk.en_id = en.en_id
        WHERE en.en_job_type = 'freelance'
        GROUP BY ac.ac_name
        ORDER BY en.en_job_type ASC
        LIMIT ${paginate.limit} 
        OFFSET ${paginate.offset}
        `
      } else if (parseInt(paginate.filter) === 4) {
        query = `
        SELECT en.en_id, ac.ac_id, ac.ac_name, ac.ac_email, ac.ac_phone_number, 
        en.en_job_title,en.en_job_type, en.en_location, en.en_description, en.en_profile_pict, 
        sk.sk_skill_name
        FROM engineer en
        JOIN account ac
        ON ac.ac_id = en.ac_id
        LEFT JOIN skill sk
        ON sk.en_id = en.en_id
        WHERE en.en_job_type = 'fulltime'
        GROUP BY ac.ac_name
        ORDER BY en.en_job_type ASC
        LIMIT ${paginate.limit} 
        OFFSET ${paginate.offset}
        `
      }

      db.query(query, async (err, result, fields) => {
        if (!err) {
          const data = []

          let i = 0
          while (i < result.length) {
            const item = result[i]
            const skill = await getSkillByEnIdModel(item.en_id)
            data[i] = {
              en_id: item.en_id,
              ac_id: item.ac_id,
              ac_name: item.ac_name,
              ac_email: item.ac_email,
              ac_phone_number: item.ac_phone_number,
              en_job_title: item.en_job_title,
              en_job_type: item.en_job_type,
              en_location: item.en_location,
              en_description: item.en_description,
              en_profile_pict: item.en_profile_pict,
              en_skill: skill
            }
            i++
          }

          resolve(data)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
