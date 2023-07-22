import path from 'path'
import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"
const cors = require("cors")
import colors from 'colors'
// import morgan from 'morgan'
// import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.ts'

// import productRoutes from './routes/productRoutes.js'
// import userRoutes from './routes/userRoutes.js'
// import orderRoutes from './routes/orderRoutes.js'
// import uploadRoutes from './routes/uploadRoutes.js'

import products from "./data/products.ts"
import IProduct from './interfaces/product.js'

dotenv.config()

connectDB()

const app: Express = express()

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'))
// }

app.use(express.json())
app.use(cors())

// app.use('/api/products', productRoutes)
// app.use('/api/users', userRoutes)
// app.use('/api/orders', orderRoutes)
// app.use('/api/upload', uploadRoutes)

// app.get('/api/config/paypal', (req, res) =>
//   res.send(process.env.PAYPAL_CLIENT_ID)
// )

// const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   )
// } else {
  app.get('/', (req: Request, res: Response) => {
    res.send('API is running....')
  })
// }

// app.use(notFound)
// app.use(errorHandler)

app.get('/api/products', (req: Request, res: Response)=>{
  res.json(products)
})

app.get('/api/products/:id', (req: Request, res: Response)=>{
  const product = products.find((p)=>{p._id === parseInt(req.params.id)})
  res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  ()=>console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
