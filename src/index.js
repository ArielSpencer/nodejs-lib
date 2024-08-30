const fs = require('fs'); // lib/fs.js

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (err, data) => {
  verificaPalavrasDuplicadas(data);
})

function verificaPalavrasDuplicadas(data) {
  const listaPalavras = data.split(' ');
  const resultado = {};
  listaPalavras.forEach(palavra => {
    resultado[palavra] = (resultado[palavra] || 0) + 1
  })
  console.log(resultado);
}
