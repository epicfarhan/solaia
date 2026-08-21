import express, { urlencoded } from "express";
import cors from "cors";
import healthCheckRouter from "./routes/healthcheck.routes.js"
const app = express();
// configs
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"]
}))


// routes

app.use("/api/v1/healthcheck", healthCheckRouter);



export default app;