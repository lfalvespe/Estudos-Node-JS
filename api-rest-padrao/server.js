import app from './src/app.js'

const PORT = 3000

app.listen(PORT, ()=> {
	console.log(`servidor rodando no endereço https://localhost:${PORT}`)
})
