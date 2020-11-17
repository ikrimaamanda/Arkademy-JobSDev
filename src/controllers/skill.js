// const db = require('../helpers/db')
const { statusRead, statusNotFound, statusErrorServer, statusReadSkillById, statusPost, statusFailedAddData, statusUpdateData, statusFailedUpdate, statusMustFillAllFields, statusDeleteById, statusFailedDeleteById, statusReadSkillByEnId } = require('../helpers/statusCRUD')
const { getAllSkillModel, createSkillModel, getSkillByIdModel, deleteSkillByIdModel, updateAllSkillByIdModel, getSkillByEnIdModel } = require('../models/skill')

module.exports = {
  getAllSkill: async (req, res) => {
    try {
      const result = await getAllSkillModel()

      if (result.length) {
        statusRead(res, result)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  getSkillById: async (req, res) => {
    try {
      const { skillId } = req.params
      const result = await getSkillByIdModel(skillId)
      if (result.length) {
        statusReadSkillById(res, result, skillId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  getSkillByEnId: async (req, res) => {
    try {
      const { enId } = req.params
      const result = await getSkillByEnIdModel(enId)
      if (result.length) {
        statusReadSkillByEnId(res, result, enId)
      } else {
        statusNotFound(res, result)
      }
    } catch (error) {
      statusErrorServer(res, error)
    }
  },
  createSkill: async (req, res) => {
    try {
      // const { skillName } = req.body
      const result = await createSkillModel(req.body)
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
  updateAllSkillById: async (req, res) => {
    try {
      const { skillId } = req.params
      const { skillName } = req.body
      const resultSelect = await getSkillByIdModel(skillId)

      if (skillName.trim()) {
        if (resultSelect.length) {
          const resultUpdate = await updateAllSkillByIdModel(skillName, skillId)
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
  deleteSkillById: async (req, res) => {
    try {
      const { skillId } = req.params
      const resultSelect = await getSkillByIdModel(skillId)

      if (resultSelect.length) {
        const resultDelete = await deleteSkillByIdModel(skillId)
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
