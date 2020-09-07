/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarefa_developer', {
    id_tarefa_developer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_developer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'developer',
        key: 'id_developer'
      }
    },
    observacoes: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'tarefa_developer'
  });
};
