import authRouter from "./auth.route"
import userRoute from "./user.route"

const initRoutes = (app) => {
    app.use('/api/v1/user', userRoute)
    app.use('/api/v1/auth', authRouter)
}

export default initRoutes
