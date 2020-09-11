module.exports = function (sequelize, DataTypes) {
    const UserSkill = sequelize.define('UserSkill', {
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
        skillId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'skills',
                key: 'id'
            }
        }
    }, {
        tableName: 'user_skills',
        timestamps: false
    });

    UserSkill.associate = (db) => {
        let userModel = db.models.UserModel
        userModel.hasMany(UserSkill, {foreignKey: 'userId', targetKey: 'id', as: 'skills' });
        userModel.includes.push({model: UserSkill, as: 'skills'});
    };

    return UserSkill;
};
