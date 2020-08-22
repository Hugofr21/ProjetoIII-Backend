module.exports = (sequelize, DataTypes) => {
  const Lingua = sequelize.define('Lingua', {
    id_lingua: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    observacoes: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'lingua'
  });

  return Lingua;
};