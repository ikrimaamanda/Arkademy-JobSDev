// const db = require('../helpers/db')
const { statusRead, statusNotFound, statusErrorServer, statusReadPortfolioById, statusPost, statusFailedAddData, statusUpdateData, statusFailedUpdate, statusMustFillAllFields, statusDeleteById, statusFailedDeleteById } = require('../helpers/statusCRUD')
const { getAllPortfolioModel, createPortfolioModel, getPortfolioByIdModel, deletePortfolioByIdModel, updateAllPortfolioByIdModel } = require('../models/portfolios')

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
      const { portfolioName, portfolioDesc, portfolioLinkPub, portfolioLinkRepo, portfolioWorkPlace, portfolioType, portfolioImage } = req.body
      const resultSelect = await getPortfolioByIdModel(portfolioId)

      if (portfolioName.trim() && portfolioDesc.trim() && portfolioLinkPub.trim() && portfolioLinkRepo.trim() && portfolioWorkPlace.trim() && portfolioType.trim() && portfolioImage.trim()) {
        if (resultSelect.length) {
          const resultUpdate = await updateAllPortfolioByIdModel(portfolioName, portfolioDesc, portfolioLinkPub, portfolioLinkRepo, portfolioWorkPlace, portfolioType, portfolioImage, portfolioId)
          if (resultUpdate.affectedRows) {
            statusUpdateData(res, resultUpdate)
          } else {
            statusFailedUpdate(res, resultUpdate)
          }
        } else {
          statusNotFound(res, resultSelect)
        }
      } else {
        statusMustFillAllFields(res, resultSelect)
      }
    } catch (error) {
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
