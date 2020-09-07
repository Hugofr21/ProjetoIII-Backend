module.exports = function(sequelize, DataTypes) {
  return sequelize.define('competencias', {
    id_competencias: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_utilizador_competencias: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilizador_competencias',
        key: 'id_utilizador_competencias'
      }
    },
    observacoes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo_competencias: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'competencias'
  });
};
