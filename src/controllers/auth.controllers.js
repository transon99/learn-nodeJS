import { authServieces } from "../services"

export const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({
                err: 1,
                msg: "Missing Input"
            })
        }
        const result = await authServieces.register(req.body)
        res.status(200).json({
            err: 0,
            ms
        })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Internal Sever Error"
        })
    }

}

export const login = async (req, res) => {

}