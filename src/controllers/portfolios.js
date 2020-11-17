// const db = require('../helpers/db')
const { statusRead, statusNotFound, statusErrorServer, statusReadPortfolioById, statusPost, statusFailedAddData, statusUpdateData, statusFailedUpdate, statusMustFillAllFields, statusDeleteById, statusFailedDeleteById, statusReadPortfolioByEnId } = require('../helpers/statusCRUD')
const { getAllPortfolioModel, createPortfolioModel, getPortfolioByIdModel, getPortfolioByEnIdModel, deletePortfolioByIdModel, updateAllPortfolioByIdModel } = require('../models/portfolios')

module.exports = {
  getAllPortfolio: async (req, res) => {
    try {
      const result = await getAllPortfolioModel()

      if (result.length) {
        statusRead(res, result)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  getPortfolioById: async (req, res) => {
    try {
      const { portfolioId } = req.params

      const result = await getPortfolioByIdModel(portfolioId)
      if (result.length) {
        statusReadPortfolioById(res, result, portfolioId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  // FIX this part
  getPortfolioByEnId: async (req, res) => {
    try {
      const { enId } = req.params
      console.log(enId)
      const result = await getPortfolioByEnIdModel(enId)

      if (result.length) {
        statusReadPortfolioByEnId(res, result, enId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  createPortfolio: async (req, res) => {
    try {
      const result = await createPortfolioModel(req.body)
      if (result.affectedRows) {
        statusPost(res, result)
      } else {
        statusFailedAddData(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  updateAllPortfolioById: async (req, res) => {
    try {
      const { portfolioId } = req.params
      const resultSelect = await getPortfolioByIdModel(portfolioId)

      if (resultSelect.length) {
        const resultUpdate = await updateAllPortfolioByIdModel(req.body, portfolioId)
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
  },
  deletePortfolioById: async (req, res) => {
    try {
      const { portfolioId } = req.params
      const resultSelect = await getPortfolioByIdModel(portfolioId)

      if (resultSelect.length) {
        const resultDelete = await deletePortfolioByIdModel(portfolioId)
        if (resultDelete.affectedRows) {
          statusDeleteById(res, resultDelete)
        } else {
          statusFailedDeleteById(res, resultDelete)
        }
      } else {
        statusNotFound(res, resultSelect)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  }
}
