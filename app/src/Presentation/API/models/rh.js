/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rh', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilizador',
        key: 'id_utilizador'
      }
    },
    id_rh: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'rh'
  });
};
