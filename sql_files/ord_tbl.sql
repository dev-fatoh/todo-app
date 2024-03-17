CREATE TABLE ord_tbl (
  ord_id INT PRIMARY KEY,
  cust_id INT,
  ord_date DATE,
  ttl_amt DECIMAL(10,2),
  FOREIGN KEY(cust_id) REFERENCES cust_tbl(cust_id)
);

INSERT INTO ord_tbl (
  ord_id,cust_id,ord_date,ttl_amt
) VALUES 
    (101,1,'2022-04-01',100.00),
    (102,2,'2022-04-05',75.50),
    (103,1,'2022-04-10',45.25),
    (104,3,'2022-05-02',150.75),
    (105,2,'2022-05-05',65.00),
    (106,4,'2022-05-10',200.50);
