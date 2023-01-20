const fs = require('fs')

if(fs.existsSync('./texto.txt')) {
	fs.unlink('./texto.txt', (err)=> {
		if(err) {
			console.log(err)
		} else {
			console.log('Arquivo excluído com sucesso.')
		}
	})
} else {
	console.log('O arquivo não existe')
}

// Pode-se usar o fs.rm() ao invés do fs.unlink()