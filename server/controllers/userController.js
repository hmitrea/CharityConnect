const db = require('../models/database');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const userController = {};

userController.createUser = (req, res, next) => {
    // check to see if in DB
    const { username, password } = req.body;
    console.log(req.body.username, req.body.password)

    // if one is missing?
    if (!username.length || !password.length) {
        return next({
            log: {err: 'createUser: username or password undefined'},
            message: 'Missing username or password'
        })
    }
    // hash password
    bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        const text = 'INSERT INTO users(username, password) VALUES ($1, $2) RETURNING *';
        const params = [username, hash];
        db.query(text, params, (err, response)=>{
            if(err){
                return next({
                    log: `createUser: ${err}`
                })
            } else {
                //save username
                console.log(response.rows)
                res.locals.user = response.rows[0].username;
                console.log('username: ', res.locals.user)
                return next();
            }
        })
    });

}

userController.verifyUser = (req, res, next) => {

}

module.exports = userController;
