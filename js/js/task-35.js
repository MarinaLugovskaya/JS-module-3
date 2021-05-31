// Задача 35 Доступ к свойствам объекта в его методах
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {

	let indexOffOldBook = this.books.indexOf(oldName);
    this.books.splice(indexOffOldBook, 1, newName);

  },
};