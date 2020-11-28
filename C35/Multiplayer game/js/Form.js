class Form{

    constructor(){

    }

    display(){
        var title = createElement('h2');//h1 to h7
        title.html("Car Racing Game");
        title.position(10, 50);

        var input = createInput("Name");
        input.position(10, 100);

        var button = createButton("Play");
        button.position(10, 150);
        console.log("Inside form");
        
        button.mousePressed(
            function(){
                input.hide();
                button.hide();
                var name = input.value()
                var hello = createElement('h5');
                hello.html(" Welcome " + name + " to the car racing game ");
                hello.position(10,200);
                playerCount++;
                player.updateCount(playerCount);
                player.updateName(name);
            }
        )
    }

}