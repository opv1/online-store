import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import expressFileupload from 'express-fileupload'
import { instanceSequelize } from './db.js'
import errorMiddleware from './middlewares/error.js'
import * as models from './models/models.js'
import routes from './routes/index.js'

dotenv.config()

const app = express()
const __dirname = path.resolve()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(expressFileupload({}))

app.use('/api', routes)

app.use(errorMiddleware)

const start = async () => {
  try {
    await instanceSequelize.authenticate()

    await instanceSequelize.sync()

    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}...`)
    )
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

start()
