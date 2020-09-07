/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarefa', {
    id_tarefa_developer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tarefa_developer',
        key: 'id_tarefa_developer'
      }
    },
    id_tarefa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_projeto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'projeto',
        key: 'id_projeto'
      }
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
    tableName: 'tarefa'
  });
};
