// Streams

const fs = require('fs')

const readStream = fs.createReadStream('./dados.txt', {encoding: 'utf-8'})

readStream.on('data', (dados)=> {
	console.log('########################################################################################')
	console.log(dados)
})


// OBS.: utilizando o {encoding: 'utf-8'} não precisamos usar o método toString em dados quando for aprensentá-lo.