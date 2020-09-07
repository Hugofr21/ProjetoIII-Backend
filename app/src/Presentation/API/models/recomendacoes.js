/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recomendacoes', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilizador',
        key: 'id_utilizador'
      }
    },
    id_recomendacoes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    comentario: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'recomendacoes'
  });
};
