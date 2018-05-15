const { listEmployees, addEmployee, retrieveEmployee, updateEmployee, deleteEmployee } = require('./db');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const hostname = '127.0.0.1';
const port = 8888;
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/listEmployees', function (req, res) {
    listEmployees((error, employees) => {
        if (error) res.send(error);
        else res.send(employees);
    });
});
app.get('/searchEmployee', function (req, res) {
    console.log(req.query);
    const { name } = req.query;
    retrieveEmployee(name, (error, response) => {
        if (error) res.send(error);
        else {
            res.send(response);
        }
    });
});
app.post('/addEmployee', function (req, res) {
    console.log(req);
    const { name } = req.body;
    addEmployee(name, (error, response) => {
        if (error) res.send(error);
        else res.send(response)
    });
});

app.post('/updateEmployee', function (req, res) {
    console.log(req);
    const { id } = req.query;
    const { name } = req.body;
    updateEmployee(id, name, (error, response) => {
        if (error) res.send(error);
        else res.send(response)
    });
});

app.delete('/deleteEmployee', function (req, res) {
    const { name } = req.body;
    deleteEmployee(name, (error, response) => {
        if (error) res.send(error);
        else res.send(response)
    });
})
app.listen(port, function (error) {
    if (error) console.log(error);
    var host = hostname;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})