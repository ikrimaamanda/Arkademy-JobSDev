const express = require('express')
const app = express('express')
// const db = require('./src/helpers/db')

const bodyParser = require('body-parser')
require('dotenv').config()
const accountRouter = require('./src/routers/accounts')
const portfolioRouter = require('./src/routers/portfolios')
const skillRouter = require('./src/routers/skill')
const experienceRouter = require('./src/routers/experiences')
const projectRouter = require('./src/routers/projects')
const hireRouter = require('./src/routers/hire')
const engineerRouter = require('./src/routers/engineers')
const companyRouter = require('./src/routers/companies')

const port = process.env.PORT

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/account', accountRouter)
app.use('/portfolio', portfolioRouter)
app.use('/skill', skillRouter)
app.use('/experience', experienceRouter)
app.use('/project', projectRouter)
app.use('/hire', hireRouter)
app.use('/engineer', engineerRouter)
app.use('/company', companyRouter)

app.listen(port, () => {
  console.log(`Listen app backend on port ${port}`)
})