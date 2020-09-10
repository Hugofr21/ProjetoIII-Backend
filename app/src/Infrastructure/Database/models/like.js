/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    const Like = sequelize.define('Like', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        fromUserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        toUserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    }, {
        tableName: 'likes',
        timestamps: false
    });

    Like.associate = (db) => {
        let userModel = db.models.UserModel
        userModel.hasMany(Like, {foreignKey: 'toUserId', targetKey: 'id', as: 'likes' });
        //Like.belongsTo(userModel);
        userModel.includes.push({model: Like, as: 'likes'});
    };

    return Like;
};
