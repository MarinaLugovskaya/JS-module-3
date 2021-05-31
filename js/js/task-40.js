// Задача 40 Обновляем зелье
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions. -->

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {

 let indexOffOldName = this.potions.indexOf(oldName);
    this.potions.splice(indexOffOldName, 1, newName);

  },
};