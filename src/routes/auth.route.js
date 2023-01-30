import express from 'express'
import { authControllers } from '../controllers'

const authRouter = express.Router()

authRouter.post('/register', authControllers.register)

export default authRouter