module.exports = function (sequelize, DataTypes) {
    const UserLanguage = sequelize.define('UserLanguage', {
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
        },
        languageId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'languages',
                key: 'id'
            }
        }
    }, {
        tableName: 'user_languages',
        timestamps: false
    });

    UserLanguage.associate = (db) => {
        let userModel = db.models.UserModel
        userModel.hasMany(UserLanguage, {foreignKey: 'userId', targetKey: 'id', as: 'languages' });
        userModel.includes.push({model: UserLanguage, as: 'languages'});
    };

    return UserLanguage;
};
