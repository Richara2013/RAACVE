var form, player, game;
var gameState=0;
var distance=0;
var allPlayers;
var playerCount;
var database;
var backgroundImg;
function setup()
{
  createCanvas(400,400);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();
}
function draw()
{
// check if the player count is 4, then update the game state to 1, and if game state is 1 start playing the game
if (playerCount === 4){
  game.update(1);
}
if(gameState === 1){
  clear();
  game.play();
}
}