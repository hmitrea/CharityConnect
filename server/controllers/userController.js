const db = require('../models/database');

const bcrypt = require('bcrypt');
const { response } = require('express');
const saltRounds = 10;
const userController = {};

userController.createUser = (req, res, next) => {
    // check to see if in DB
    // console.log('req body',req.body)
    let username,
        password;
    console.log(req.user, req.body)
    if(req.user){
        username = req.user.username;
        password = req.user.id;
    }else{
        username = req.body.username;
        password  = req.body.password;
    }
    // let username = req.user.username || req.body.username;
    // let password = req.user.id || req.body.password;
    console.log('username, password', username, password)
    // const { username, password } = req.body;

    // if one is missing?
    if (!username.length || !password.length) {
        return next({
            log: {err: 'createUser: username or password undefined'},
            message: 'Missing username or password'
        })
    }
    //check db to see if username exists
    const text1 = 'SELECT * FROM users where username = $1';
    const params1 = [username];
    db.query(text1, params1, (err, response) => {
        if (err) {
            return next({
                log: `Error: ${err}`
            })
        } else {
            // if username exists
            if(response.rows[0]) {
                // console.log('object: ',response.rows[0])
                bcrypt.compare(password, response.rows[0].password, function(err, result) {
                    if(err) {
                        return next({
                            log: `Error is: ${err}`
                        })    
                    } else {
                        if(result === true) {
                            res.locals.user = {username: response.rows[0].username, id: response.rows[0]._id};
                        }
                        if(result === false){
                            res.locals.user = {log: 'Wrong username/password combo'}
                        }
                        // console.log(res.locals.user)
                        return next();
                    }
                });
            } else {
                //if user doesn't exist 
                // hash password
                bcrypt.hash(password, saltRounds, function(err, hash) {
                    // Store hash in your password DB.
                    const text2 = 'INSERT INTO users(username, password) VALUES ($1, $2) RETURNING *';
                    const params2 = [username, hash];
                    db.query(text2, params2, (err, response)=>{
                        if(err){
                            return next({
                                log: `createUser: ${err}`
                            })
                        } else {
                            //save username
                            console.log(response.rows)
                            res.locals.user = {username: response.rows[0].username, id: response.rows[0]._id};
                            // console.log('username: ', res.locals.username)
                            return next();
                        }
                    })
                });
            }
        }
    })
}

module.exports = userController;
