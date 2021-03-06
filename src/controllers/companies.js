// const db = require('../helpers/db')
const { statusReadCompanyByAcId, statusRead, statusNotFound, statusErrorServer, statusReadCompanyById, statusUpdateData, statusFailedUpdate } = require('../helpers/statusCRUD')
const { getAllCompanyModel, getCompanyByIdModel, getCompanyByAcIdModel, updateAllCompanyByIdModel } = require('../models/companies')

module.exports = {
  getAllCompany: async (req, res) => {
    try {
      const result = await getAllCompanyModel()

      if (result.length) {
        statusRead(res, result)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  getCompanyByAcId: async (req, res) => {
    try {
      const { acId } = req.params

      const result = await getCompanyByAcIdModel(acId)
      if (result.length) {
        statusReadCompanyByAcId(res, result, acId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      console.log(error)
      statusErrorServer(res, error)
    }
  },
  getCompanyById: async (req, res) => {
    try {
      const { cnId } = req.params

      const result = await getCompanyByIdModel(cnId)
      if (result.length) {
        statusReadCompanyById(res, result, cnId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      console.log(error)
      statusErrorServer(res, error)
    }
  },
  updateAllCompanyById: async (req, res) => {
    try {
      const { companyId } = req.params
      const resultSelect = await getCompanyByIdModel(companyId)
      const data = req.body
      const image = req.file === undefined ? resultSelect[0].cn_profile_pict : req.file.filename

      const setData = {
        ...data,
        cn_profile_pict: image
      }

      if (resultSelect.length) {
        const resultUpdate = await updateAllCompanyByIdModel(companyId, setData)
        if (resultUpdate.affectedRows) {
          statusUpdateData(res, resultUpdate)
        } else {
          statusFailedUpdate(res, resultUpdate)
        }
      } else {
        statusNotFound(res, resultSelect)
      }
    } catch (error) {
      console.log(error)
      statusErrorServer(res, error)
    }
  }
}
