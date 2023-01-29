import express from 'express'
import routes from './routes.js'

const app = express()

//ler body comno Json
app.use(express.json())

//usar o routes
app.use(routes)


export default app
