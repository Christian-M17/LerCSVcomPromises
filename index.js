const fs = require('fs')

const planilha = fs.promises.readFile('times.csv');

planilha.then((arquivo) => {
    console.log(arquivo.toString('utf8'))
})