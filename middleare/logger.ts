import express from 'express'
import moment from 'moment'

export const logger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment()}`)
    next()
}