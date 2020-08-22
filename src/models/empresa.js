/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empresa', {
    id_gestor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departamento',
        key: 'id_departamento'
      }
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    morada: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_contribuinte: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'empresa'
  });
};
