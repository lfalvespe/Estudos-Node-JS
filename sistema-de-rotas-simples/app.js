const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=> {

	let html_page = ''

	switch (req.url) {
		case '/':
			html_page = './pages/index.html'
			break;
		case '/about':
			html_page = 'pages/about.html'
			break;
		case '/contact':
			html_page = 'pages/contact.html'
			break;
		default:
			html_page = 'pages//404.html'
			break;
	}	

	fs.readFile(html_page, (err, data)=> {
		if (err) {
			res.write('Erro')
			res.end()
		} else {
			res.write(data)
			res.end()
		}
	})

})

server.listen(3000, 'localhost', ()=> {
	console.log('servidor em execução.')
})