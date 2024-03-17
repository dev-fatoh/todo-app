CREATE TABLE prod_tbl (
    prod_id INT PRIMARY KEY,
    prod_name VARCHAR(255),
    unit_price DECIMAL(10, 2)
);

INSERT INTO prod_tbl (prod_id, prod_name, unit_price)
VALUES
    (1, 'Laptop', 800.00),
    (2, 'Phone', 400.00),
    (3, 'Tablet', 300.00),
    (4, 'Headphones', 50.00),
    (5, 'Mouse', 15.00),
    (6, 'Keyboard', 30.00);
