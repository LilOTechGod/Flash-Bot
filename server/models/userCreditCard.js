const {DataTypes} = require('sequelize');
const {sequelize} = require('../utils/database');

module.exports = {
    UserCreditCard: sequelize.define('usercreditcard', {
        userCCId:{
        type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull: false,
            primaryKey:true
        },
        cc_number: DataTypes.INTEGER,
        cc_expiration: DataTypes.VARCHAR(5),
        cc_securityCode: DataTypes.INTEGER,
        cc_billingAddress: DataTypes.VARCHAR(60),
        cc_shippingAddress: DataTypes.VARCHAR(60),
        cc_zipcode: DataTypes.INTEGER
    })
}