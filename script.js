// Функція для додавання товару до кошика
function addToCart() {
  const quantity = document.querySelector("#quantity").value;
  alert(`Товар додано до кошика. Кількість: ${quantity}`);
}

// Функція для купівлі товару
function buyNow() {
  const quantity = document.querySelector("#quantity").value;
  alert(`Куплено ${quantity} шт. товару`);
}
