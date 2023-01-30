import express from 'express'
import { userControllers } from '../controllers'

const userRouter = express.Router()

userRouter.get('/', userControllers.getUsers)

export default userRouter