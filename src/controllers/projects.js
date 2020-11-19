// const db = require('../helpers/db')
const { statusRead, statusNotFound, statusErrorServer, statusReadProjectById, statusPost, statusFailedAddData, statusUpdateData, statusFailedUpdate, statusDeleteById, statusFailedDeleteById, statusReadProjectByCnId } = require('../helpers/statusCRUD')
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
      const { projectName, projectDesc, projectDeadline, cnId } = req.body
      const setData = {
        pj_project_name: projectName,
        pj_description: projectDesc,
        pj_deadline: projectDeadline,
        pj_image: req.files === undefined ? '' : req.files.projectImage[0].path,
        cn_id: cnId
      }
      const result = await createProjectModel(setData)

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

      const { projectName, projectDesc, projectDeadline, cnId } = req.body
      const setData = {
        pj_project_name: projectName,
        pj_description: projectDesc,
        pj_deadline: projectDeadline,
        pj_image: req.files === undefined ? '' : req.files.projectImage[0].path,
        cn_id: cnId
      }

      if (resultSelect.length) {
        const resultUpdate = await updateAllProjectByIdModel(setData)
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
