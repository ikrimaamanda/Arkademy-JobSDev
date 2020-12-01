// const db = require('../helpers/db')
const { statusRead, statusNotFound, statusErrorServer, statusPost, statusFailedAddData, statusUpdateData, statusFailedUpdate, statusMustFillAllFields, statusDeleteById, statusFailedDeleteById, statusReadExperienceByEnId } = require('../helpers/statusCRUD')
const { getAllExperienceModel, createExperienceModel, getExperienceByIdModel, deleteExperienceByIdModel, updateAllExperienceByIdModel, getExperienceByEnIdModel } = require('../models/experiences')

module.exports = {
  getAllExperience: async (req, res) => {
    try {
      const result = await getAllExperienceModel()

      if (result.length) {
        statusRead(res, result)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  getExperienceByEnId: async (req, res) => {
    try {
      const { enId } = req.params
      const result = await getExperienceByEnIdModel(enId)

      if (result.length) {
        statusReadExperienceByEnId(res, result, enId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      console.log(error)
      statusErrorServer(res, error)
    }
  },
  createExperience: async (req, res) => {
    try {
      const { exPosition, exCompany, exStartDate, exEndDate, exDesc, enId } = req.body
      const data = {
        ex_position: exPosition,
        ex_company: exCompany,
        ex_start_date: exStartDate,
        ex_end_date: exEndDate,
        ex_description: exDesc,
        en_id: enId
      }
      if (exPosition.trim() && exCompany.trim() && exStartDate.trim() && exEndDate.trim() && exDesc.trim() && enId.trim()) {
        const result = await createExperienceModel(data)

        if (result.affectedRows) {
          statusPost(res, result)
        } else {
          statusFailedAddData(res, result)
        }
      } else {
        statusMustFillAllFields(res)
      }
    } catch (error) {
      console.log(error)
      statusErrorServer(res, error)
    }
  },
  updateAllExperienceById: async (req, res) => {
    try {
      const { experienceId } = req.params
      const data = req.body
      const resultSelect = await getExperienceByIdModel(experienceId)

      if (resultSelect.length) {
        const resultUpdate = await updateAllExperienceByIdModel(data, experienceId)
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
  deleteExperienceById: async (req, res) => {
    try {
      const { experienceId } = req.params
      const resultSelect = await getExperienceByIdModel(experienceId)

      if (resultSelect.length) {
        const resultDelete = await deleteExperienceByIdModel(experienceId)
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
