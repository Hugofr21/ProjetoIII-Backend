/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transferencias_departamento', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilizador',
        key: 'id_utilizador'
      }
    },
    id_transferencias_departamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_departamento_antigo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_departamento_novo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hora: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'transferencias_departamento'
  });
};
