var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    block1 = createSprite(0, 580, 360, 30)
    block1.shapeColor= rgb(0,0,255)
    block2 = createSprite(295, 580, 200, 30)
    block2.shapeColor= rgb(255,128,0)
    block3 = createSprite(515, 580, 200, 30)
    block3.shapeColor= rgb(153,0,76)
    block4 = createSprite(740, 580, 220, 30)
    block4.shapeColor= rgb(0,100,0)
    ball = createSprite(random(20, 750), 100, 40, 40)
    ball.shapeColor= rgb(255,255,255)
    ball.velocityX = 7
    ball.velocityY = 4




   



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges)
    if(ball.isTouching(block1)){
        ball.shapeColor =  rgb(0,0,255)
        music.loop();
    }
    if(ball.isTouching(block2)){
        ball.shapeColor = rgb(255,128,0)
        music.stop();
    }
    if(ball.isTouching(block3)){
        ball.shapeColor = rgb(153,0,76)
        music.loop();
    }
    if(ball.isTouching(block4)){
        ball.shapeColor = rgb(0,100,0)
        music.loop();
    }

    drawSprites();

    //add condition to check if box touching surface and make it box
    
}
