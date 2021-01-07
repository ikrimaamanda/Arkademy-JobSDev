// const db = require('../helpers/db')
const { statusReadEngineerByAcId, statusNotFound, statusErrorServer, statusReadEngineerById, statusUpdateData, statusFailedUpdate, statusReadCompleteEngineerById, statusReadAllEngineer } = require('../helpers/statusCRUD')
const { getEngineerByIdModel, getAllEngineerModel, getSearchEngineerModel, getFilterEngineerModel, getEngineerByAcIdModel, getCompleteEngineerByIdModel, updateAllEngineerByIdModel } = require('../models/engineers')

const isEmpty = require('lodash.isempty')

module.exports = {
  getAllEngineer: async (req, res) => {
    let { search, limit, page } = req.query

    if (!limit) {
      limit = 100
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
        statusReadAllEngineer(res, result)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      console.log(error)
      statusErrorServer(res, error)
    }
  },
  getEngineerByAcId: async (req, res) => {
    try {
      const { acId } = req.params

      const result = await getEngineerByAcIdModel(acId)
      if (result.length) {
        statusReadEngineerByAcId(res, result, acId)
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
  getCompleteEngineerById: async (req, res) => {
    try {
      const { enId } = req.params

      const result = await getCompleteEngineerByIdModel(enId)
      if (result.length) {
        statusReadCompleteEngineerById(res, result, enId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  updateAllEngineerById: async (req, res) => {
    try {
      const { engineerId } = req.params
      const resultSelect = await getEngineerByIdModel(engineerId)

      const data = req.body
      const image = req.file === undefined ? resultSelect[0].en_profile_pict : req.file.filename

      const setData = {
        ...data,
        en_profile_pict: image
      }

      if (resultSelect.length) {
        const resultUpdate = await updateAllEngineerByIdModel(engineerId, setData)
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
        statusReadAllEngineer(res, result)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      console.log(error)
      statusErrorServer(res, error)
    }
  }
}
