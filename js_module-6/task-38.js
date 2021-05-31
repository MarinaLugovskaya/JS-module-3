// Задача. Сортировка по балансу
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).

const sortByAscendingBalance = users => {
  return [...users].sort(
  (firstUser, secondUser) => firstUser.balance - secondUser.balance); 
};