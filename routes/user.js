import { Router } from 'express'
import authMiddleware from '../middlewares/auth.js'
import * as userController from '../controllers/user.js'

const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.auth)

export default router
