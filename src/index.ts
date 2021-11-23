import express from "express"
import cors from 'cors'
import incomeRouter from "./routes/income.routes"
import expenseRouter from "./routes/expenses.routes"
import goalRouter from "./routes/goals.routes"
import savingsRouter from "./routes/savings.routes"
import admin from 'firebase-admin'
import { withAuthorization } from "./withAuthorization"
import { firebaseConfig } from "../firebase-config"

const PORT = process.env.PORT || 5000;

const app = express()

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig)
})



app.use(cors())
app.use(express.json())
app.use(withAuthorization)
// login page should be excluded from this

// app.get('/authenticated', withAuthorization, (req, res) => {
//   return res.send({youre: 'cool'}).status(200)
// })

app.get('/test', (req,res) => {
  res.send('Working')
});

app.use('/income', incomeRouter)
app.use('/savings', savingsRouter)
app.use('/expense', expenseRouter)
app.use('/goal', goalRouter)
// app.use('/income', withAuthorization, incomeRouter)
// if we don't use app.use(withAuthorization) we would use the way above

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})