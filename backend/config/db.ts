import mongoose, { ConnectOptions } from "mongoose"
import colors from 'colors'

const connectDB : any = async (): Promise<void> => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI!, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useCreateIndex: true,
      } as ConnectOptions)
  
      console.log(colors.cyan.underline(`MongoDB Connected: ${conn.connection.host}`))
    } catch (error: any) {
      console.error(colors.red.underline.bold(`Error: ${error.message}`))
      process.exit(1)
    }
  }
  
  export default connectDB