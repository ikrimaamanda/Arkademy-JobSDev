// const db = require('../helpers/db')
const { statusRead, statusNotFound, statusErrorServer, statusPost, statusFailedAddData, statusUpdateData, statusFailedUpdate, statusMustFillAllFields, statusDeleteById, statusFailedDeleteById, statusReadSkillByEnId } = require('../helpers/statusCRUD')
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
      const { skillName, enId } = req.body
      const data = {
        sk_skill_name: skillName,
        en_id: enId
      }
      if (skillName.trim() && enId.trim()) {
        const result = await createSkillModel(data)
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
