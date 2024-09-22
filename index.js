import express from 'express'
import dotenv from 'dotenv'
import './config/db.js'
import cors from 'cors'
import {Router} from './routes/routes.js'





const app = express()
app.use(express.json())
app.use(cors({
  origin: ["https://cms-client-six.vercel.app/"],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))
dotenv.config({path: "./config/.env"})

// Handle preflight requests


app.use("/contactmsyt",Router)
app.listen(process.env.PORT, () => {
  console.log('Server is listening on port 3000')
})

