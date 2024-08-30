const fs = require('fs'); // lib/fs.js

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (err, data) => {
  quebraEmParagrafos(data);
})

function quebraEmParagrafos(data) {
  const paragrafos = data.toLowerCase().split('\n');
  const contagem = paragrafos.map((paragrafo) => {
    return verificaPalavrasDuplicadas(paragrafo);
  })
  console.log(contagem);
}

function verificaPalavrasDuplicadas(data) {
  const listaPalavras = data.split(' ');
  const resultado = {};
  listaPalavras.forEach(palavra => {
    resultado[palavra] = (resultado[palavra] || 0) + 1
  })
  return resultado;
}
