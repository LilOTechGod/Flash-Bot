const {DataTypes} = require('sequelize');
const {sequelize} = require('../utils/database');

module.exports = {
    Products: sequelize.define('orders', {
        productsId:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull: false,
            primaryKey:true
        },
        bot_name: {
            type:DataTypes.VARCHAR(40),
            unique: true,
        },
        bot_price: DataTypes.VARCHAR(40),
        use_for: DataTypes.VARCHAR(60),
        version: DataTypes.VARCHAR(10),
        created_on: DataTypes.ZONE
    })
}