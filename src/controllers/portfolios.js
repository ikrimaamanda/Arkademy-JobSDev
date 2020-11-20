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
  getPortfolioByEnId: async (req, res) => {
    try {
      const { enId } = req.params
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
      const { prAppName, prDesc, prLinkPub, prLinkRepo, prWorkplace, prType, enId } = req.body
      const setData = {
        pr_app_name: prAppName,
        pr_description: prDesc,
        pr_link_pub: prLinkPub,
        pr_link_repo: prLinkRepo,
        pr_workplace: prWorkplace,
        pr_type: prType,
        pr_image: req.files === undefined ? '' : req.files.portfolioImage[0].path,
        en_id: enId
      }

      const result = await createPortfolioModel(setData)
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

      const { prAppName, prDesc, prLinkPub, prLinkRepo, prWorkplace, prType } = req.body
      const setData = {
        pr_app_name: prAppName,
        pr_description: prDesc,
        pr_link_pub: prLinkPub,
        pr_link_repo: prLinkRepo,
        pr_workplace: prWorkplace,
        pr_type: prType,
        pr_image: req.files === undefined ? '' : req.files.portfolioImage[0].path
      }

      if (resultSelect.length) {
        const resultUpdate = await updateAllPortfolioByIdModel(setData, portfolioId)
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
