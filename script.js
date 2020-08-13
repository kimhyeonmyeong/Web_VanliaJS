//console.log('Hello my frist time\'s java scrpit is this!!');

//console.log(document);

const title = document.querySelector("#title"); // id
const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
