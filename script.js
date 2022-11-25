// importing the main object to define animations
import { spriteAnimations } from "./spriteAnimations.js";

// defining canvas element and context drawing
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext("2d");

// defining canvas size and keep it in a variable to reuse it later
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

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



// -----------------------------------------------------------------------------------------------------------------------------------------------
// Testing Canvas II -----------------------------------------------------------------------------------------------------------------------------

// defining canvas element and context drawing
const canvasTest = document.getElementById('canvas2');
const ctxTest = canvasTest.getContext("2d");
// defining canvas size to clean it 
const CANVAS_WIDTH_2 = canvasTest.width = 600;
const CANVAS_HEIGHT_2 = canvasTest.height = 600;

let animation = 4; // frameY from 0 to 9
let frame = 1; // frameX from 0 to 11
let maxFrameII = 11; // maximum frameX in frameY animation
let gameFrameII = 0; // gameframe is used to slow down the animation
const staggerFramesII = 5; // amount 


// animation function that fills the canvas
function animateII() {
    ctxTest.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let sourceX = frame * spriteWidth;
    let sourceY = animation * spriteHeight;
    ctxTest.drawImage(playerImage, sourceX, sourceY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (gameFrameII % staggerFramesII == 0) {  
        frame < maxFrameII - 1 ? frame++ : frame = 1;
    }
    gameFrameII++;
    
    requestAnimationFrame(animateII);
};
animateII();

