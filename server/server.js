import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { configDotenv } from 'dotenv'
import cors from 'cors'


const app = express()

app.use(cors())
app.use(bodyParser.json())

configDotenv()

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL)
        .then(()=>{
            console.log("Database Connected")
            app.listen(PORT, ()=> console.log(`Server is runnting at ${PORT}`))
        })
        .catch(error => console.log(error))

app.get('/api', (req, res)=>{
    res.json({user1: "niloy", user2: "toushif", user3: "apu"})
})
