const path = require('node:path');
require('dotenv').config({
    path: path.join(__dirname, '../.env')
});

console.log(path);
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    port: process.env.DBPORT,
});

module.exports = connection;