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

//Задание 10.3
const name = prompt("Ваше имя: ");
const year = prompt("Год вашего рождения: ");
let date= new Date();
let res = date.getFullYear();
alert(`Ваше имя ${name}, возраст: ${res - year} `);

//Задание 10.4
let username = prompt("Ваше имя: ");
let inputfBirth = prompt("Год вашего рождения: ");
let yearofBirth= +inputfBirth;
let dateNow= new Date();
let res_1 = dateNow.getFullYear();
let yourage = res_1 - yearofBirth;
let ost = yourage % 10;
if (ost === 1) {
    alert("_1год");
} else if (ost === 2 || ost === 3 || ost === 4) {
    alert("_3года");
} else if(ost === 5 || ost === 6 || ost === 7 || ost === 8 || ost ===9 ||
    ost === 0) {
    alert("_7 лет");
}
else {
    alert("Год не число или пустое имя.");
}
