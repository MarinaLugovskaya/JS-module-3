// Задача. Все ли пользователи активны
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.

const isEveryUserActive = (users) => {
  const userIsActive = users.every((user) => user.isActive === true);
return userIsActive;

const userIsNotActive = users.every((user) => user.isActive !== false);
return userIsNotActive;
};