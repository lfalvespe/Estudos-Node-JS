const express = require('express')

// cria uma aplicação express
const app = express()

// escutar os requests
app.listen(3000, ()=> {
	console.log('Servidor iniciado com sucesso')
})

// routes

app.get('/', (req, res)=> {
	res.status(200).sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (req, res)=> {
	res.status(200).sendFile('./views/about.html', {root: __dirname})
})

app.get('/acerca-de', (req, res)=> {
	res.status(302).redirect('/about')
})

app.get('/services', (req, res)=> {
	res.status(200).sendFile('./views/services.html', {root: __dirname})
})

// a rota use precisa vir por último
app.use((req, res)=> {
	res.status(404).sendFile('./views/404.html', {root: __dirname})
})