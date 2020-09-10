/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
    const Developer = sequelize.define('Developer', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    }, {
        tableName: 'developers',
        timestamps: false
    });

    Developer.associate = (db) => {
        Developer.belongsTo(db.models.UserModel, {
            foreignKey: 'id',
        });
    };

    return Developer;
};