// Importando apenas o conteúdo que deseja com destruturação

// Exemplos:

// const {nomes} = require('./modulo')
// const {cidades} = require('./modulo)
// const {nomes, cidades} = require.('./modulo)

const {nomes, cidades, texto, adicionar} = require('./modulo')

console.log(nomes)
console.log(texto)

console.log(adicionar(8, 6))