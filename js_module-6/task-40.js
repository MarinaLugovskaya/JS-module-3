// Задача. Сортировка по имени
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

const sortByName = users => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name)); 
};