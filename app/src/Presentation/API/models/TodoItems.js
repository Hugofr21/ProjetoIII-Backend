/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TodoItems', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    todoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Todos',
        key: 'id'
      }
    }
  }, {
    tableName: 'TodoItems'
  });
};
