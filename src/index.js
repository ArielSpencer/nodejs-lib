const fs = require('fs'); // lib/fs.js

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (err, data) => {
  quebraEmParagrafos(data);
})

function quebraEmParagrafos(data) {
  const paragrafos = data.toLowerCase().split('\n');
  const contagem = paragrafos
    .filter((paragrafo) => paragrafo) // return false to empty
    .map((paragrafo) => {
      return verificaPalavrasDuplicadas(paragrafo);
    })
  console.log(contagem);
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(data) {
  const listaPalavras = data.split(' ');
  const resultado = {};
  listaPalavras.forEach(palavra => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
    }
  })
  return resultado;
}
