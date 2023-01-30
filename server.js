import express from 'express'
import cors from 'cors'
import initRoutes from './src/routes'
import connectionDatabase from './connection_database'
require('dotenv').config()

const app = express()

// khai báo tránh lỗi cors
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'] // chỉ cho các phương thức này thực hiện
}))

// chuyển về json
app.use(express.json()) // đọc dữ liệu từ client chuyển lên (chỉ đọc được chuỗi json)
app.use(express.urlencoded({ extended: true })) // convert mảng, object sang dạng json

// định nghĩa route
initRoutes(app)

// check kết nối db
connectionDatabase()

const PORT = process.env.PORT || 8080
const listener = app.listen(PORT, () => {
    console.log(`server run in the port ${listener.address().port}`);
})
