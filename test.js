// 1) 2 A
// function getSum(values) {
//     var sum = 0;
//     for (var i = 0; i < values.length; i++) {
//         sum += values[i];
//     }
//     return sum;
// }
// function getAverage(values) {
//     return getSum(values) / values.length;
// }
// result = getAverage([1, 2, 3]); 
// // 2) 20 A
// var string = '0123456789';
// var newString = '';
// for (var i = 0; i < string.length; i++) {
//     var char = string.charAt(i);
//     newString += char + char;
// }
// var result = newString.length;

// // 3)Snowball A
// var animal = {
//     name: 'Snuffles',
//     type: 'DOG'
// };
// function rename(input, newName) {
//     input.name = newName;
// }
// rename(animal, 'Snowball');
// var result = animal.name;

// // 4) full A
// function getResult(arr) {
//     if (arr.length) {
//         return 'full';
//     } else {
//         return 'empty';
//     }
// }
// var result = getResult([1, 2, 3]);

// // 5) Ace of Hearts A
// var nonNumericCards = {
//     1: 'Ace',
//     11: 'Jack',
//     12: 'Queen',
//     13: 'King'
// };
// var suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
// var pack = [];
// for (var suitIndex = 0; suitIndex < suits.length; suitIndex++) {
//     var suit = suits[suitIndex];
//     for (var number = 1; number < 14; number++) {
//         var value = nonNumericCards[number] || number;
//         pack.push(value + ' of ' + suit);
//     }
// }
// var result = pack[0];

// // 6) :) A
// function getEmotion(happinessLevel) {
//     var emotion;
//     if (happinessLevel < 5) {
//         emotion = ':(';
//     } else if (happinessLevel === 5) {
//         emotion = ':|';
//     } else {
//         emotion = ':)';
//     }
//     return emotion;
// }
// var result = getEmotion(7);

// // 7) true A
// function withinRange(value, start, end) {
//     var beforeStart = value < start;
//     var afterEnd = value > end;
//     return !beforeStart && !afterEnd;
// }
// var result = withinRange(10, 4, 20);

// // 8) false A
// var you = {
//     happy: true,
//     knowsIt: false
// };
// function shouldClapHands(person) {
//     if (!(person.happy && person.knowsIt)) {
//         return false;
//     }
//     return true;
// }
// var result = shouldClapHands(you);

// // 9) A
// function getSquare(value) {
//     return value * value;
// }
// var result = getSquare(3);

// // 10)3 A
// var itemsForSale = {
//     cheese: {
//         price: {
//             normal: 3,
//             reduced: 1.5
//         }
//     },
//     tv: {
//         price: {
//             normal: 300,
//             reduced: 150
//         }
//     }
// };
// function getNormalPrice(item) {
//     return itemsForSale[item].price.normal;
// }
// var result = getNormalPrice('cheese');

// // 11) 4 A
// var vowels = ['a', 'e', 'i', 'o', 'u'];
// function countVowels(inputString) {
//     var count = 0;
//     for (var i = 0; i < inputString.length; i += 1) {
//         var character = inputString.charAt(i);
//         if (vowels.indexOf(character) !== -1) {
//             count += 1;
//         }
//     }
//     return count;
// }
// var result = countVowels('boolean');

// // 12) true A
// var person1 = {
//     name: 'Bob',
//     dateOfBirth: '1973-01-03'
// };
// var person2 = {
//     name: 'Bob',
//     dateOfBirth: '1982-01-03'
// };
// function sameDateAndMonth(date1, date2) {
//     var sameMonth = date1.getMonth() == date2.getMonth();
//     var sameDate = date1.getDate() == date2.getDate();
//     return sameMonth && sameDate;
// }
// function haveSameBirthday(person1, person2) {
//     var date1 = new Date(person1.dateOfBirth);
//     var date2 = new Date(person2.dateOfBirth);
//     return sameDateAndMonth(date1, date2);
// }
// var result = haveSameBirthday(person1, person2);

// // 13) 19:30 A
// function add12Hours(time) {
//     var hourMinute = time.split(':');
//     return 12 + parseFloat(hourMinute[0]) + ':' + hourMinute[1];
// }
// function to24HourTime(time) {
//     var parts = time.split(' ');
//     if (parts[1] === 'AM') {
//         return parts[0];
//     }
//     return add12Hours(parts[0]);
// }
// var result = to24HourTime('7:30 PM');

// // 14) 20 WW
// var score = 10;
// function doubleScore() {
//     score = score * 2;
// }
// doubleScore();
// var result = score;

// // 15) 5
// function getVectorMagnitude(x, y) {
//     // Magnitude of a vector is defined by
//     // M^2 = x^2 + y^2
//     var magnitudeSquared = x * x + y * y;
//     return Math.sqrt(magnitudeSquared);
// }
// var result = getVectorMagnitude(3, 4);

// // 16) true
// var result = (true && true) || (true && false);

// 17) 12
// var employees = 10;
// var employeeTurnover = 0.9;
// var applications = 3;
// var result = applications + (employees * employeeTurnover);

// // 18) 20
// function getResult(value) {
//     if (value > 4) {
//         return 10;
//     } else {
//         return 20;
//     }
// }
// var result = getResult(3);

// // 19)one or more
// function getResult(bool1, bool2) {
//     return bool1 || bool2 ? 'one or more' : 'neither';
// }
// var result = getResult(true, false);

// // 20)other
// function getResult(value) {
//     return typeof value === 'number' ? 'numeric' : 'other';
// }
// var result = getResult('10');

// // 21) no WW
// function containsCarbon(compound) {
//     if (compound.indexOf('C') === -1) {
//         return 'no';
//     } else {
//         return 'yes';
//     }
// }

// var result = containsCarbon('H2O');

// // 22) no WW
// function isMeaningOfLife(num) {
//     if (num === 42) {
//         return 'yes';
//     } else {
//         return 'no';
//     }
// }
// var result = isMeaningOfLife(41);

// // 23) c WW
// var letters = 'abcdefghijklmnopqrstuvwxyz';
// var lettersArray = letters.split(''); // ['a', 'b', ..]
// function letterForNumber(input) {
//     if (input < 1 || input > 26) {
//         return '-';
//     }
//     return lettersArray[input - 1];
// }
// var result = letterForNumber(3);

// // 24) 10 A
// function processArray(values) {
//     var sum = 0;
//     for (var i = 0; i < values.length; i++) {
//         sum += values[i];
//     }
//     return sum;
// }
// var result = processArray([1, 2, 3, 4]);

// // 25) not ten A
// function getResult(value) {
//     return value === 10 ? 'ten' : 'not ten';
// }
// var result = getResult(9);


console.log(result);
