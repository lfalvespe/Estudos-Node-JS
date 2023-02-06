const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res)=> {

	// Grenado números aleatórios de o a 100 com o lodash:
	console.log(_.random(0, 100))
	
	let page = ''
	switch(req.url) {
		case '/':
			page = './html_pages/index.html'
			res.statusCode = 200
			break
		case '/about':
			page = './html_pages/about.html'
			res.statusCode = 200
			break
		case '/contact':
			page = './html_pages/contact.html'
			res.statusCode = 200
			break
		case '/sobre':
			res.setHeader('Location', '/about')
			res.statusCode = 301
			break
		default:
			page = './html_pages/404.html'
			res.statusCode = 404
	}
	

	fs.readFile(page, (err, data)=> {
		if(err) {
			res.write('Página não encontrada')
			res.end()
		} else {
			res.write(data)
			res.end()
		}
	})
})

server.listen(3000, ()=> {
	console.log('Servidor iniciado com sucesso.')
})


