-- 1) Вывести данные о товарах (проекция: 
   -- название товара, 
   -- цена, 
   -- название категории, 
   -- название компании поставщика)
SELECT Products.ProductName,
       Products.Price,
       Products.CategoryID,
       Suppliers.SupplierName
FROM Products
JOIN Suppliers ON Suppliers.SupplierID = Products.SupplierID;

-- 2) Вывести список стран, которые поставляют морепродукты
SELECT Suppliers.Country,
FROM Suppliers
JOIN Products ON Products.SupplierID = Suppliers.SupplierID
JOIN Categories ON Products.CategoryID = Categories.CategoryID
WHERE Categories.CategoryName = 'Seafood';

-- 3) Вывести два самых дорогих товара из категории Beverages из USA
SELECT * 
FROM Products
JOIN Suppliers ON Suppliers.SupplierID = Products.SupplierID
JOIN Categories ON Categories.CategoryID = Products.CategoryID
WHERE Categories.CategoryName = 'Beverages'
AND Suppliers.Country = 'USA'
ORDER BY Price DESC LIMIT 2;

-- 4) Вывести название и стоимость в USD одного самого дорогого 
   -- проданного товара
SELECT Products.ProductName,
       Products.Price * 1.1 AS Price_usd
FROM Products
JOIN OrderDetails ON OrderDetails.ProductID = Products.ProductID
JOIN Orders ON Orders.OrderID = OrderDetails.OrderID
WHERE Orders.OrderDate Like '%-%'
ORDER BY Products.Price DESC LIMIT 1;

--5) Дайте короткий ответ на вопрос: в чем отличие БД от СУБД

-- БД - это база данных. СУБД - это программа, с помощью которой мы эту БД обробатываем. 