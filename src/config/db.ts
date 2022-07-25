import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()


const mongoURI = process.env.MONGO_URI || ''

export const connectDB = async () => {
    
    try {
        const conn = await mongoose.connect(mongoURI)

        console.log(`Mongo DB connected ${conn.connection.host}`)
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
}