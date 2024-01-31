-- (1) Вывести сред/стоимость товаров из категорий 1, 2, 5, 
-- у которых название начинается с буквы t
SELECT AVG(Price) AS avg_price 
FROM Products
WHERE CategoryID IN (1, 2, 5)
AND ProductName Like 't%';

--(2) Посчитать стоимость заказа 10248
SELECT Products.Price 
FROM Products
JOIN OrderDetails ON OrderDetails.ProductID = Products.ProductID
JOIN Orders ON Orders.OrderID = OrderDetails.OrderID
WHERE Orders.OrderID = 10248;

--(3) Вывести ко-во товаров с ценой от 10 до 250 EUR
SELECT COUNT(Price) AS total_products
FROM Products
WHERE Price BETWEEN 10 AND 250;

--(4) Вывести сумму, на которую было отправлено товаров клиентам в Germany
SELECT SUM(Products.Price) AS Sum_of_german_customers
FROM Products
JOIN OrderDetails ON OrderDetails.ProductID = Products.ProductID
JOIN Orders ON Orders.OrderID = OrderDetails.OrderID
JOIN Customers ON Customers.CustomerID = Orders.CustomerID
WHERE Customers.Country = 'Germany';

--(5) С помощью инструмента онлайн-проектирования опишите схему БД "чат поддержки"
--  (базовые сущности и характеристики)
https://dbdocs.io/voitenko.jurgen/Chat_Support

