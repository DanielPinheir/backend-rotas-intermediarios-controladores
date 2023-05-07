const express = require("express");
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let index = 0;

app.get("/", (req, res) => {
  const nomeDoJogador = jogadores[index];
  res.send(`É a vez de ${nomeDoJogador} jogar!`);
  index = (index + 1) % jogadores.length;
});

app.get("/remover", (req, res) => {
  const { indice } = req.query;
  if (jogadores[indice]) {
    jogadores.splice(indice, 1);
    res.send(jogadores);
  }
  const indiceNaoExistente = `Não existe jogador no índice informado (${indice}) para ser removido.`;
  res.send(indiceNaoExistente);
});

app.get("/adicionar", (req, res) => {
  let { nome, indice } = req.query;
  nome = `${nome[0].toUpperCase()}${nome.slice(1).toLowerCase()}`;
  if (indice && !jogadores[indice]) {
    res.send(
      `O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`
    );
  }
  if (!indice && nome) {
    jogadores.push(nome);
    res.send(jogadores);
  }
  if (indice && nome) {
    jogadores.splice(indice, 0, nome);
    res.send(jogadores);
  }
});

app.listen(8000, () => {
  console.log("Inicializando o servidar na porta 8000");
});
