async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

// burgerbutton 

function toggleMenu() {
    var menuLinks = document.getElementById("menulinks");
    var container = document.querySelector(".burgermenu");

    menuLinks.style.display =
      menuLinks.style.display === "flex" ? "none" : "flex";
    container.classList.toggle("change");
  }

  //Rezept Jan 
  function calculateIngredients() {
    let portions = +document.getElementById('input-field').value;
    let zwiebel = 0.25;
    let knoblauch = 0.25;
    let möhre = 0.25;
    let rinderhackfleisch = 125;
    let gemüsebrühe = 50;
    let tomatenmark = 17.5;
    let oregano = 0.25;
    let tomaten = 100;
    let ketchup = 0.5;
    let spaghetti = 125;

    if (portions < 1) {
        alert('Rezept für mindestens eine Person')
    }

    else if (portions > 10) {
        alert('Rezept für maximal 10 Personen')
    }

    else {
        document.getElementById('incredient1').innerHTML = `${portions * zwiebel}`;
        document.getElementById('incredient2').innerHTML = `${portions * knoblauch}`;
        document.getElementById('incredient3').innerHTML = `${portions * möhre}`;
        document.getElementById('incredient4').innerHTML = `${portions * rinderhackfleisch}`;
        document.getElementById('incredient5').innerHTML = `${portions * gemüsebrühe}`;
        document.getElementById('incredient6').innerHTML = `${portions * tomatenmark}`;
        document.getElementById('incredient7').innerHTML = `${portions * oregano}`;
        document.getElementById('incredient8').innerHTML = `${portions * tomaten}`;
        document.getElementById('incredient9').innerHTML = `${portions * ketchup}`;
        document.getElementById('incredient10').innerHTML = `${portions * spaghetti}`;
    }
}
  //Rezept Andreas
  function calculateIngredients1() {
    let portions = +document.getElementById('input-field').value;
    let hackfleisch = 125;
    let tomaten = 100;
    let süßesahne = 0.25;
    let tomatenmark = 17.5;
    let italienischekräuter = 0.75;
    let oregano = 0.25;

    if (portions < 1) {
        alert('Rezept für mindestens eine Person')
    }

    else if (portions > 10) {
        alert('Rezept für maximal 10 Personen')
    }

    else {
        document.getElementById('incredient1').innerHTML = `${portions * hackfleisch}`;
        document.getElementById('incredient2').innerHTML = `${portions * tomaten}`;
        document.getElementById('incredient3').innerHTML = `${portions * süßesahne}`;
        document.getElementById('incredient4').innerHTML = `${portions * tomatenmark}`;
        document.getElementById('incredient5').innerHTML = `${portions * italienischekräuter}`;
        document.getElementById('incredient7').innerHTML = `${portions * oregano}`;
    }
}
  //Rezept Jonas
  function calc() {
    let amount = +document.getElementById('input-field').value;
    let Spaghetti = 125;
    let Speck = 75;
    let Eier = 1;
    let Sahne = 100;
    let Parmesan = 40;

    if (amount < 1){
        alert('Rezept für mindestens eine Person')
    }
    else if (amount < 11) {
        document.getElementById('amount1').innerHTML = `<td>${amount * Spaghetti}g Spaghetti</td>`
        document.getElementById('amount2').innerHTML = `<td>${amount * Speck}g Speck</td>`
        document.getElementById('amount3').innerHTML = `<td>${amount * Eier} Eier</td>`
        document.getElementById('amount4').innerHTML = `<td>${amount * Sahne}ml Sahne (Alternativ Milch)</td>`
        document.getElementById('amount5').innerHTML = `<td>${amount * Parmesan}g Parmesan</td>`
    } else {
        alert('Zahl muss kleiner als 11 sein!')
    }
}
//Contact
function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    if (validateForm()) {
        fetch("https://formspree.io/f/xyyrlbaa", {
            method: "POST",
            body: new FormData(event.target),
            headers: {
                'Accept': 'application/json'
            }
        }).then(() => {
            window.location.href = "./send_mail.html";
        }).catch((error) => {
            console.log(error);
        });
    }

}

function validateForm() {
    if (document.getElementById('contact-field').value != '' && document.getElementById('email-field').value != '') {
        return true
    } else {
        alert('Bitte tragen Sie einen Text und ihre Email-Adresse ein!')
    }
}