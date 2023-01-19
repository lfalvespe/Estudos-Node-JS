const fs = require('fs')

if(fs.existsSync('./dados.txt')) {
	let = dados = fs.readFileSync('./dados.txt', )    // posso slavar numa variável
	console.log(dados.toString())
} else {
	console.log('O arquivo não existe.')
}