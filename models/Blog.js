const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

//Create new sequelize model for blogs
class Blog extends Model {}

Blog.init(
    {
    //defines the primary key
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    content:{
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
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'blog'
});

module.exports = Blog;
