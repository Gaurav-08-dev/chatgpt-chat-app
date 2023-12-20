import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import OpenAI from "openai";
import openAiRoutes from "./routes/openai.js";
import authRoutes from "./routes/auth.js";



// Configurations

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;
const isDev = app.settings.env === 'development'
const URL = isDev ? `http://localhost:${PORT}`: 'https://online-drawing-tool-pearl.vercel.app/'

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({origin:URL}));

// OPEN API CONFIGURATION
// const configuration = new Configuration({
//     apiKey: process.env.OPEN_API_KEY
// })

// export const openai = new OpenAIApi(configuration)
export const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY
});


// ROUTES
app.use("/openai", openAiRoutes)
app.use("/auth", authRoutes)


// Server

app.listen(PORT, ()=>{
    console.log(`Example app litening on Port http://localhost:${PORT}`)
})


