import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRouter } from './app/module/user/user.routes'
import cookieParser from 'cookie-parser'

const app: Application = express()

app.use(express.json())
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    }),
)

app.use(cookieParser())

app.use('/api/v1/users', userRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app
