let images = ['img/alaska.jpg', 'img/beach2.jpg', 'img/coast.jpg', 'img/landscape.jpg', 'img/pagoda.jpg', 'img/palm.jpg', 'img/sea.jpg', 'img/beach1.jpg', 'img/sunset.jpg', 'img/blue.jpg', 'img/mountain.jpg', 'img/herbst.jpg', 'img/palm-trees.jpg', 'img/pink-algae.jpg', 'img/skyline.jpg', 'img/trees.jpg']

function render(i) {

    for (let i = 0; i < images.length; i++) {
        document.getElementById('galerie').innerHTML += generateImg(i);
    }       // function gererateImg wird mit var i ausgeführt
}

function generateImg(i){ //hinterlegte var i wird angesprochen

    return /*html*/`
    <div onclick="openimg(${i})" class="imgBox">
        <img src="${images[i]}" alt="">
    </div>
    `       // function gibt html-code in vorheriger function wieder
}

function openimg(i) {
    document.getElementById('fullScreen').classList.remove('d-none');
    
    document.getElementById('bigPic').innerHTML = /*html*/`
       <img onclick="prev(${i})" class="btn2" src="./img/zurück.jpg" alt="">
       <img onclick="closeimg()" id="pic" class="bigImg" src="${images[i]}" alt="">
       <img onclick="next(${i})" class="btn1" src="./img/vorwärts.jpg" alt="">
       `
}

function closeimg() {
    document.getElementById('fullScreen').classList.add('d-none');
}

function next(i) {
    i++;
    if (i > 15) {
        i = 0;
        document.getElementById('pic').src = '${images[i]}';
    }
    openimg(i);
}
function prev(i) {
    i--;
    if (i < 0) {
        i = 15;
        document.getElementById('pic').src = '${images[i]}';
    }
    openimg(i);
}

