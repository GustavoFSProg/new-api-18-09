import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'
import mongoose from 'mongoose'
import path from 'path'

dotenv.config()

const app = express()

const { PORT, DATABASE } = process.env

mongoose.connect(
  'mongodb+srv://gustavo:TuWilDAxyLRGOVGz@cluster0.mo3ge.mongodb.net/ultimo-18-09?retryWrites=true&w=majority'
)

app.use(express.json())
app.use(cors())
app.use(routes)

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(PORT, () => {
  console.log(` ⚡ Entrou na API on PORT: ${PORT}`)
})

export default app
