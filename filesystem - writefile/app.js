const fs = require('fs')

fs.writeFile('./dados.txt', 'Curso de Node JS', ()=> {                   // Operação assíncrona
		console.log('Arquivo gravado com sucesso.')
})


fs.writeFileSync('./dados2.txt', 'Essa operação acontece primeiro')    // Operação síncrona: Segundo a ser executado (não vemos no console pois não tem uma callback)

console.log('última operação') // primeiro a ser executado 

