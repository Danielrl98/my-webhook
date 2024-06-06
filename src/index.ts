require('dotenv').config()
import env from './shared/global/env'
import express from 'express'
import cors from 'cors'
import hbs from './shared/config/hbs'
import router from './routes'

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

/*app.engine('.hbs',hbs.engine)
app.set('view engine','.hbs')
app.set("views", __dirname + "/views/")*/
app.use('/',router)


const PORT = 8000

//const HOSTNAME = env.HOSTNAME

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})