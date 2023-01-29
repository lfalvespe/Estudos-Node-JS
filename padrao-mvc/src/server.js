import app from './app.js'

const PORT = process.env.PORT || 3000

// Escutar a porta 3000
app.listen(PORT, ()=> {
	console.log(`Servidor rocando no endereço http://localhost:${PORT}.`)
})