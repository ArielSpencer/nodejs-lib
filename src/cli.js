import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (err, data) => {
  try {
    if (err) throw err
    contaPalavras(data);
  } catch (erro) {
    trataErros(erro)
  }
})
