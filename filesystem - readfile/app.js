import fs from 'fs'

if (fs.existsSync('./dados.csv')) {
	fs.readFile('./dados.csv', (err, data)=> {
		if(err) {
			console.log(err)
		} else {
			console.log(data.toString())
		}
	})
}else {
	console.log('O arquivo não existe.')
}