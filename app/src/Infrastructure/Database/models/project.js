/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        teamLeaderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        deliveryDate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        availableToTravel: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    }, {
        tableName: 'projects',
        timestamps: false
    });

    return Project;
};