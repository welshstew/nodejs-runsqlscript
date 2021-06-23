CREATE TABLE IF NOT EXISTS employees (
   employee_id   NUMERIC       NOT NULL,
   first_name    VARCHAR(1000) NOT NULL,
   last_name     VARCHAR(1000) NOT NULL,
   date_of_birth DATE                  ,
   phone_number  VARCHAR(1000) NOT NULL,
   junk          CHAR(1000)            ,
   CONSTRAINT employees_pk PRIMARY KEY (employee_id)
);

INSERT INTO employees(employee_id,first_name, last_name, date_of_birth,phone_number,junk) VALUES (111111, 'Test', 'User', '2000-01-01', '123456789', 'junk');