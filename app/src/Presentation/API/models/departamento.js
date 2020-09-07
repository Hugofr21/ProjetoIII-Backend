/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departamento', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilizador',
        key: 'id_utilizador'
      }
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'departamento'
  });
};
