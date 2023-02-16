import db from '../models'
import bcrypt from 'bcryptjs'

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8));

export const register = ({ email, password }) => new Promise(async (resolve, reject) => {
    try {
        const [user, isCreated] = await db.User.findOrCreate({
            where: { email },
            default: {
                email,
                password: hashPassword(password)
            }
        })
        resolve({
            error: isCreated ? 0 : 1,
            mess: isCreated ? 'Register successfully' : 'Email has been used'
        })
    } catch (error) {
        reject(error)
    }
})

export const login = () => new Promise((resolve, reject) => {
    try {
        resolve({
            error: 0,
            mess: 'register services'
        })
    } catch (error) {
        reject(error)
    }
})