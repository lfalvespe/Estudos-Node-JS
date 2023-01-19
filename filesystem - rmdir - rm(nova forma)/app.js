const fs = require('fs')

if (fs.existsSync('./pasta1')) {
	fs.rmdir('./pasta1', {recursive: true}, (err)=> {
		if(err) {
			console.log(err)
		} else {
			console.log('Pasta removida com sucesso.')
		}
	})
} else {
	console.log('A pasta não existe')
}


// fs.rmdir() será substituído por fs.rm() nas próximas versões do Node JS