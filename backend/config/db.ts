import mongoose, { ConnectOptions } from "mongoose"

const connectDB : any = async (): Promise<void> => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI!, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useCreateIndex: true,
      } as ConnectOptions)
  
      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error: any) {
      console.error(`Error: ${error.message}`.red.underline.bold)
      process.exit(1)
    }
  }
  
  export default connectDB