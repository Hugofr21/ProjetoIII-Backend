/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projeto_estados', {
    id_projeto_estados: {
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
    }
  }, {
    tableName: 'projeto_estados'
  });
};
