const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // Your MySQL username,temporary user
        user: "newuser",
        // Your MySQL password, temporary password
        password: "password",
        database: "election"
    },
    console.log("Connected to the election database.")
);

module.exports = db;