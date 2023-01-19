const express = require('express')  // Importando o Express
const app = express()               // Criando uma instância do Express
const port = 3000					// Definindo a porta	

app.get('/', (req, res)=> {             //Criando uma Rota Padrão ou Raiz
	res.send('Tudo Ok com o servidor.')
})


app.listen(port, ()=> {
	console.log(`O App está escutando na porta ${port}`)      //Escutando a porta
})

