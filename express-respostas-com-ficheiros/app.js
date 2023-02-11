const express = require('express')

// cria uma aplicação express
const app = express()

// escutar os requests
app.listen(3000, ()=> {
	console.log('Servidor iniciado com sucesso')
})

// routes

app.get('/', (req, res)=> {
	res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (req, res)=> {
	res.sendFile('./views/about.html', {root: __dirname})
})