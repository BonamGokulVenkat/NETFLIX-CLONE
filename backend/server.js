import express from 'express';
import movieRoutes from './routes/movie.route.js'
import authRoutes from './routes/auth.route.js';
import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';


const app= express();

const port = ENV_VARS.PORT;

app.use(express.json());

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/movie",movieRoutes);


app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log(`running on ${port}`);
    connectDB();
})

