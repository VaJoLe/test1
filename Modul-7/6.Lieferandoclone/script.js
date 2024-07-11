let foods = [];
let prices = [];
let amounts = [];

load();

//header
function toggleMenu() {
  let container = document.querySelector(".burgermenu");

  container.classList.toggle("change");
}

// main
function getLikeHeart() {
  const heartImg = document.getElementById("heartImg");
  const heart = "img/heart1.png";
  const redHeart = "img/redHeart.png";

  if (heartImg.src.includes(heart)) {
    heartImg.src = redHeart;
  } else {
    heartImg.src = heart;
  }
}

function render() {
  renderSalat();
  renderPizza();
  renderBurger();
  renderSandwich();
  showBasket();
  renderBasketPrice();
  update();
  save();
  renderMobilBasket();
}

function renderSalat() {
  let menuSalat = document.getElementById("menuSalat");
  menuSalat.innerHTML = "";

  menuSalat.innerHTML = /*html*/ `
        <img class="menuImg" src="img/salat.jpg" alt="salat" id="salat">
        <div class="menuInfo">Salate</div>
    `;

  for (let i = 0; i < salatMenu.length; i++) {
    const salat = salatMenu[i];

    menuSalat.innerHTML += generateSalat(salat);
  }
}

function renderPizza() {
  let menuPizza = document.getElementById("menuPizza");
  menuPizza.innerHTML = "";

  menuPizza.innerHTML = /*html*/ `
        <img class="menuImg" src="img/pizza.jpg" alt="pizza" id="pizza">
        <div class="menuInfo">Pizza</div>
    `;

  for (let i = 0; i < pizzaMenu.length; i++) {
    const pizza = pizzaMenu[i];

    menuPizza.innerHTML += generatePizza(pizza);
  }
}

function renderBurger() {
  let menuBurger = document.getElementById("menuBurger");
  menuBurger.innerHTML = "";

  menuBurger.innerHTML = /*html*/ `
        <img class="menuImg" src="img/burger.jpg" alt="burger" id="burger">
        <div class="menuInfo">Burger</div>
    `;

  for (let i = 0; i < burgerMenu.length; i++) {
    const burger = burgerMenu[i];

    menuBurger.innerHTML += generateBurger(burger);
  }
}

function renderSandwich() {
  let menuSandwich = document.getElementById("menuSandwich");
  menuSandwich.innerHTML = "";

  menuSandwich.innerHTML = /*html*/ `
        <img class="menuImg" src="img/sandwich.jpg" alt="sandwich" id="sandwich">
        <div class="menuInfo">Sandwiches</div>
    `;

  for (let i = 0; i < sandwichMenu.length; i++) {
    const sandwich = sandwichMenu[i];

    menuSandwich.innerHTML += generateSandwich(sandwich);
  }
}

//basket

function addToBasket(food, price) {
  let index = getMenuIndex(food);
  if (index == -1) {
    foods.push(food);
    prices.push(price);
    amounts.push(1);
  } else {
    amounts[index]++;
  }

  render();
}

function getMenuIndex(food) {
  let index = foods.indexOf(food);
  return index;
}

function showBasket() {
  let basket = document.getElementById("order");
  basket.innerHTML = "";

  for (let i = 0; i < foods.length; i++) {
    const food = foods[i];
    const amount = amounts[i];
    const price = prices[i];

    basket.innerHTML += generateShowBasket(food, price, amount, i);
  }
}

function removeAmount(i) {
  if (amounts[i] > 1) {
    amounts[i]--;
  } else {
    amounts.splice(i, 1);
    foods.splice(i, 1);
    prices.splice(i, 1);
  }
  render();
}

function priceAmount(price, amount, i) {
  if (amounts[i] > 1) {
    price = price * amount;
  }
  return price;
}

function update() {
  // zwischensumme
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i] * amounts[i];
  }

  return sum;
}

function showSum() {
  //gesamtpreis
  let fullSum = 0;

  for (let i = 0; i < prices.length; i++) {
    if (update() > 50) {
      fullSum = update();
    } else {
      fullSum = update() + 5;
    }
  }

  return fullSum;
}

function shippingCosts() {
  let shippingCosts;
  if (update() > 50) {
    shippingCosts = /*html*/ `
        <div>
            Lieferkosten:
        </div>
        <div>
            0 €
        </div>
    `;
  } else {
    shippingCosts = /*html*/ `
        <div>
            Lieferkosten:
        </div>
        <div>
            5.00 €
        </div>        
        `;
  }

  return shippingCosts;
}

function renderBasketPrice() {
  let basketPrice = document.getElementById("sum");

  basketPrice.innerHTML = generateBasketPrice();
}

function ordert() {
  if (foods.length) {
    alert("Danke für ihre Testbestellung!");
    foods = [];
    prices = [];
    amounts = [];
  } else {
    alert("Bitte Warenkorb füllen");
  }
  render();
}

function openMobileBasket() {
  let main = document.querySelector("section");
  let mobileBasket = document.querySelector("aside");
  let x = document.getElementById("x");

  main.classList.add("d-none");
  mobileBasket.classList.remove("d-none");
  mobileBasket.classList.add("fullScreen");
  x.classList.remove("d-none");
}

function closeMobileBasket() {
  let main = document.querySelector("section");
  let mobileBasket = document.querySelector("aside");
  let x = document.getElementById("x");

  main.classList.remove("d-none");
  mobileBasket.classList.add("d-none");
  mobileBasket.classList.remove("fullScreen");
  x.classList.add("d-none");
}

function renderMobilBasket() {
  let mobileBasket = document.getElementById("mobileBasket");

  mobileBasket.innerHTML = /*html*/ `
        <button onclick="openMobileBasket()">Warenkorb (${foods.length})
        </button>
    `;
}

function save() {
  let foodsAsText = JSON.stringify(foods);
  localStorage.setItem("foods", foodsAsText);

  let pricesAsText = JSON.stringify(prices);
  localStorage.setItem("prices", pricesAsText);

  let amountsAsText = JSON.stringify(amounts);
  localStorage.setItem("amounts", amountsAsText);
}

function load() {
  let foodsAsText = localStorage.getItem("foods");
  let pricesAsText = localStorage.getItem("prices");
  let amountsAsText = localStorage.getItem("amounts");

  if (foodsAsText && pricesAsText && amountsAsText) {
    foods = JSON.parse(foodsAsText);
    prices = JSON.parse(pricesAsText);
    amounts = JSON.parse(amountsAsText);
  }
}
