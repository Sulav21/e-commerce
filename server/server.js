import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 8000

// Middlewares
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use(helmet())

// Database Connection
import {dbConnection} from './config/db.js'
dbConnection()

// Routers
// Product Router
import productRouter from './routers/product/productRouter.js'
app.use('/api/v1/products',productRouter)

app.get('/',(req,res,next)=>{
    res.json({
        message:"You have hit the api endpoint"
    })
})

// Global Error Handling
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status || 404)
    res.json({
        status:"error",
        message:err.message
    })
})

app.listen(PORT,(error)=>{
    error && console.log(error)
    console.log(`Your server is running on PORT:${PORT}`)
})
