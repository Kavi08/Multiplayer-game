var ball;
var database;

var gameState, playerCount;

var gameObj, formObj, playerObj;

function setup(){
    createCanvas(500,500);
    database = firebase.database();

    gameObj = new Game();
    
    gameObj.getState();
    console.log(gameState);
    gameObj.start();

    
}

function draw(){
   
}

