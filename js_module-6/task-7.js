// Задача. Фильтрация массива чисел
// 3амени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
}