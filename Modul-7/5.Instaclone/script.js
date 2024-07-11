let posts = [
    {
        "authorImg": "img/timo.jpg",
        "author": "Timo",
        "location": "Norwegen",
        "image": "img/polarlicht.jpg",
        "likes": "345",
        "liked": false,
        "headline": `Polarlichter`,
        "comments": ['Sieht mega aus!'],
    },
    {
        "authorImg": "img/richard.jpg",
        "author": "Richard",
        "location": "Berlin",
        "image": "img/fernsehturm.jpg",
        "likes": "123",
        "liked": false,
        "headline": "Fernsehturm Berlin",
        "comments": [],
    },
    {
        "authorImg": "img/pascal.jpg",
        "author": "Pascal",
        "location": "Route 66",
        "image": "img/spiegel.jpg",
        "likes": "567",
        "liked": false,
        "headline": "Ausflug durch Amerika",
        "comments": [],
    },
    {
        "authorImg": "img/soeren.jpg",
        "author": "Sören",
        "location": "Bäckerei Müller",
        "image": "img/dessert.jpg",
        "likes": "789",
        "liked": false,
        "headline": "Leckeres Dessert",
        "comments": [],
    },
    {
        "authorImg": "img/helga.jpg",
        "author": "Helga",
        "location": "China",
        "image": "img/china.jpg",
        "likes": "987",
        "liked": false,
        "headline": "China Drachenfest",
        "comments": [],
    },
];

load();

function render() {
    let content = document.getElementById('content');
    content.innerHTML = ''
    
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        
        content.innerHTML += generateHTML(post, i)
        let comments = document.getElementById(`comments${i}`);
        
        for (let z = 0; z < post['comments'].length; z++) {
            const comment = post['comments'][z];
            comments.innerHTML += /*html*/`
                    <div><b>Jochen</b> ${comment}</div>
                    `
        }
    }
}

function generateHTML(post, i) {
    return /*html*/`
    <div class="card">
        <div class="postProfil">
            <a href="#/">
                <img class="profilImg" src="${post['authorImg']}" alt="">
            </a>
            <div class="name">
                <a href="#/">
                    <h2>${post['author']}</h2>
                </a>
                <p>${post['location']}</p>
            </div>
        </div>
        <img class="image" src="${post['image']}" alt="">
        <div class="icons">
            <div class="icons3">
                <a href="#/"><img class="nav-logo" id="redHeart" src="${getLikeHeart(i)}" alt="" onclick="toggleLike(${i})" ></a>
                <a href="#/"><img class="nav-logo" src="icon/png/comment.png" alt=""></a>
                <a href="#/"><img class="nav-logo" src="icon/png/chat.png" alt=""></a>
            </div>
            <div>
                <a href="#/"><img class="nav-logo" src="icon/png/save.png" alt=""></a>
            </div>
        </div>
        <div class="likes">
            Gefällt ${post['likes']} Mal
        </div>
        <div class="headline">
            <b>${post['author']}</b> ${post['headline']}
        </div>
        <div class="commentField" id="comments${i}"></div>
        <div class="form"> 
            <input id="input${i}" type="text" class="input" placeholder="Kommentar hinzufügen"><button onclick="addComment(${i})" class="button">Post</button>
        </div>
    </div>`
}

function addComment(index) {
    let input = document.getElementById(`input${index}`);
    posts[index]['comments'].push(input.value);
    render();
    save();
}



function toggleLike(x) {
    if (posts[x]['liked']) { // ist der pfad true dann zähle -1
        posts[x]['likes']--;
    } else {
        posts[x]['likes']++; // ist pfad false dann zähle +1
    }
    posts[x]['liked'] = !posts[x]['liked']; // ?
    render();
    save();
}

function getLikeHeart(postIndex) {
    if (!posts[postIndex]['liked']) { // ist der hinterlegte pfad(liked) false dann lade das bild
        return 'icon/png/heart.png';
    } else {
        return 'icon/png/redHeart5.png' // ist er true dann das bild
    }
}

function save(){
    let savePosts = JSON.stringify(posts);
    localStorage.setItem('posts', savePosts)
}

function load(){
    let savePosts = localStorage.getItem('posts');
    if (savePosts) {
        posts = JSON.parse(savePosts)
    }
}

