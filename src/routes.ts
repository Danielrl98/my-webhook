import express from 'express'
import RequestWebhookController from './features/webhook/request/request.controller'
import { RequestWebhookResponse } from './features/webhook/response/response.controller'

const router = express.Router()

router.post('/request', async (req, res, next) => {
    const body = req.body
    const result = await new RequestWebhookController().create(body)

    res.send(result)

    next()
}) 
router.get('/response', async (req, res, next) => {
    
    try {
        const result = await new RequestWebhookResponse().find(req.query)

        res.status(200).json(result)
    } catch (error) {
        const {message} = error as {message: string}
        res.status(400).json({
            err: message
        })
    }
    next()
}) 

router.get('/', async (req, res, next) => {
    res.send('hello world3')
})

export default router