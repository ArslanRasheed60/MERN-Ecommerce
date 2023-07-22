//separate script to import data

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import users from './data/users.ts'
import products from './data/products.ts'
import User from './models/userModel.ts'
import Product from './models/productModel.ts'
import Order from './models/orderModel.ts'
import IUser from './interfaces/user.ts'
import IProduct from './interfaces/product.ts'
import connectDB from './config/db.ts'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers: IUser[] = await User.insertMany(users)

    const adminUser: IUser = createdUsers[0]._id

    const sampleProducts : IProduct[] = products.map((product: IProduct) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

//node backend/seeder -d (for destroying of data)
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
