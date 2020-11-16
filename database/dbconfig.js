require("dotenv").config()
const mysql = require("mysql")
const util = require("util")

const options = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password : "",
    database : process.env.DB_NAME,
    multipleStatements: process.env.DB_MULTIPLE_STATEMENTS,
    dateStrings : process.env.DB_DATE_STRINGS
}

const connection = mysql.createConnection(options)
connection.query = util.promisify(connection.query)

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
})

module.exports = connection



