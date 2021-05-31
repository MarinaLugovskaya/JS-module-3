// Задача. Неактивные пользователи
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

const getInactiveUsers = (users) => {
  const friendsIsNotActive = users.filter((user) => user.isActive === false);
  return friendsIsNotActive;
};