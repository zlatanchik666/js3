'use strict'

// |||------3 ПРАКТИКА------|||


// ---1 ЗАДАНИЕ---

// let coast = prompt('Введите стоимость товара', 0);
// let money = prompt('Введите количество своих money$$$', 0);
// if(coast==money){
//     alert(`Покупка совершена успешно`);
// }else if(coast>money){
//     let ostatok = coast-money; 
//     let isTrue= confirm(`Вам не хватает ${ostatok} рублей`);
// }else{
//     let sdacha = money-coast;
//     let isTrue= confirm(`Покупка совершена, Ваша сдача равна ${sdacha} рублей`);
// };


// ---2 ЗАДАНИЕ---

// let num = prompt('Введите любое число');
// if(num==0){
//     alert(`0`);

// }else if(num>0){
//     alert(`1`);
// }else{
//     alert(`-1`);
// }


// ---3 ЗАДАНИЕ---

// исходник

// let result; 
//  if (a + b < 4) { 
//    result = 'Мало'; 
//  } else { 
//    result = 'Много';  
// }

 //  исправленное

//  let num1 = Number(prompt('Введите число a', 0));    
//  let num2 = Number(prompt('Введите число b', 0)); 
//  let num3 = 4; 
//  let message = (num1 + num2 < num3)  ? 'Мало' : 'Много' ;    
//  alert(message);


// ---4 ЗАДАНИЕ---

// исходник


// let message;
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// }
// else {
//   message = ''Пусто”;
// }


 //  исправленное

//  let login = prompt('введите логин'); 
//  let message = (login == 'Сотрудник') ? 'Привет!' :
// (login == 'сотрудник') ? 'Привет!' :
// (login == 'Директор') ? 'Здравствуйте!' :
// (login == 'директор') ? 'Здравствуйте!' :
// (login == '') ? 'Нет логина!' : 'Пусто!'; 
//  alert(message);


