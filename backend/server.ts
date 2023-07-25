import path from 'path'
import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"
const cors = require("cors")
import colors from 'colors'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.ts'
import connectDB from './config/db.ts'

import productRoutes from './routes/productRoutes.ts'
import userRoutes from './routes/userRoutes.ts'
import orderRoutes from './routes/orderRoutes.ts'
import uploadRoutes from './routes/uploadRoutes.ts'


dotenv.config()

connectDB()

const app: Express = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//default middle wares
app.use(express.json())
app.use(cors())


app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
if (process.env.NODE_ENV === 'production') {
  // app.use(express.static(path.join(__dirname, '/frontend/build')))

  // app.get('*', (req, res) =>
  //   res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  // )
  app.use(express.static("frontend/build"));
  app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
  })
}
else {
  app.get('/', (req: Request, res: Response) => {
    res.send('API is running....')
  })
}



//custom middlewares called after the url 
app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  ()=>console.log(
    colors.yellow.bold(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  )
)
