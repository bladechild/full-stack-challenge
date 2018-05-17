var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "19910917asdZX",
    database: 'paytm'
});
con.connect(function (err) {
    if (err) return callback(err);
    console.log("Connected!");
});
const query = (sql, callback) => {
    con.query(sql, function (err, result) {
        if (err) return callback(err);
        return callback(null, result);
    });
}
const listEmployees = (callback) => {
    query(`SELECT * FROM Employees`, callback);
};

const addEmployee = (name, callback) => {
    const sql = `INSERT INTO Employees (name) VALUES ('${name}')`;
    query(sql, callback);
};

const retrieveEmployee = (name, callback) => {
    const sql = `SELECT * FROM Employees WHERE Name = '${name}'`;
    query(sql, callback);
}

const updateEmployee = (id, name, callback) => {
    const sql = `Update Employees set Name = '${name}' WHERE Id = '${id}'`;
    query(sql, callback);
}

const deleteEmployee = (name, callback) => {
    console.log(name);
    const sql = `Delete from Employees WHERE Name = '${name}'`;
    query(sql, callback);
}

const addReview = (fromId, toId, note, callback) => {
    const sql = `Insert Into Reviews (fromId, toId, note) Values ('${fromId}','${toId}','${note}')`;
    query(sql, callback);
}

const updateReview = (fromId, toId, note, callback) => {
    const sql = `Update Reviews Set note = '${note}' where fromId = '${fromId}' and toId = '${toId}'`;
    query(sql, callback);
}

const getAllReviews = (callback) => {
    const sql = `select * from Reviews`;
    query(sql, callback);
}

const getReviews = (fromId, callback) => {
    const sql = `select * from Reviews where fromId = '${fromId}'`;
    query(sql, callback);
}
module.exports = {
    listEmployees, addEmployee, retrieveEmployee,
    updateEmployee, deleteEmployee, addReview,
    updateReview, getAllReviews, getReviews
};