INSERT INTO departments (name)
VALUES 
('HR'),
('Legal'),
('Developer'),
('Receiving');

INSERT INTO roles (job_title, salary, department_id)
VALUES
('President of HR', 75000, 1),
('Vice president of HR', 50000, 1),
('Lead Lawyer', 150000, 2)
('Paralegal', 45000, 2),
('Senior Developer', 120000, 3),
('Junior Developer', 85000, 3),
('Logistacis Leader', 73000, 4),
('Deliver Person', 41000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES
('John', 'Smith', 1, 1, true),
('Alex', 'Mason', 1, 1, false),
('Fred', 'Jackson', 2, 3, true),
('Frank', 'Tucker', 2, 3, false),
('Otto', 'Bigsby', 3, 6, true),
('Jack', 'Taylor', 3, 6, false),
('Suzie', 'Yatta', 4, 6, true),
('Jimmy', 'Burke', 4, 6, false),
('Nate', 'LaBine', 5, 10, true),
('John', 'Smith', 4, 10, false);


