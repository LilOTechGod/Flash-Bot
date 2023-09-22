const {UserCreditCard} = require('../models/userCreditCard');

module.exports = {
    processpayment: async(req, res) => {
        console.log('trying to process payment method');

        try{
            const {CC_number, CC_expiration, CC_securityCode, CC_billingAddress, CC_shippingAddress, CC_zipcode} = req.body;
            await UserCreditCard.create({
                cc_number: CC_number,
                cc_expiration: CC_expiration,
                cc_securityCode: CC_securityCode,
                cc_billingAddress: CC_billingAddress,
                cc_shippingAddress: CC_shippingAddress,
                cc_zipcode: CC_zipcode
            })
            res.sendStatus(200)
        } catch(err) {
            console.log('ERROR IN processpayment')
            console.log(err)
            res.sendStatus(400)
        }
    }
};