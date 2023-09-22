const {DataTypes} = require('sequelize');
const {sequelize} = require('../utils/database');
const {Products} = require('./products');
const {Orders} = require('./orders');

module.exports = {
    //  In the value of this property, we will call a function from Sequelize to set up what the user objects should look like.
    ProductOrders: sequelize.define('productorders', {
        productOrdersId:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull: false,
            primaryKey:true
        },
        orderId: {
            type:DataTypes.INTEGER,
            references: {
                model: Orders,
                key: 'orderId'
            }
        },
        productsId: {
            type:DataTypes.INTEGER,
            references: {
                model: Products,
                key: 'productsId'
            }
        }
    })
}