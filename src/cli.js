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

async function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = JSON.stringify(listaPalavras);
  try {
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log('Arquivo criado')
  } catch (erro) {
    throw erro;
  }
}
