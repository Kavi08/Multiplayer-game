class Game{
    constructor(){

    }

    //Method to read gameState value from DB
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){ 
            gameState = data.val();
        }, console.log("show error"));     
        console.log("in get State.."+ gameState)   
    }

    update(State){
        var updateRef = database.ref('/');
        updateRef.update({gameState: State});

        //database.ref('/').update({gameState: State});
    }

    start(){
        if(gameState === 0){
            playerObj = new Player();
            playerObj.playerCount();

            formObj = new Form();
            formObj.display();
        }
    }


}
