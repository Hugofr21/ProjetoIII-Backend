const { Lingua } = require('../models');

const {
  utilizadorController,
} = require('../controllers');

//Dados estaticos

const initializeUtilizadores = async () => {
  await Promise.all([
    utilizadorController.create("admin", "admin", "123456789", "Viseu", "masculino", 20, "Portuguesa", "admin@admin.com",  "961234567",
     "developer", null, null)
     
  ]);
};

const intializeLinguas = async() => {
  await Promise.all([
    Lingua.create({ nome: "Portugues", observacoes: "observacoes" }),
    Lingua.create({ nome: "Ingles", observacoes: "observacoes" })
  ]);
};

const initializeDatabase = async () => {
  await initializeUtilizadores();
  await intializeLinguas();
};

module.exports = {
  initializeDatabase,
};
