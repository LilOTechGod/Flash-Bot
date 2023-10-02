const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.SECRET;
const {User} = require('../models/user');
const bcrypt = require("bcryptjs");



const createToken = (email,id) => {
    return jwt.sign(
        {
            // we'll be using these 2 key value pairs in our encoding process. Information we want to use for encoding
         user_email: email,
         userId: id

        },
        SECRET,
        {
            expiresIn: '1 day'
        }
    );
};


//  async allow us to perform asynchronous actions in the function using the await keyword.

module.exports = {
    login: async (req, res) => {        
        try{
            let {user_email, password} = req.body;

            // find one is sequelize method and the object adds a WHERE clause to our query and looks for user_emails matching the one coming from req.body.
            let foundUser = await User.findOne({WHERE: {user_email: user_email}})

            if(foundUser) {
                // First, we’ll check to see if the user_email is in our DB if so then match password that's stored in the database with the password they typed in input. 
                console.log(foundUser);
                const isAuthenticated = bcrypt.compareSync(password, foundUser.user_hashPass);
                // will check if isAuthenticated is truthy.
                if(isAuthenticated) {
                    // this makes a new token for our new user passing in the user_email and id
                    let token = createToken(foundUser.user_email, foundUser.userId);

                    // make our own expiration time since the JWT sign method only returns the actual token.
                    const exp = Date.now() + 1000 * 60 * 60 * 48;

                    // I created an object that holds all of the new user data so that I may send this to the front end
                    const userData = {
                    user_email: foundUser.user_email,
                    userId: foundUser.userId,
                    token: token,
                    exp: exp
                    };
                
                    console.log(userData);
                    res.status(200).send(userData);
                } else {
                    res.status(400).send('Password is incorrect!');
                }

            }else {
                res.status(400).send('User does not exist!');
            }
        } catch(err) {
            console.error(err);
            res.status(400).send(err);
        };
    },
    register: async (req, res) => {
        try{
            let {user_email, password, user_firstName, user_lastName} = req.body;
            // find one is sequelize method and the object adds a WHERE clause to our query and looks for user_emails matching the one coming from req.body.
            let foundUser = await User.findOne({WHERE: {user_email: user_email}})
            // if foundUser is true, that means we already have a user with that name in the database.
            if(foundUser) {
                res.status(400).send('Email is taken please, create a unique user_email!')
            }else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password, salt);

                // will create a new user, going into the user model and creates a new user setting the user_email and hashedpass columns to the input from the front end; saves the hashed pass.
                const newUser = await User.create({user_email: user_email, user_hashPass: hash, user_firstName: user_firstName, user_lastName: user_lastName});

                // this makes a new token for our new user passing in the user_email and id
                let token = createToken(newUser.dataValues.user_email, newUser.dataValues.userId)

                // make our own expiration time since the JWT sign method only returns the actual token.
                const exp = Date.now() + 1000 * 60 * 60 * 48

                // I created an object that holds all of the new user data so that I may send this to the front end
                const newUserData = {
                    user_email: newUser.dataValues.user_email,
                    userId: newUser.dataValues.userId,
                    user_firstName: newUser.dataValues.user_firstName,
                    user_lastName: newUser.dataValues.user_lastName,
                    token: token,
                    exp: exp
                    }
                
                console.log(newUser);
                res.status(200).send(newUserData);
            }
        }
        catch(err) {
            console.error(err);
            res.status(400).send(err);
        };
    },
}