import {create} from 'express-handlebars'
import path from 'path'

const hbs = create({
    extname: 'hbs',
    defaultLayout: 'main',

    layoutsDir:path.join('src/views/layouts'),
})

export default hbs
