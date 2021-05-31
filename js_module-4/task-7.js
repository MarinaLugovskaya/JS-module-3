const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${++position}-й в очереди.`;
}

const messages = [];
for (let key = 0; key < Object.keys(orders).length; key +=1) {
messages.push(composeMessage.call(orders[key], key));
} 