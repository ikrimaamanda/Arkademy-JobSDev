// List of all status

module.exports = {

  // ============================== READ ==============================
  // status success to get all data
  statusRead: (res, result) => {
    res.status(200).send({
      success: true,
      message: 'List Data',
      data: result
    })
  },

  // status success to get account by id
  statusReadAccountById: (res, result, accountId) => {
    res.status(200).send({
      success: true,
      message: `Account with id ${accountId}`,
      data: result[0]
    })
  },

  // status success to get portfolio by id
  statusReadPortfolioById: (res, result, portfolioId) => {
    res.status(200).send({
      success: true,
      message: `Portfolio with id ${portfolioId}`,
      data: result[0]
    })
  },

  // status success to get skill by id
  statusReadSkillById: (res, result, skillId) => {
    res.status(200).send({
      success: true,
      message: `Skill with id ${skillId}`,
      data: result[0]
    })
  },

  // status success to get experience by id
  statusReadExperienceById: (res, result, expId) => {
    res.status(200).send({
      success: true,
      message: `Experience with id ${expId}`,
      data: result[0]
    })
  },

  // status success to get project by id
  statusReadProjectById: (res, result, projectId) => {
    res.status(200).send({
      success: true,
      message: `Project with id ${projectId}`,
      data: result[0]
    })
  },

  // status success to get hire by id
  statusReadHireById: (res, result, hireId) => {
    res.status(200).send({
      success: true,
      message: `Hire with id ${hireId}`,
      data: result[0]
    })
  },

  // status success to get hire by project id
  statusReadHireByProjectId: (res, result, projectId) => {
    res.status(200).send({
      success: true,
      message: `Hire with project id ${projectId}`,
      data: result[0]
    })
  },

  // status success to get engineer by id
  statusReadEngineerById: (res, result, enId) => {
    res.status(200).send({
      success: true,
      message: `Engineer with id ${enId}`,
      data: result[0]
    })
  },

  // status success to get company by id
  statusReadCompanyById: (res, result, companyId) => {
    res.status(200).send({
      success: true,
      message: `Company with id ${companyId}`,
      data: result[0]
    })
  },

  // ============================== END of READ ==============================

  
  // status not found all data
  statusNotFound: (res, result) => {
    res.status(404).send({
      success: false,
      message: 'Data not found'
    })
  },

  // status server error
  statusErrorServer: (res, error) => {
    res.status(500).send({
      success: false,
      message: 'Internal Server Error!'
    })
  },

  // ========== CREATE ==========
  // status success to create
  statusPost: (res, result) => {
    res.status(200).send({
      success: true,
      message: 'Success add data'
    })
  },

  // status failed to create data
  statusFailedAddData: (res, result) => {
    res.status(400).send({
      success: false,
      message: 'Submit data failed'
    })
  },

  // ========== UPDATE ==========
  // status success to update data
  statusUpdateData: (res, result) => {
    res.status(200).send({
      success: true,
      message: 'Successfully updated data'
    })
  },

  // status failed to update data
  statusFailedUpdate: (res, result) => {
    res.status(400).send({
      success: false,
      message: 'Update data failed'
    })
  },

  // status update must filled all fields
  statusMustFillAllFields: (res, result) => {
    res.status(400).send({
      success: false,
      message: 'All fields must be filled!'
    })
  },

  // ========== DELETE ==========
  // status Delete by id
  statusDeleteById: (res, result) => {
    res.status(200).send({
      success: true,
      message: 'Success delete data'
    })
  },

  // status failed delete
  statusFailedDeleteById: (res, result) => {
    res.status(400).send({
      success: false,
      message: 'Delete data failed'
    })
  }
}