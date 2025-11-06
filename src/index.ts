import prisma from '../lib/prisma'
import express from 'express'
import path from 'path'

const app = express()

app.use(express.json())

const publicPath = path.resolve(process.cwd(), 'public')
app.use('/', express.static(publicPath))

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: https://github.com/prisma/prisma-examples/blob/latest/orm/express/README.md#using-the-rest-api`),
)
