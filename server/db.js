var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "19910917asdZX",
    database: 'paytm'
});

const listEmployees = (callback) => {
    con.connect(function (err) {
        if (err) return callback(err);
        console.log("Connected!");
        con.query("SELECT * FROM Employees", function (err, result, fields) {
            if (err) callback(err);
            console.log(result);
            callback(null, result);
        });
    });
};

const addEmployee = (name, callback) => {
    con.connect(function (err) {
        if (err) return callback(err);
        console.log("Connected!");
        var sql = `INSERT INTO Employees (name) VALUES ('${name}')`;
        con.query(sql, function (err, result) {
            if (err) return callback(err);
            return callback(null, "1 record inserted");
            // console.log("1 record inserted");
        });
    });
};

const retrieveEmployee = (name, callback) => {
    con.connect(function (err) {
        if (err) return callback(err);
        console.log("Connected!");
        var sql = `SELECT * FROM Employees WHERE Name = '${name}'`;
        con.query(sql, function (err, result) {
            if (err) return callback(err);
            return callback(null, result);
            // console.log("1 record inserted");
        });
    });
}

const updateEmployee = (id, name, callback) => {
    con.connect(function (err) {
        if (err) return callback(err);
        console.log("Connected!");
        var sql = `Update Employees set Name = '${name}' WHERE Id = '${id}'`;
        con.query(sql, function (err, result) {
            if (err) return callback(err);
            return callback(null, result);
            // console.log("1 record inserted");
        });
    });
}

const deleteEmployee = (name, callback) => {
    con.connect(function (err) {
        if (err) return callback(err);
        console.log("Connected!");
        var sql = `Delete from Employees WHERE Name = '${name}'`;
        con.query(sql, function (err, result) {
            if (err) return callback(err);
            return callback(null, result);
            // console.log("1 record inserted");
        });
    });
}
// listEmployees((error, result) => {
//     if (error) console.log(error);
//     else console.log(result);
// });
module.exports = { listEmployees, addEmployee, retrieveEmployee, updateEmployee, deleteEmployee };