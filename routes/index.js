import { Router } from 'express'
import brandRoute from './brand.js'
import garmentRoute from './garment.js'
import typeRoute from './type.js'
import userRoute from './user.js'

const routes = new Router()

routes.use('/brand', brandRoute)
routes.use('/garment', garmentRoute)
routes.use('/type', typeRoute)
routes.use('/user', userRoute)

export default routes
