/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ferias', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilizador',
        key: 'id_utilizador'
      }
    },
    id_ferias: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    observacoes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_fim: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'ferias'
  });
};
