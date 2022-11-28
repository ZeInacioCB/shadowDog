// importing the main object to define animations
import { spriteAnimations } from "./spriteAnimations.js";

// defining the playerState and the event listener to select the animation
let playerState = 'idle';
const dropdown = document.getElementById("animation-selection");
dropdown.addEventListener("change", e => playerState = e.target.value);

// defining canvas element and context drawing
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 500;

// defining animation image and his animation variables 
const playerImage = new Image();
playerImage.src = './resources/images/shadow_dog.png';
const spriteWidth = 575; // aproximately 6876/12
const spriteHeight = 523; // aproximately 5230/10

// initialize animation
let frameX = spriteAnimations[playerState]; // initiate frameX in position 0
let gameFrame = 0; // initiate gameFrame as 0 to stagger the animation delay

// animation function that fills the canvas
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    let sprite = spriteAnimations[playerState]; // selected animation
    let frameY = sprite.animationY; // frameY position of the selected animation
    let maxFrame = sprite.frames - 1; // max frames of the selected animation   
    let staggerFrames = sprite.stagger; // techique to delay the frames calculation of Animation() funcion

    let position = Math.floor(gameFrame/staggerFrames) % maxFrame;
    frameX = spriteWidth * position;
    //ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
    ctx.drawImage(
        playerImage, 
        frameX, frameY * spriteHeight, 
        spriteWidth, spriteHeight, 
        0, 0,  CANVAS_WIDTH, CANVAS_HEIGHT);
    
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();

