const { Projeto } = require('../models');

const create = async (name, email, start_date, end_date, nif, elements, phone, 
  teamLeaderId, description, tripAvailability) => Projeto.create({
    id_teamleader: teamLeaderId,
    nome: name,
    observacoes: description,
    data_inicio: start_date,
    data_fim: end_date,
    disponibilidade: tripAvailability
});

module.exports = {
  create,
};
