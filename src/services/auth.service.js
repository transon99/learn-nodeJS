import db from '../models'

export const register = () => new Promise((resolve, reject) => {
    try {
        resolve({
            error: 0,
            mess: 'register services'
        })
    } catch (error) {
        reject(error)
    }
})