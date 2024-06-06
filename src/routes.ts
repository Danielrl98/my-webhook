
import env from './shared/global/env'
import express from 'express'
import RequestWebhookController from './features/webhook/request/request.controller'
const router = express.Router()

router.post('/request', async (req, res, next) => {
    const body = req.body
    const result = await new RequestWebhookController().create(JSON.stringify(body))

    res.send(result)

    next()
})

router .get('/response', async (req, res, next) => {
    res.render('dashboard/teste', {teste: {teste: 1000}})
})

export default router