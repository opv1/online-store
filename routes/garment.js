import { Router } from 'express'
import roleMiddleware from '../middlewares/role.js'
import * as garmentController from '../controllers/garment.js'

const router = new Router()

router.post('/', roleMiddleware('ADMIN'), garmentController.create)
router.get('/', garmentController.getAll)
router.get('/:id', garmentController.getOne)

export default router
