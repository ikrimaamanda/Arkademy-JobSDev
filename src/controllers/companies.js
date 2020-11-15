// const db = require('../helpers/db')
const { statusRead, statusNotFound, statusErrorServer, statusReadCompanyById, statusPost, statusFailedAddData, statusUpdateData, statusFailedUpdate, statusMustFillAllFields, statusDeleteById, statusFailedDeleteById } = require('../helpers/statusCRUD')
const { getAllCompanyModel, createCompanyModel, getCompanyByIdModel, updateAllCompanyByIdModel } = require('../models/companies')

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
  getCompanyById: async (req, res) => {
    try {
      const { companyId } = req.params

      const result = await getCompanyByIdModel(companyId)
      if (result.length) {
        statusReadCompanyById(res, result, companyId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      console.log(error)
      statusErrorServer(res, error)
    }
  },
  createCompany: async (req, res) => {
    try {
      const result = await createCompanyModel(req.body)

      if (result.affectedRows) {
        statusPost(res, result)
      } else {
        statusFailedAddData(res, result)
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

      if (resultSelect.length) {
        const resultUpdate = await updateAllCompanyByIdModel(companyId, req.body)
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
