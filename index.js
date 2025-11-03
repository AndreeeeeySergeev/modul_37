//Задание 10.1
let ask = prompt("Введите число: ");
+ask;
alert(`Ваше число: ${ask};\n Квадрат вашего числа ${ask ** 2};\n
       Куб вашего числа ${ask ** 3} `);

//Задание 10.2
let promocode = prompt("Введите ваш промокод: ");

if (promocode != null && promocode.toLowerCase()==="скидка") {
    alert("Промокдо применён");
}
else {
    alert('Промокод не работает');
}
