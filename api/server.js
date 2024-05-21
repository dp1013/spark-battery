import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"

//configure env
dotenv.config();

//database
connectDB();

//rest object
const app= express()

//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth",authRoutes);

//rest api 

app.get('/',(req,res)=>{
    res.send("<h1>WELCOME TO OUR WEBSITE</h1>" );



}
)

//PORT
const PORT= process.env.PORT || 8080;

//RUN LISTEN

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`.bgCyan.white);
})