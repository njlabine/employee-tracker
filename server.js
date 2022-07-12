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
    

function optionList() {
  inquirer.prompt([{
    type: 'list',
    name: 'options',
    message: 'What will you be doing next?',
    choices: optionList
  }
  ])
  .then((answer) => {
    let choice = answer.options;

    switch (choice) {
      case viewDepartment:
        query.theDepartments();
        optionList();
        break;
      case viewEmployee:
        theEmployees();
        optionList();
        break;
      case viewRole:
        query.theRoles();
        optionList();
        break;
      case viewManager:
        query.theManager();
        optionList();
        break;
      case addDepartment:
        newDepartment();
        break;
      case addEmployee:
        newEmployee();
        break;
      case addRole:
        addedRole();
        break;
      case updateEmployee:
        changeUpEmployee();
        break;
    };
  });
};

const theEmployees = () => {
    connection.query('SELECT employee.first_name, employee.last_name, role.title, role.salary, department.department_name FROM employee JOIN role on role.id = employee.role_id JOIN department on department.id = role.department_id LEFT JOIN employee e on employee.manager_id = e.id;',
        (err, res) => {
            if (err) throw (err)
            console.table(res)
            beginPrompts();
        })
};

const viewDepartments = () => {
    connection.query('SELECT * FROM department', (err, res) => {