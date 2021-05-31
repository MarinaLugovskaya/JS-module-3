function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function (price) {
return this.price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
}