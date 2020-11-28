class Player{
    constructor(){

    }

    //Method for reading playerCount from DB
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){ 
            playerCount = data.val();
        } );        
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }
        
    updateName(playerName){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).update({
            name: playerName
        });

    }




}