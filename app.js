//Create elements
const game = document.createElement("div");
const character = document.createElement("div");
const block = document.createElement("div");
const fingerLeft = document.createElement("div");
const fingerRight = document.createElement("div");
const curtain = document.createElement("div");
const measure = document.createElement("div");
var counter = 0;

game.classList.add("game");
character.classList.add("character");
block.classList.add("block", "animation");
fingerLeft.classList.add("finger1")
fingerRight.classList.add("finger2");
curtain.classList.add("curtain");
measure.classList.add("measure");

document.body.appendChild(game);
game.appendChild(block);
game.appendChild(character);
game.appendChild(fingerLeft);
game.appendChild(fingerRight);
document.body.appendChild(curtain);
game.appendChild(measure);

//Move left function
function moveLeft() {
    var left = parseInt(window.getComputedStyle(character).
    getPropertyValue("left"));
    left -= 100;
    if(left>=0)
    character.style.left = left + "px";
}

//Move right function
function moveRight() {
    var left = parseInt(window.getComputedStyle(character).
    getPropertyValue("left"));
    left += 100;
    if(left<=200)
    character.style.left = left + "px";
}

//Key action assignment
document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
});

//Random left position of block
block.addEventListener("animationiteration", () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + "px";
    counter++;
    measure.innerHTML = counter;
})

//Hit detection
setInterval(function() {
    var characterLeft = 
    parseInt(window.getComputedStyle(character).
    getPropertyValue("left"));
    var blockLeft = 
    parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    var blockTop = 
    parseInt(window.getComputedStyle(block).
    getPropertyValue("top"));
    if(characterLeft == blockLeft &&
        blockTop<500&&
        blockTop>400){
            alert("Game Over. Score: "+counter);
            game.style.animation = "none";
            counter = 0;
        }
}, 1);

//Mobile friendly 
fingerLeft.addEventListener("touchstart", moveLeft);
fingerRight.addEventListener("touchstart", moveRight);

