import './input.css'



let sum = 10 + 5;
console.log(`Сумма num и 5 равна ${sum}`);

const greeting = 'Привет, мир!';
const age = 20;
console.log(`Сообщение: ${greeting}, Возраст: ${age}`);

var isAdult = false;

if (age > 18) {
  isAdult = true;
  console.log('Вы совершеннолетний');
  console.log(isAdult);
}
else if (age === 18) {
  isAdult = true;
  console.log('Вы достигли совершеннолетия');
  console.log(isAdult);
}
else {  
  isAdult = false;
  console.log('Вы несовершеннолетний');
  console.log(isAdult);
}


var day = 'Вторник'; // Пример дня недели
let value =
  day === 'Вторник' ? 50 : 1 // Во вторник значение 50, в другие дни 1
console.log(value)

const processTuesday = () => {
  // …Полезный код
}

if (day === 'Вторник') {
  processTuesday()
}


// const plusBtn = document.getElementById('plus-btn');
// let num = 0;
// checkNumber(num);
// plusBtn.addEventListener('click', function () {
//     num += 1;
//     console.log(`Текущее значение num: ${num}`);
//     checkNumber(num);
// })

function checkNumber(num) {
    switch (num) {
    case 0:
        console.log('Число равно нулю');
        break;
    case 1:
        console.log('Число равно единице');
        break;
    default:
        console.log('Число не равно ни нулю, ни единице');
    }
}




