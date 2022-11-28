// importing the main object to define animations
import { spriteAnimations } from "./spriteAnimations.js";

// defining canvas element and context drawing
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
// defining canvas size and keep it in a variable to reuse it later
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 500;
// defining animation image and his animation variables 
const playerImage = new Image();
playerImage.src = 'resources/images/shadow_dog.png';
const spriteWidth = 575; // aproximately 6876/12
const spriteHeight = 523; // aproximately 5230/10

// defining animation coordinates in our animatian source image
let sprite = spriteAnimations['idle']; // selected animation
let frameY = sprite.animationY; // frameY position of the selected animation
let maxFrame = sprite.frames - 1; // maximum frames of the selected animation
let staggerFrames = sprite.stagger; // techique to delay the frames calculation of Animation() funcion
let frameX = 0; // initiate frameX in position 0
let gameFrame = 0; // initiate gameFrame as 0 to stagger the animation delay

// defining the event listeners to select the animation
const element = document.getElementById("animation-selection");
element.addEventListener(
    "change",
    function changeAnimation() {
        sprite = spriteAnimations[element.value];
        frameY = sprite.animationY;
        maxFrame = sprite.frames - 1;
        staggerFrames = sprite.stagger; 
        console.log(sprite)
    }
)


// animation function that fills the canvas
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % maxFrame;
    frameX = spriteWidth * position;
    //ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0,  CANVAS_WIDTH, CANVAS_HEIGHT);
    
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();

