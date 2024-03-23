import express, { Application, Request, Response } from 'express'
import cors from 'cors'

import userService from './app/modules/users/users.service'

// import routes
import usersRouter from './app/modules/users/users.route'

const app: Application = express()

app.use(cors())

// parser setup
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/v1/users', usersRouter)

// for testing
app.get('/', async (req: Request, res: Response) => {
  await userService.createUser({
    id: '99999',
    role: 'admin',
    password: '2442233434',
  })
  res.send('Just for fun! 🎉')
})

export default app
