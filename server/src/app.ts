import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './app/routes'
import config from './app/config'

const app: Application = express()

app.use(express.json())
app.use(
    cors({
        origin: config.origin,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    }),
)

app.use(cookieParser())

app.use('/api/v1/', router)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app
