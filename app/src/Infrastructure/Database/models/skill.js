module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Skill', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'skills',
        timestamps: false
    });
};
