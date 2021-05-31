// Задача 39 Удаляем зелья
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {

    const potionsIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionsIndex, 1);   
  },
};