import {Password} from "../../../Domain/User/ValueObject/Password";

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
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
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nif: {
            type: DataTypes.BIGINT,
            allowNull: true,
            unique: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        postalCode: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        session: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sessionDate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        birthDate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        imageName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        availableToTravel: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        isTeamLeader: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    }, {
        tableName: 'users',
        timestamps: false
    });

    User.associate = (db) => {
        User.valueObjects.push({model: Password, field: 'password'});
    };

    return User;
};
