var game = document.createElement("div");
document.body.appendChild(game);
game.style.position = "relative";

var score = 10000;

var countClick = 0;

var handle = {
    countClick: 0,
    countRight: 0,
    images: [],
}

var text = document.createElement("div");
text.innerHTML = `score: ${score}`;
text.style.position = "absolute";
text.style.top = '450px';
game.appendChild(text);

// tạo mảng ramdom
var arr = [];
while (arr.length < 10) {
    var r = Math.floor(Math.random() * 20);
    if (arr.indexOf(r) === -1) arr.push(r);
}

var bg = createImage("./img/trucxanh_bg.jpg", 0, 0, 500, 400); // ở dây
var obj = {};
var count = 0;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
        if (arr.indexOf(i * 4 + j) !== -1) {
            obj[`${i * 100}-${j * 100}`] = `./img/trucxanh${count}.jpg`;
            count++;
        }

        createImage('', i * 100, j * 100, 100, 100);
    }
}

function createImage(src, top, left, width, height) {
    var image = document.createElement("img");
    image.onclick = () => {
        console.log(image.src);
        if (true) {
            handle.images.push(image);
            handle.countClick++;
            if (obj[`${top}-${left}`]) {
                handle.countRight++;
                image.src = obj[`${top}-${left}`];
            }

            if (handle.countClick === 2) {
                if (handle.countRight === 2) {
                    score += 1000;
                } else {
                    score -= 500;
                    if (score === 0) {
                        text.innerHTML = 'game over';
                    }
                    handle.images[0].src = '';
                    handle.images[1].src = '';
                }
                handle.countClick = 0;
                handle.countRight = 0;
                handle.images = [];
                text.innerHTML = `score: ${score}`;
            }
        }
    }
    image.src = src;
    image.style.position = "absolute";
    width && (image.style.width = width + "px");
    height && (image.style.height = height + "px");
    image.style.top = top + "px";
    image.style.left = left + "px";

    game.appendChild(image);
    return image;
}