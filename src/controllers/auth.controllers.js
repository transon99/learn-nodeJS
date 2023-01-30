import { authServieces } from "../services"

export const register = async (req, res) => {
    const result = await authServieces.register()
    res.send(result)
}