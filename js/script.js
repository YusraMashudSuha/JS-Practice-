// bulb part start

function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("bon")) {
    image.src = "boff.jpg";
  } else {
    image.src = "bon.jpg";
  }
}
  
// bulb part end 


// burger part start

const lettuce = document.getElementsByClassName("lettuce")[0];
const lettucebtn = document.getElementsByClassName("lettucebtn")[0];
const patty = document.getElementsByClassName("patty")[0];
const Pattybtn = document.getElementsByClassName("Pattybtn")[0];
const cheese = document.getElementsByClassName("cheese")[0];
const cheesebtn = document.getElementsByClassName("cheesebtn")[0];

function addLettuce() {
    lettuce.innerHTML = '<img src="lettuce.jpg" alt="lettuce">';
}
function addPatty() {
    patty.innerHTML = '<img src="patty.jpg" alt="patty">';
}
function addCheese() {
    cheese.innerHTML = '<img src="cheese.jpg" alt="cheese">';
}


// burger part end 

// icecream part start
const vanilla = document.getElementsByClassName("vanilla")[0];
const vanillabtn = document.getElementsByClassName("vanillabtn")[0];
const cherry = document.getElementsByClassName("cherry")[0];
const cherrybtn = document.getElementsByClassName("cherrybtn")[0];

function addVanilla() {
    vanilla.innerHTML = '<img src="vanilla.jpg" alt="vanilla">';
}
function addCherry() {
    cherry.innerHTML = '<img src="cherry.jpg" alt="Cherry">';
}
// icecream part end
// day&night part start
function changetime() {
  var image = document.getElementById('day');
  if (image.src.match("day")) {
    image.src = "night.png";
  } else {
    image.src = "day.jpg";
  }
}
// day&night part end