const fs = require('fs')

fs.appendFile('.dados.txt', 'Fernando Alves\n', ()=> {               // Operação assíncrona
	console.log('Arquivo gravado com sucesso')
})

fs.appendFileSync('./dados2.csv', 'Maria Antonieta\n')               // Operação síncrona


console.log('Última operação')             // Operação síncrona