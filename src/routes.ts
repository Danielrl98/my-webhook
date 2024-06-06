import express from 'express'
import RequestWebhookController from './features/webhook/request/request.controller'
const router = express.Router()

router.post('/request', async (req, res, next) => {
    const body = req.body
    const result = await new RequestWebhookController().create(JSON.stringify(body))

    res.send(result)

    next()
}) 

router.get('/', async (req, res, next) => {
    res.send('hello world2')
})

export default router