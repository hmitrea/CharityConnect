const { Pool } = require('pg');
const PG_URI = 'postgres://pgefymjb:VSRd7V0Jugiv4FTVWA_v6bnNR07n5G7C@ruby.db.elephantsql.com:5432/pgefymjb';

const pool = new Pool({
    connectionString: PG_URI
});

// create user table
// create users table
// CREATE TABLE IF NOT EXISTS users (
//     _id SERIAL PRIMARY KEY,
//     username varchar(50) NOT NULL,
//     password varchar NOT NULL);

// CREATE TABLE IF NOT EXISTS charity (
//     _id SERIAL PRIMARY KEY, 
//     user_id int, charity_id int, 
//     FOREIGN KEY (user_id) REFERENCES users(_id), 
//     FOREIGN KEY (charity_id) REFERENCES charity(_id));

// CREATE TABLE IF NOT EXISTS charity_favs (
//     _id SERIAL PRIMARY KEY, 
//     user_id int, 
//     charity_id int, 
//     FOREIGN KEY (user_id) REFERENCES users(_id), 
//     FOREIGN KEY (charity_id) REFERENCES charity(_id));


// Categories 

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query: ', text);
        return pool.query(text, params, callback);
    }
};