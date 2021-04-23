var bg,bgImage,canvas

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var player1,player2,players
var form, player, game,bg;
var player1Image,player2Image;

var enemy1,enemy1Image;
function preload(){
    bgImage=loadImage("images/download.jpg")
    player1Image=loadImage("images/player1.png")
    player2Image=loadImage("images/player2.png")
    bg=loadImage("images/BG.jpg")
    enemy1=loadImage("images/images1.png")
    }
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
    background(bg)
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
