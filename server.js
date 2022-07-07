const inquirer = require('inquirer');
const mysql = require('mysql2');
const query = require('./database/queries')

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'company_db'
    },
    console.log(`Connected to the Database`)
  );

const optionList = [
    'View all of the Employees',
    'View all of the Managers',
    'View all of the Departments',
    'View all of the Roles',
    'Add Role',
    'Add Employee',
    'Add Department',
    'Update Employee Role',
]

const [
    viewRole,
    viewEmployee,
    viewManager,
    viewDepartment,
    addDepartment,
    addEmployee,
    addRole,
    updateEmployee] = optionList
    

]