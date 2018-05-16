const { listEmployees, addEmployee, retrieveEmployee,
    updateEmployee, deleteEmployee, addReview,
    updateReview, getAllReviews, getReviews } = require('./db');
const express = require('express');
const cors = require('cors')
const app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = 'localhost';
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
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
});

app.post('/addReview', (req, res) => {
    const { fromId, toId, note } = req.body;
    addReview(fromId, toId, note, (error, response) => {
        if (error) res.send(error);
        else res.send(response);
    });
});

app.post('/updateReview', (req, res) => {
    const { fromId, toId, note } = req.body;
    updateReview(fromId, toId, note, (error, response) => {
        if (error) res.send(error);
        else res.send(response);
    });
});

app.get('/getAllReviews', (req, res) => {
    getAllReviews((error, response) => {
        if (error) res.send(error);
        else res.send(response);
    });
});


app.get('/getReviews', (req, res) => {
    const { fromId } = req.query;
    getReviews(fromId, (error, response) => {
        if (error) res.send(error);
        else res.send(response);
    });
});
app.listen(port, function (error) {
    if (error) console.log(error);
    var host = hostname;
    console.log("http://%s:%s", host, port)

})