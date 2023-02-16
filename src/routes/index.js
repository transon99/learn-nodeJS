import { notFound } from "../middlewares/hadler_errors"
import authRoute from "./auth.route"
import userRoute from "./user.route"

const initRoutes = (app) => {
    app.use('/api/v1/user', userRoute);
    app.use('/api/v1/auth', authRoute);
    app.use('/', notFound);
}

export default initRoutes
