var mysql = require('mysql');

JAWSDB_URL='mysql://j3t7omvjfvjftjpd:o5qlll5pc85nftzu@uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/lje9ib0grlb20u5n';

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'lje9ib0grlb20u5n'
    })
};

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: " + connection.threadId)
});

module.exports = connection;