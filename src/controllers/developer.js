const { Developer, Utilizador } = require('../models');
const { Op } = require('../models');

const create = async (username, email, password, state, n_contribuinte, phone) => {
  
  const utilizador = await Utilizador.create({
    username: username,
    email: email,
    password: password,
    tipo: state,
    n_contribuinte: n_contribuinte,
    telefone: phone
  });
  if (utilizador == null) {
    return null;
  }
  console.log(utilizador.dataValues.id_utilizador);
  return Developer.create({id_utilizador: utilizador.dataValues.id_utilizador});
}

const list = async (name, state, id, page) => {
  let where = {};
  if (name !== null) {
    where['$Utilizador.username$'] = {
      [Op.iLike]: '%' + name + '%'
    }
  }
  if (state !== null) {
    //where['id_developer'] = id;
  }
  if (id !== null) {
    where['id_developer'] = id;
  }
  return Developer.findAndCountAll({
    where: where,
    offset: page * 5,
    limit: 5,
    include: [{
      model: Utilizador,
    }],
  })
};

const retrieve = async (developerId) => Developer.findByPk(developerId, {
  include: [{
    model: Utilizador,
  }],
});

const destroy = async (developersIds) => {
  return Developer.destroy({ where: { id_developer: developersIds }});
};


module.exports = {
  create,
  list,
  retrieve,
  destroy
};
