import express from 'express'
const app = express() 
import cors from "cors"
const port = 3001
import path from 'path'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.js'

app.listen(3001, () => {
    console.log(`server started on port ${port}`)
})

//to allow cross origin resource sharing
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser())
app.use('/api/auth', authRoutes)

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})
