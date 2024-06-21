import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import { Request, Response } from 'express'

import { User } from '../interface/user'
import { users } from '../interface/user'

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000

app.get('/api/user', (req: Request, res: Response) => {
    res.json(users)
    console.log(users)
})

app.get('/api/user/:id', (req: Request, res: Response) => {
    const id = req.params.id
    const user = users.find((user) => user.id === id)
    if (!user) {
        res.status(404).send({ message: 'User not found' })
    } else {
        res.json(user)
    }
})

app.listen(port, () => {
    console.log(`Running in port ${port}`)
})
