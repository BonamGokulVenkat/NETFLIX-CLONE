import express from 'express';
import cookieParser from 'cookie-parser';

import searchRoutes from "./routes/search.route.js";
import tvRoutes from './routes/tv.route.js'
import movieRoutes from './routes/movie.route.js'
import authRoutes from './routes/auth.route.js';

import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
import { protectRoute } from './middleware/protectRoute.js';


const app= express();

const port = ENV_VARS.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/movie",protectRoute,movieRoutes);
app.use("/api/v1/tv",protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log(`running on ${port}`);
    connectDB();
})

