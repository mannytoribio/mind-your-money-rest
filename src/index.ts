import express from "express"
import cors from 'cors'
import { json } from "body-parser"
import { incomeRouter } from "./routes/income.routes"

const app = express()

app.use(cors())
app.use(json())

app.use('/income')

app.listen(5000, () => {
  console.log('Listening on port 5000')
})