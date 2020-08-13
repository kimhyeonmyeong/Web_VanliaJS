const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(ImgNumber) {
  const image = new Image();
  image.src = `image/${ImgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
  //prepend도됨.
}
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
