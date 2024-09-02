import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

fs.readFile(link, 'utf-8', (err, data) => {
  try {
    if (err) throw err
    const resultado = contaPalavras(data);
    criaESalvaArquivo(resultado, endereco);
  } catch (erro) {
    trataErros(erro)
  }
})

function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = JSON.stringify(listaPalavras);

  fs.promises.writeFile(arquivoNovo, textoPalavras)
    .then(() => {
      console.log('Arquivo criado');
    }).catch(() => {
      throw erro
    })
    .finally(() => console.log('Operação finalizada'))
}
