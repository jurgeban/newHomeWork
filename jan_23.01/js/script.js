let goods = [
   {id: 1, title: 'Микроволновка', price: 1500, count: 4},
   {id: 2, title: 'Телевизор', price: 2500, count: 1},
   {id: 3, title: 'Тумба', price: 5500, count: 5},
   {id: 4, title: 'Холодильник', price: 200, count: 2},
   {id: 5, title: 'Стол', price: 5600, count: 5},
   {id: 6, title: 'Телефон', price: 1900, count: 12},
   {id: 7, title: 'Компьютер', price: 4200, count: 11},
   {id: 8, title: 'Мангал', price: 250, count: 7},
   {id: 9, title: 'Люстра', price: 300, count: 3},
]

// 1) - Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID
let evenId = goods.filter(el => el.id % 2 == 0);
console.log("с четным id", evenId);

// 2) - Отфильтруйте продукты с количеством менее 5 единиц
let lessThen5 = goods.filter(el => el.count < 5);
console.log("менее 5 единиц", lessThen5);

// 3) - Найдите значение элемента массива (продукта), цена которого будет кратна 5
let price_5 = goods.filter(el => el.price % 5 == 0);
console.log("цена кратна 5", price_5);

// 4) - Найдите индекс элемента, count которого будет больше 11
let index = goods.findIndex(el => el.count > 11);
console.log("индекс элемента, count которого будет больше 11 = ", index);

// 5) - Посчитайте количество элементов, count которых является нечетным числом
let oddNumber = goods.filter(el => el.count % 2 != 0).length;
console.log("количество элементов, count которых является нечетным числом = ", oddNumber);

// 6) - Посчитайте количество элементов, имя которых начинается на “Т”
let name_T_number = goods.filter(el => el.title.startsWith('Т')).length;
console.log("количество элементов, имя которых начинается на 'Т' = ", name_T_number);

// 7) - Проверьте, есть ли хотя бы один продукт с ценой выше 500.
let isPriceMore500 = goods.some(el => el.price > 500);
console.log("есть ли хотя бы один продукт с ценой выше 500", isPriceMore500)

// 8) - Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)
let disCount_35 = [];
goods.forEach(el => disCount_35.push(el.price * 0.65));
console.log("значение цен всех товаров с 35-процентной скидкой (только цены)", disCount_35)

// 9) - Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)
let clearCount = goods.map(el => {
    return { ...el, count: 0 };
});
console.log("count на значение 0", clearCount)

// 10) - Отсортируйте продукты по возрастанию цены
goods.sort((a, b) => a.price - b.price);
console.log("Отсортируйте продукты по возрастанию цены", goods);

// 11) - Отсортируйте массив по сво-ву title
goods.sort(el => el.title);
console.log("Отсортируйте массив по сво-ву title", goods);

