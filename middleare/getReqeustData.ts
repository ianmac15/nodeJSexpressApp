import express from 'express'

export const getRequestID = (req:express.Request) => {
    const url = req.originalUrl
    const id = url.split('/')[3]
    return id
}