/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('utilizador_competencias', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilizador',
        key: 'id_utilizador'
      }
    },
    id_utilizador_competencias: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    observacoes: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'utilizador_competencias'
  });
};
