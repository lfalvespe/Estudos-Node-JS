// Streams - writeStream

const fs = require('fs')

const readStream = fs.createReadStream('./dados.txt', {encoding: 'utf-8'})
const escrita = fs.WriteStream('./output.txt')

readStream.on('data', (dados)=> {
	escrita.write('/n######################################################################\n')
	escrita.write(dados)
})






