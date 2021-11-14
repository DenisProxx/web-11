let myName = prompt("Введите имя" , "");
alert("Привет " + myName + "!");

let years = prompt("Введите год рождения" , 0);
const year =("2021");
alert(year - years);

let length = prompt("Введите длину квадрата");
alert(length * 4);

let radius = prompt("Введите радиус окружности");
const pi =("3.1415926");
const result = Math.pow(radius, 2);
alert(pi * result);

let dist = prompt("Введите расстояние" , 0 );
let time = prompt("Введите время" , 0);
alert(dist/time + "км/ч");

let dollar = prompt("Введите сумму в долларах" , 0);
const kurs =("0.85");
alert(dollar*kurs +"евро");

let vol =prompt("Укажите объем флешки", 0);
let number =((vol*1024)/820);
alert(number);

let sum =prompt("Введите сумму денег" , 0);
let price =prompt("Введите цену шоколадки" , 0);
let number =(sum/price);
let ost =(sum-price);
alert(number);
alert(sum-number);

let rez=prompt("Введите число");
alert(rez.split("").reverse().join(""));

const number = prompt("Введите число");
number % 2 == 0 ? alert("четное число") : alert("нечетное число");




















