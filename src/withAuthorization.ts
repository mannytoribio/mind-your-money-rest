import express from "express"
import admin from 'firebase-admin'

export const withAuthorization = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if ( req.path == '/test') return next();
  try {
    const jwt = req.headers.authorization!
    const id = await admin.auth().verifyIdToken(jwt)
    res.locals.userId = id.uid
  } catch {
    res.status(403).send('Unauthorized')
    return
  }
  next()
}