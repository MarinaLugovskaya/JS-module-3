// Задача. Есть ли активные пользователи
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.

const isAnyUserActive = users => {
  const userIsActive = users.some((user) => user.isActive === true);
return userIsActive;

const userIsNotActive = users.some((user) => user.isActive !== false);
return userIsNotActive;
};