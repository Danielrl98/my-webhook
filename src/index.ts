require('dotenv').config()
import env from './shared/global/env'
import express from 'express'
import cors from 'cors'
import router from './routes'

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use('/',router)

console.log(env)

const PORT = 8000

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})