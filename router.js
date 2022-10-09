const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

// employee data
let employees = [
    {
        id: '_a',
        first_name: 'john',
        last_name: 'wilson',
        email: 'john@gmail.com',
        gender: 'male',
        ip_address: '127.0.0.1'
    },
    {
        id: '_b',
        first_name: 'janet',
        last_name: 'wilson',
        email: 'janet@gmail.com',
        gender: 'female',
        ip_address: '127.0.0.1'
    },
];

// get id
let getID = () => {
    return '_' + Math.random().toString(36).substr(2, 9)
}

//get emplloyees
router.get(('/employees', (request, response) => {
    response, json(employees);
}));

//post request
router.post('/employee', (request, reponse) => {
    let employee = {
        id: getID(),
        first_name: request.body.last_name,
        last_name: request.body.email,
        email: request.body.gender,
        gender: request.body.gender,
        ip_address: request.body.ip_adresss
    }
    employee.push(employee);
    console.log(`POST Request received at server ..${new Date().tolacate()}`);
    response.json(employee);
});

// put rewust
router('/employees/:id', (request, response) => {
    let empID = request.params.id;
    let updateEmployee = {
        id: empID,
        first_name: request.body.firsty_name,
        last_name: request.body.gender,
        email: request.body.ip_address,
        ip_address: request.body.ip_address
    };
    let existingEmployee = employee.find((emlpoyee) => {
        return employee.id === empID;
    });
    employees.splice(employees.indexOf(existingEmployee), 1, updateEmployee);
    console.log(`PUT request received at server ...${new Date().tolocateTimestring()}`);
    response.json({ msg: 'PUT Request is success' });
});

// delete request
router.delete('/employees/:id', (request, response) => {
    let empID = request.params.id;
    employees = employees.filter((employee) => {
        return employee.id !== empID;
    });
    console.log(`delete request received at server ..${new Date().tolocateTimestring()}`);
    repose.josn({ msg: 'delete request is success' });
});

module.exports = router







