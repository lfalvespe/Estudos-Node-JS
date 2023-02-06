// Response Status Codes:

// Descreve o tipo de resposta enviada para o browser:

// 200 - Tudo Ok
// 301 - O recurso mudou para outro local (redirect)
// 404 - Recurso não encontrado
// 500 - Erro interno do servidor

// Ranges:

// 100 - Respostas informativas
// 200 - Códigos de sucesso
// 300 - Redirecionamentos
// 400 - Erros de cliente ou utilizador
// 500 - erros internos de servidor

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=> {

	res.setHeader('Content-Type', 'text/html')

	let page = ''
	switch(req.url) {
		case '/':
			page = './html_pages/index.html'
			res.statusCode = 200
			break;
		case '/about':
			page = './html_pages/about.html'
			res.statusCode = 200
			break;
		case '/contact':
			page = './html_pages/contact.html'
			res.statusCode = 200
			break;
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

