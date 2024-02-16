const fs = require('fs')
var nomearquivo = 'times.csv'
const planilha = fs.promises.readFile(nomearquivo);

planilha
.then((arquivo) => {
    console.log(arquivo.toString('utf8'))})
.catch((error) => {
    console.log ('Problema! ', error)
})
.finally(() => console.log("Obrigado por usar o Readfiles, desenvolvido por Christian-M17")) 