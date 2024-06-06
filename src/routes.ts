import express from 'express'
import RequestWebhookController from './features/webhook/request/request.controller'
import { RequestWebhookResponse } from './features/webhook/response/response.controller'

const router = express.Router()

router.post('/request', async (req, res, next) => {
    const body = req.body
    const result = await new RequestWebhookController().create(JSON.stringify(body))

    res.send(result)

    next()
}) 
router.get('/response', async (req, res, next) => {
    const result = await new RequestWebhookResponse().find()

    return res.send(result)
}) 

router.get('/', async (req, res, next) => {
    res.send('hello world3')
})

export default router