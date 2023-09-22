const {DataTypes} = require('sequelize');
const {sequelize} = require('../utils/database');

module.exports = {
    User: sequelize.define('user', {
        userId:{
        type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull: false,
            primaryKey:true
        },
        user_firstName: DataTypes.VARCHAR(30),
        user_lastName: DataTypes.VARCHAR(30),
        user_hashPass: DataTypes.VARCHAR(40),
        user_email: DataTypes.VARCHAR(60)
    })
}