const { Utilizador } = require('../models');

const create = async (username, password, n_contribuinte, morada, sexo, idade, nacionalidade, email, telefone, tipo, sessao_token,
  data_nascimento) => Utilizador.create({
  username: username,
  password: password,
  n_contribuinte: n_contribuinte,
  morada: morada,
  sexo: sexo,
  idade: idade,
  nacionalidade: nacionalidade,
  email: email,
  telefone: telefone,
  tipo: tipo,
  sessao_token: null,
  data_nascimento: data_nascimento
});

const list = async (page, limit) => Utilizador.findAll({
  offset: page,
  limit: limit
});

const retrieve = async (utilizadorId) => Utilizador.findByPk(utilizadorId);

const update = async (utilizadorId, tipo) => {
  const utilizador = await Utilizador.findByPk(utilizadorId);

  if (!utilizador) {
    throw new Error('Utilizador not found');
  }

  return utilizador.update({
    tipo: tipo || utilizador.tipo,
  });
};

const destroy = async (utilizadorId) => {
  const utilizador = await Utilizador.findByPk(utilizadorId);

  if (!utilizador) {
    throw new Error('Utilizador not found');
  }

  return utilizador.destroy();
};

module.exports = {
  create,
  list,
  retrieve,
  update,
  destroy,
};
