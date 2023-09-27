const express = require('express');
const cors = require('cors');
const {sequelize} = require('./utils/database');
const {User} = require('./models/user')
const {Post} = require('./models/post')

const app = express();

const PORT = process.env.PORT || 4004

app.use(express.json());
app.use(cors());

//? CB Functions
const {login, register} = require('./controllers/auth');
const { isAuthenticated } = require('./middleware/isAuth');
const {processpayment} = require('./controllers/controllers');

//~ Routes
app.post('/register', register);
app.post('/login', login);
app.post('/processpayment', isAuthenticated, processpayment);


// the force: true is for development -- it DROPS tables!!!
// you can use it if you like while you are building.
// sequelize.sync({ force: true })
// use the .sync method to connect to our database, create the models for me
sequelize.sync({force: true})
.then(() => {
        app.listen(PORT, () => console.log(`db sync successful and server running on port ${PORT}`));
    })
.catch(err => console.error(err));