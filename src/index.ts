import express from "express"
import cors from 'cors'
import incomeRouter from "./routes/income.routes"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/income', incomeRouter)

app.listen(5000, () => {
  console.log('Listening on port 5000')
})