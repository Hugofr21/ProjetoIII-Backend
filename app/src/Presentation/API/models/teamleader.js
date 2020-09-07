/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teamleader', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilizador',
        key: 'id_utilizador'
      }
    },
    id_teamleader: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'teamleader'
  });
};
