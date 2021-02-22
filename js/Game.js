class Game{
    constructor()
    {

    }
    getState()
    {
        var gameStateref=database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState=data.val();
        })


    }
    update(state){
        database.ref('/').update({
            gameState:state
        });
    }
    play(){
        form.hide();
        textSize(49);
        text("GAME START",200,200);
        Player.getPlayerInfo();
        if(allPlayers != undefined){
        var display_position= 130;
        for (var ptr in allPlayers){
            if(ptr ==="player" + player.index)
        fill("red");
        else 
            fill("black");
            display_position= display_position+20;
            textSize(15);
            text(allPlayers[ptr].name + ":" + allPlayers[ptr].distance,120, display_position)
        }
    }
    if (keyIsDown("UP_ARROW") && player.index != null){
     player.distance= player.distance+50;
     player.update();
    }}
    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
    }
}