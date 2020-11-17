// const db = require('../helpers/db')
const { statusRead, statusNotFound, statusErrorServer, statusReadProjectById, statusPost, statusFailedAddData, statusUpdateData, statusFailedUpdate, statusMustFillAllFields, statusDeleteById, statusFailedDeleteById, statusReadProjectByCnId } = require('../helpers/statusCRUD')
const { getAllProjectModel, createProjectModel, getProjectByIdModel, getProjectByCnIdModel, deleteProjectByIdModel, updateAllProjectByIdModel } = require('../models/projects')

module.exports = {
  getAllProject: async (req, res) => {
    try {
      const result = await getAllProjectModel()

      if (result.length) {
        statusRead(res, result)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  getProjectById: async (req, res) => {
    try {
      const { projectId } = req.params

      const result = await getProjectByIdModel(projectId)
      if (result.length) {
        statusReadProjectById(res, result, projectId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  getProjectByCnId: async (req, res) => {
    try {
      const { cnId } = req.params
      const result = await getProjectByCnIdModel(cnId)

      if (result.length) {
        statusReadProjectByCnId(res, result, cnId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  createProject: async (req, res) => {
    try {
      const result = await createProjectModel(req.body)

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
  updateAllProjectById: async (req, res) => {
    try {
      const { projectId } = req.params
      const resultSelect = await getProjectByIdModel(projectId)

      if (resultSelect.length) {
        const resultUpdate = await updateAllProjectByIdModel(req.body)
        if (resultUpdate.affectedRows) {
          statusUpdateData(res, resultUpdate)
        } else {
          statusFailedUpdate(res, resultUpdate)
        }
      } else {
        statusNotFound(res, resultSelect)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  deleteProjectById: async (req, res) => {
    try {
      const { projectId } = req.params
      const resultSelect = await getProjectByIdModel(projectId)

      if (resultSelect.length) {
        const resultDelete = await deleteProjectByIdModel(projectId)
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
