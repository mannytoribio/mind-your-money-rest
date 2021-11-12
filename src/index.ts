import express from "express"
import cors from 'cors'
import incomeRouter from "./routes/income.routes"
import admin from 'firebase-admin'
import { firebaseConfig } from "../firebase-config"


const app = express()

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig)
})

const withAuthorization = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const jwt = req.headers.authorization!
  try {
    const id = await admin.auth().verifyIdToken(jwt)
    res.locals.userId = id.uid
  } catch {
    res.status(403).send('Unauthorized')
    return
  }
  next()
}

app.use(cors())
app.use(express.json())
app.use(withAuthorization)
// login page should be excluded from this

// app.get('/authenticated', withAuthorization, (req, res) => {
//   return res.send({youre: 'cool'}).status(200)
// })

app.use('/income', incomeRouter)
// app.use('/income', withAuthorization, incomeRouter)
// if we don't use app.use(withAuthorization) we would use the way above

app.listen(5000, () => {
  console.log('Listening on port 5000')
})