let bundeslaender = [ 
    {
        "name": "Baden-Württemberg",
        "population": 11.1,
        "url": "https://www.baden-wuerttemberg.de/de/startseite/",
        "comments": []
    },
    {
        "name": "Bayern",
        "population": 13.1,
        "url": "https://www.bayern.de/",
        "comments": ['Tolles Wetter und gute Wander-Routen', 'München ist eine schöne Stadt']
    },
    {
        "name": "Berlin",
        "population": 3.7,
        "url": "https://www.berlin.de/",
        "comments": []
    },
    {
        "name": "Brandenburg",
        "population": 2.5,
        "url": "https://www.brandenburg.de/",
        "comments": []
    },
    {
        "name": "Bremen",
        "population": 0.7,
        "url": "https://www.bremen.de/",
        "comments": ['Die Stadtmusikanten haben mir schon immer gefallen!']
    },
    {
        "name": "Hamburg",
        "population": 1.8,
        "url": "https://www.hamburg.de/",
        "comments": ['Ein wirklich tolles Bundesland']
    },
    {
        "name": "Hessen",
        "population": 6.3,
        "url": "https://www.hessen.de/",
        "comments": []
    },
    {
        "name": "Mecklenburg-Vorpommern",
        "population": 1.6,
        "url": "https://www.mecklenburg-vorpommern.de/startseite/",
        "comments": []
    },
    {
        "name": "Niedersachsen",
        "population": 8,
        "url": "https://www.niedersachsen.de/startseite/",
        "comments": []
    },
    {
        "name": "Nordrhein-Westfalen",
        "population": 17.9,
        "url": "https://www.land.nrw/",
        "comments": []
    },
    {
        "name": "Rheinland-Pfalz",
        "population": 4.1,
        "url": "https://www.rlp.de/de/startseite/",
        "comments": []
    },
    {
        "name": "Saarland",
        "population": 1,
        "url": "https://www.saarland.de/DE/home/home_node.html",
        "comments": []
    },
    {
        "name": "Sachsen",
        "population": 4.1,
        "url": "https://www.sachsen.de/",
        "comments": []
    },
    {
        "name": "Sachsen-Anhalt",
        "population": 2.2,
        "url": "https://www.sachsen-anhalt.de/startseite/",
        "comments": []
    },
    {
        "name": "Schleswig-Holstein",
        "population": 2.9,
        "url": "https://www.schleswig-holstein.de/DE/Home/home_node.html",
        "comments": []
    },
    {
        "name": "Thüringen",
        "population": 2.1,
        "url": "https://thueringen.de/",
        "comments": []
    }
];
function render(){
    let content = document.getElementById('content');
    content.innerHTML = ''

    for (let i = 0; i < bundeslaender.length; i++) { // z.b. i = 1
        const land = bundeslaender[i]; // land bekommt den wert des arrays der stelle 1 (bayern)
        content.innerHTML +=/*html*/`
        <div class="card">
            <h2>${land['name']}</h2> <!-- gibt von Bayern die kategorie name wieder in h2 -->
            <div><a href="${land['url']}" target="blank">${land['url']}</a></div> <br>

             <div id="landcontent${i}"></div> <!-- gibt der id landcontent noch eine 1 (durch aktu. index, einzigeartige id wegen i) -->
            <input id="input${i}"><button onclick="addComment(${i})">OK</button>
        </div> <!-- gibt input und addcomment den indexwert 1 (aktu. card, wechselt bei jeder anderen) -->
        `;
        let landcontent = document.getElementById(`landcontent${i}`); // var zählz für landcontent1

        for (let j = 0; j < land['comments'].length; j++) { // j genauso wie i, länge von der kategorie comments vom land mit index 1 (bayern)
            const comment = land['comments'][j]; // const comment bekommt den wert aus der kategorie comments und jeweilige indey zahl aus dessen array
            landcontent.innerHTML += /*html*/`
                <div>${comment}</div>
            `
            
        }
    }
}
function addComment(index){ // bekommt den zugewissenen index aus der render funct (1)
    let input = document.getElementById(`input${index}`); // var input bekommt den wert von der id input1 da indexwert 1 ausgewählt
    bundeslaender[index]['comments'].push(input.value); // der inputwert wird in das array bundeslaender [1] in das array von comments eingefügt 
    render();

}