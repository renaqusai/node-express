/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');

var source = {
	
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'burger_db'
	},
	jawsDB: {
		port: 3306,
		host: 'gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'vt0eotyupp1i15ni',
		password: 'qz6dygedxs71a8ou',
		database: 'u4wogneutc6rikrq'
	}

}

var connection = mysql.createConnection( source.jawsDB );

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Databased connected as id: ' + connection.threadId);
});

module.exports = connection;