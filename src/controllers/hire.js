// const db = require('../helpers/db')
const { statusRead, statusNotFound, statusErrorServer, statusReadHireById, statusPost, statusFailedAddData, statusUpdateData, statusFailedUpdate, statusReadHireByProjectId, statusMustFillAllFields, statusDeleteById, statusFailedDeleteById, statusReadHireByEnId } = require('../helpers/statusCRUD')
const { getAllHireModel, createHireModel, getHireByIdModel, updateAllHireByIdModel, getHireByProjectIdModel, getHireByEnIdModel, deleteHireByIdModel } = require('../models/hire')

module.exports = {
  getAllHire: async (req, res) => {
    try {
      const result = await getAllHireModel()

      if (result.length) {
        statusRead(res, result)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  getHireById: async (req, res) => {
    try {
      const { hireId } = req.params

      const result = await getHireByIdModel(hireId)
      if (result.length) {
        statusReadHireById(res, result, hireId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      console.log(error)
      statusErrorServer(res, error)
    }
  },
  getHireByProjectId: async (req, res) => {
    try {
      const { projectId } = req.params

      const result = await getHireByProjectIdModel(projectId)
      if (result.length) {
        statusReadHireByProjectId(res, result, projectId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      console.log(error)
      statusErrorServer(res, error)
    }
  },
  getHireByEnId: async (req, res) => {
    try {
      const { enId } = req.params

      const result = await getHireByEnIdModel(enId)

      if (result.length) {
        statusReadHireByEnId(res, result, enId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
      console.log(error)
    }
  },
  createHire: async (req, res) => {
    try {
      const result = await createHireModel(req.body)

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
  updateAllHireById: async (req, res) => {
    try {
      const { hireId } = req.params
      const resultSelect = await getHireByIdModel(hireId)

      if (resultSelect.length) {
        const resultUpdate = await updateAllHireByIdModel(req.body, hireId)
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
  deleteHireById: async (req, res) => {
    try {
      const { hireId } = req.params
      const resultSelect = await getHireByIdModel(hireId)

      if (resultSelect.length) {
        const resultDelete = await deleteHireByIdModel(hireId)
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
