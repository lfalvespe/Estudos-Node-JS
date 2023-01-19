import express from 'express'

const app = express()

app.use(express.json())

const selecoes = [
	{id: 1, selecao: 'Brasil', grupo: 'G'},
	{id: 2, selecao: 'Qatar', grupo: 'A'},
	{id: 3, selecao: 'Sérvia', grupo: 'G'},
	{id: 4, selecao: 'Holanda', grupo: 'A'},
]

//funções

function pegarSelecaoPorId(id){
	return selecoes.filter(selecao=> selecao.id == id)
}

function pegarIndicePorId(id) {
	return selecoes.findIndex(selecao=> selecao.id == id)
}
 

//Rota padrão
app.get('/', (req, res)=> {
	res.send('<h1>Curso de Node JS</h1>')
})

//Rota seleções
app.get('/selecoes', (req, res)=> {
	res.send(selecoes)
})

//Rota mostrar seleção por id
app.get('/selecoes/:id', (req, res)=> {
	res.send(pegarSelecaoPorId(req.params.id))
})


// Rota POST

app.post('/selecoes', (req, res)=> {
	selecoes.push(req.body)
	res.send('Seleção adicionada com sucesso.')
})

// Rota DELETE

app.delete('/selecoes/:id', (req, res)=> {
	let index = pegarIndicePorId(req.params.id)
	selecoes.splice(index, 1)
	res.status(201).send(`Seleção com id ${req.params.id} apagada com sucesso.`)
})

export default app

