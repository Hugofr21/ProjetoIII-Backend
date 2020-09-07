/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Developer = sequelize.define('Developer', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilizador',
        key: 'id_utilizador'
      }
    },
    id_developer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'developer'
  });

  Developer.associate = (models) => {
    Developer.belongsTo(models.Utilizador, {
      foreignKey: 'id_utilizador',
    });
  };

  return Developer;
};