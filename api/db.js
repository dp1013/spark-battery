import mongoose from "mongoose"
import colors from "colors"
const connectDB = async() => {

    try {
        const conn = await mongoose.connect(process.env.mongo_url)
        console.log('Connected to DB ${con.connection.host}' .bgMagenta.white) ;
    } catch (error) {
        console.log('error in DB ${error}'.bgRed.white)
        
        
    }
};

export default connectDB;