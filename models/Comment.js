const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

//Create new sequelize model for comments
class Comment extends Model {}

Comment.init(
    {
    //defines the primary key
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    comment:{
        type: DataTypes.STRING(1024),
        allowNull: false,
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    user_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    blog_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        references: {
            model: 'blog',
            key: 'id',
        },
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'comment'
});

module.exports = Comment;
