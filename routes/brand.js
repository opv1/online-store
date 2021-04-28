import { Router } from 'express'
import roleMiddleware from '../middlewares/role.js'
import * as brandController from '../controllers/brand.js'

const router = new Router()

router.post('/', roleMiddleware('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

export default router
