/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Projeto = sequelize.define('Projeto', {
    id_projeto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_teamleader: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teamleader',
        key: 'id_teamleader'
      }
    },
    id_tarefa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    observacoes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_fim: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    disponibilidade: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'projeto'
  });
  
  return Projeto;
};