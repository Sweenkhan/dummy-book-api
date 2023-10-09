import express from "express";
import cors from "cors";
import books from "./data/booksData.js"
import { config } from "dotenv";

config()
 

const app = express()
// console.log(process.env.PORT)
const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.use(cors({origin: "http://localhost:3000"}))

app.use(cors())
app.get("/api/dummyBooks", async(req, res) => {
      res.send({status: 200, message: "getting all books", books })
})


app.listen(port, () => {
      console.log(`server is running on port ${port}` )
})
