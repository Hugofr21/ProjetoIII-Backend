const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

module.exports = (sequelize, DataTypes) => {
  const Utilizador = sequelize.define('Utilizador', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    n_contribuinte: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: true
    },
    morada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nacionalidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sessao_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sessao_entrada: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'utilizador'
  });

  // eslint-disable-next-line
  Utilizador.prototype.isValidPassword = async function (password) {
    const compare = await bcrypt.compare(password, this.password);
    return compare;
  };

  // Utilizador.associate = (models) => {
  //   // associations can be defined here
  // };

  Utilizador.beforeCreate(async (utilizador) => {
    /* eslint-disable */
    utilizador.password = await bcrypt.hash(utilizador.password, SALT_WORK_FACTOR);
  });

  return Utilizador;
};
