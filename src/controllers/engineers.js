// const db = require('../helpers/db')
const { statusRead, statusNotFound, statusErrorServer, statusReadEngineerById, statusPost, statusFailedAddData, statusUpdateData, statusFailedUpdate, statusDeleteById, statusFailedDeleteById } = require('../helpers/statusCRUD')
const { getAllEngineerModel, getSearchEngineerModel, getFilterEngineerModel, createEngineerModel, getEngineerByIdModel, updateAllEngineerByIdModel } = require('../models/engineers')

const isEmpty = require('lodash.isempty')

module.exports = {
  getAllEngineer: async (req, res) => {
    let { search, limit, page } = req.query

    if (!limit) {
      limit = 10
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const paginate = {
      search: search,
      limit: limit,
      offset: (page - 1) * limit
    }

    try {
      let result = await getAllEngineerModel(paginate)

      if (isEmpty(search)) {
        result = await getAllEngineerModel(paginate)
      } else {
        result = await getSearchEngineerModel(paginate)
      }

      if (result.length) {
        statusRead(res, result)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      console.log(error)
      statusErrorServer(res, error)
    }
  },
  getEngineerById: async (req, res) => {
    try {
      const { enId } = req.params

      const result = await getEngineerByIdModel(enId)
      if (result.length) {
        statusReadEngineerById(res, result, enId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      console.log(error)
      statusErrorServer(res, error)
    }
  },
  createEngineer: async (req, res) => {
    try {
      const { enJobTitle, enJobType, enLocation, enDesc, enProfilePict } = req.body
      const result = await createEngineerModel(enJobTitle, enJobType, enLocation, enDesc, enProfilePict)

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
  updateAllEngineerById: async (req, res) => {
    try {
      const { engineerId } = req.params
      // const { hirePrice, hireMessage, hireStatus, hireDateConfirm } = req.body
      const resultSelect = await getEngineerByIdModel(engineerId)

      if (resultSelect.length) {
        const resultUpdate = await updateAllEngineerByIdModel(engineerId, req.body)
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
  getFilterEngineer: async (req, res) => {
    let { filter, limit, page } = req.query

    if (!limit) {
      limit = 10
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const paginate = {
      filter: filter,
      limit: limit,
      offset: (page - 1) * limit
    }

    try {
      let result = await getAllEngineerModel(paginate)

      if (isEmpty(filter)) {
        result = await getAllEngineerModel(paginate)
      } else {
        result = await getFilterEngineerModel(paginate)
      }

      if (result.length) {
        statusRead(res, result)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      console.log(error)
      statusErrorServer(res, error)
    }
  }
}
