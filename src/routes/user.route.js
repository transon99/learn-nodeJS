import express from 'express'
import { userControllers } from '../controllers'

const userRoute = express.Router()

userRoute.get('/', userControllers.getUsers)

export default userRoute