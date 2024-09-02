const fs = require('fs'); // lib/fs.js

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (err, data) => {
  if (err) {
    console.log('Erro:', err.code);
    return
  }
  contaPalavras(data);
})

function contaPalavras(data) {
  const paragrafos = extraiParagrafos(data)
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return []
    return verificaPalavrasDuplicadas(paragrafo);
  });
  console.log(contagem);
}

function extraiParagrafos(data) {
  return data.toLowerCase().split('\n');
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
