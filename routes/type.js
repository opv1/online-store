import { Router } from 'express'
import roleMiddleware from '../middlewares/role.js'
import * as typeController from '../controllers/type.js'

const router = new Router()

router.post('/', roleMiddleware('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

export default router
