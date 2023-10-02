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
        user_firstName: DataTypes.CHAR(30),
        user_lastName: DataTypes.CHAR(30),
        user_hashPass: DataTypes.CHAR(80),
        user_email: DataTypes.CHAR(60)
    })
}