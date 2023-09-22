const {DataTypes} = require('sequelize');
const {sequelize} = require('../utils/database')
const {User} = require('./user');

module.exports = {
    //  In the value of this property, we will call a function from Sequelize to set up what the user objects should look like.
    Orders: sequelize.define('orders', {
        orderId:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull: false,
            primaryKey:true
        },
        userId: {
            type:DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        }
    })
}