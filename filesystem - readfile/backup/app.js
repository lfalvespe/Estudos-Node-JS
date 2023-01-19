// Node JS - Módulo File System (fs)

const fs = require('fs')

if(fs.existsSync('./dados.csv')) {
	fs.readFile('./dados.csv', (err, data)=> {
		if(err) {
			console.log(err)
		} else {
			console.log(data.toString())
		}
	})
} else {
	console.log('O arquivo não existe.')
}

console.log("Última execução")  // É executado primeiro pois a operação anterior é assíncrona.