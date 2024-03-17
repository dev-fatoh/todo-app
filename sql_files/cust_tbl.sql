CREATE TABLE cust_tbl (
  cust_id INT PRIMARY KEY,
  cust_name VARCHAR(255),
  email VARCHAR(255),
  join_date DATE
);

INSERT INTO cust_tbl (cust_id,cust_name,email,join_date) VALUES
        (1,'Kim','kim@gmail.com','2022-02-20'),
        (2,'Sam','sam@gmail.com','2022-01-15'),
        (3,'Kane','kane@gmail.com','2022-03-25'),
        (4,'Dave','dav@gmail.com','2022-04-10');
