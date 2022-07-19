const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require("express");

const app = express();

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "company_db",
  },
  console.log(`Connected to the Database`)
);

// const optionList = [
//   "View all of the Employees",
//   "View all of the Managers",
//   "View all of the Departments",
//   "View all of the Roles",
//   "Add Role",
//   "Add Employee",
//   "Add Department",
//   "Update Employee Role",
// ];

// const [
//   viewRole,
//   viewEmployee,
//   viewManager,
//   viewDepartment,
//   addDepartment,
//   addEmployee,
//   addRole,
//   updateEmployee,
// ] = optionList;

function optionList() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "What will you be doing next?",
        choices: optionList,
      },
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
          addNewDepartment();
          break;
        case addEmployee:
          addNewEmployee();
          break;
        case addRole:
          addNewRole();
          break;
        case updateEmployee:
          changeUpEmployee();
          break;
      }
    });
}

const theEmployees = () => {
  const theSqlCommand = `SELECT * FROM employee`;
  db.query(theSqlCommand, (err, res) => {
    if (err) throw err;
    console.table(res);
    beginPrompts();
  });
};

const viewDepartment = () => {
  const theSqlCommand = `SELECT * FROM departments`;
  db.query(theSqlCommand, (err, res) => {
    if (err) throw err;
    console.table(res);
    beginPrompts();
  });
};

const viewRole = () => {
  const theSqlCommand = `SELCET * FROM role`;
  db.query(theSqlCommand, (err, res) => {
    if (err) throw err;
    console.table(res);
    beginPrompts();
  });
};

const addNewEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Enter the first name",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter the last name",
      },
      {
        type: "input",
        name: "roleid",
        message: "Enter the roleid",
      },
      {
        type: "input",
        name: "managerid",
        message: "Enter if managerid",
      },
    ])
    .then((data) => {
      db.query(`INSERT INTO employee(first_name, last_name, rold_id, manager_id)
              VALUES('${data.firstName}', '${data.lastName}', ${data.roleid}, ${data.managerid})`);

      db.query(`SELECT * FROM employee`, (err, res) => {
        if (err) {
          console.log(err);
          return "error";
        }
        console.table(res);
      });

      beginPrompts();
    });
};

const addNewDepartment = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "departmentName",
        message: "Enter the new department name",
      },
    ])
    .then((data) => {
      db.query(`INSERT INTO departments(department_name)
              VALUES('${data.departmentName}')`);

      db.query(`SELECT * FROM departments`, (err, res) => {
        if (err) {
          console.log(err);
          return "There was an error.";
        }
        console.table(res);
      });

      beginPrompts();
    });
};

const addNewRole = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter role name",
      },
      {
        type: "input",
        name: "roleSalary",
        message: "Enter role salary",
      },
      {
        type: "input",
        name: "departmentid",
        message: "Enter department id",
      },
    ])
    .then((data) => {
      db.query(`INSERT INTO roles(title, salary, department_id)
              VALUES('${data.title}', '${data.roleSalary}', '${data.departmentid}')`);

      db.query(`SELECT * FROM roles`, (err, res) => {
        if (err) {
          console.log(err);
          return "There was an error.";
        }
        console.table(res);
      });

      beginPrompts();
    });
};

beginPrompts();
