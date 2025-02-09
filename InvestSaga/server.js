import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js'; //as using type module (es6) need to give extension also
import authRoutes from './routes/authRoute.js';
import cors from "cors";
import scoreRoutes from './routes/scoreRoute.js';
//configure env
dotenv.config(); 

//database config
connectDB();

//rest object
const app=express();



//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/game',scoreRoutes);


//port 
const PORT=process.env.PORT || 3005;

//run listen
app.listen(PORT,()=>{
    console.log(`Server is Running on ${process.env.DEV_MODE} mode on ${PORT}`);
});