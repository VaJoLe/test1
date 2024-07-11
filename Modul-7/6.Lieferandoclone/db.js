let salatMenu = [
    {
        "menu": "Caesar Salat",
        "topping": "mit Hähnchenbruststreifen, originalem Grana Padano, Croutons und Petersilie",
        "price": "8",

    },
    {
        "menu": "Griechischer Salat",
        "topping": "wahlweise mit Gyros oder Hähnchenkebab, Kirschtomate, Gurke, Paprika, Peperoni mild, Hirtenkäse, Zwiebeln und Petersilie",
        "price": "9.50",

    },
    {
        "menu": "Chefsalat",
        "topping": "mit Kirschtomate, Gurke, Mais, Paprika, Hinterkochschinken, Ei, echtem Gouda und Petersilie",
        "price": "8.50",

    },
]
let pizzaMenu = [
    {
        "menu": "Pizza Margherita",
        "topping": "mit echtem Gouda",
        "price": "10",

    },
    {
        "menu": "Pizza Palermo",
        "topping": "mit extra viel Salami und reichlich echtem Gouda",
        "price": "12.50",

    },
    {
        "menu": "Pizza Saloniki",
        "topping": "mit Gyros oder Hähnchenkebab, Hirtenkäse, Peperoni mild, Tzatziki und echtem Gouda",
        "price": "14.50",

    },
    {
        "menu": "Pizza Hawaii",
        "topping": "mit Hinterkochschinken, Ananas und echtem Gouda",
        "price": "12",

    },
]
let burgerMenu = [
    {
        "menu": "Chilli Burger",
        "topping": "wahlweise rustikales Brötchen oder Sesambrötchen mit 140g feinstem Rindfleisch, Chili-Cheese-Sauce, Jalapenos, Cheddar-Käse, Röstzwiebeln und frischem Salat",
        "price": "11.99",

    },
    {
        "menu": "Crispy Chicken Burger",
        "topping": "wahlweise rustikales Brötchen oder Sesambrötchen, CrispyChicken-Patty (pikant), Currysauce, Röstzwiebeln, Gewürzgurken, frischem Salat und Burgersauce",
        "price": "10.99",

    },
    {
        "menu": "Cheeseburger",
        "topping": "wahlweise rustikales Brötchen oder Sesambrötchen, 140g feinstes Rindfleisch, Barbecue-Soße, Gewürzgurke, Tomate, Salat, Burgersoße sowie Cheddar oder Gouda",
        "price": "12.99",

    },
    {
        "menu": "Bacon Burger",
        "topping": "wahlweise rustikales Brötchen oder Sesambrötchen mit 140g feinstem Rindfleisch, karamellisierten Zwiebeln, Baconstreifen, rote Zwiebel, frischem Salat, Tomate und Burgersauce",
        "price": "12.99",

    },
]
let sandwichMenu = [
    {
        "menu": "Schinken Sandwich",
        "topping": "mit Schinken, grünem Salat, Gurken, frischen Tomaten und Remoulade",
        "price": "6",

    },
    {
        "menu": "Hähnchen Sandwich",
        "topping": "mit Hähnchenbrust, grünem Salat, Gurken, frischen Tomaten und Remoulade",
        "price": "8.50",

    },
    {
        "menu": "Bollywood Sandwich",
        "topping": "mit Salami, Ei, Schinken, Zwiebeln, grünem Salat, Gurken, frischen Tomaten und Remoulade",
        "price": "9.50",

    },
]

function generateSalat(salat) {
    return /*html*/`
    <div class="menuBox">
        <div class="headline">
            <h2>${salat['menu']}</h2>
            <button onclick="addToBasket('${salat['menu']}', ${salat['price']})">
                <img src="img/plus.png" alt="plus">
            </button>
        </div>   
        <div>
            ${salat['topping']}
        </div>
        <div>
            <h3>${salat['price']} €</h3>
        </div> 
    </div>
    `
}

function generatePizza(pizza) {
    return /*html*/`
    <div class="menuBox">
        <div class="headline">
            <h2>${pizza['menu']}</h2>
            <button onclick="addToBasket('${pizza['menu']}', ${pizza['price']})">
                <img src="img/plus.png" alt="plus">
            </button>
        </div>   
        <div>
            ${pizza['topping']}
        </div>
        <div>
            <h3>${pizza['price']} €</h3>
        </div>
    </div>
   `
}

function generateBurger(burger) {
    return /*html*/`
    <div class="menuBox">
        <div class="headline">
            <h2>${burger['menu']}</h2>
            <button onclick="addToBasket('${burger['menu']}', ${burger['price']})">
                <img src="img/plus.png" alt="plus">
            </button>
        </div>   
        <div>
            ${burger['topping']}
        </div>
        <div>
            <h3>${burger['price']} €</h3>
        </div>
    </div> 
        `
}

function generateSandwich(sandwich) {
    return /*html*/`
    <div class="menuBox">
        <div class="headline">
            <h2>${sandwich['menu']}</h2>
            <button onclick="addToBasket('${sandwich['menu']}', ${sandwich['price']})">
                <img src="img/plus.png" alt="plus">
            </button>
        </div>   
        <div>
            ${sandwich['topping']}
        </div>
        <div>
            <h3>${sandwich['price']} €</h3>
        </div> 
    </div>
    `
}

function generateShowBasket(food, price, amount, i) {
    return  /*html*/`
        <div class="basketItems">
            <div class="basketName">
                <h3>${food}</h3>
                <h3>${priceAmount(price, amount, i).toFixed(2)} €</h3>
            </div>
            <div class="amounts">
                <button class="basketButton" onclick="removeAmount(${i})">
                    <img src="img/minus.png" alt="minus">
                </button>
                <span>${amount}</span>
                <button class="basketButton" onclick="addToBasket('${food}', ${price})">
                    <img src="img/plus.png" alt="plus">
                </button>            
            </div>
        </div>
    `
}

function generateBasketPrice(){
    return /*html*/`
    <div class="spaceBetween">
        <div>
            Zwischensumme:
        </div>
        <div>
            ${update().toFixed(2)} €
        </div>
    </div>
    <div class="spaceBetween">
        ${shippingCosts()}
    </div>
    <div class="spaceBetween">
        <div>
            Gesamtkosten: 
        </div>
        <div>
            ${showSum().toFixed(2)} €
        </div>
    </div>
`
}
