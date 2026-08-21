import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("hello world");
})


dotenv.config({
    path: './.env'
})

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server is running on ${port}`);
  })
}).catch((err) => {
    console.error("mongodb connection error", err);
    process.exit(1);
})


