require('dotenv').config()
import env from './shared/global/env'
import express from 'express'
import cors from 'cors'
import RequestWebhookController from './features/webhook/request/request.controller'
import hbs from './shared/config/hbs'

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.engine('.hbs',hbs.engine)
app.set('view engine','.hbs')
app.set("views", __dirname + "/views/")

app.post('/webhook/request', async (req, res, next) => {
    const body = req.body

    const result = await new RequestWebhookController().create(JSON.stringify(body))

    res.send(result)

    next()
})

app.get('/webhook/response', async (req, res, next) => {
    res.render('dashboard/teste', {teste: {teste: 1000}})
})

const PORT = 8000

const HOSTNAME = env.HOSTNAME

app.listen(PORT, HOSTNAME, () => {
    console.log(`http://${HOSTNAME}:${PORT}`)
})