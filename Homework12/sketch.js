
var characterX = 100;
var characterY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;


var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var shape1 = 500;
var shape2 = 50;
var shape1Speed;
var shape2Speed;

var shape3 = 30;
var shape4 = 50;
var shape3Speed;
var shape4Speed;

var shape5 = 30;
var shape6 = 50;
var shape5Speed;
var shape6Speed;

var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 800);
    
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(154,415,738);
    stroke(0);
    fill(0);
    //call borders
	createborders();
    // exit 
    exit();
    //player
    player();
	//move
	movePlayer();
	//press enemie
	press();
	//win
	win();
    //enemies
    enemies();
	//moveEnemies
    moveEnemies();
}

function createborders()
{
	rect(0,0,width,10);
  
    rect(0,0,10,height);
    
    rect(0, height-10,width, 10);
   
    rect(width-10,0,10,height-50);
}

function exit()
{
	textSize(16);
    text("end", width-50,height-50)
}

function player()
{
	fill(255,240,31);
    circle(characterX,characterY,25);
}

function movePlayer()
{
	 if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}


 function press()
 { 
    fill(175,160,198);
    circle(mouseShapeX, mouseShapeY, 100);
 }

function enemies()
{
	//one
	fill(110,38,14);
    
    circle(shapeX, shapeY, 10);
	//two
	fill(110,388,14);
    
    circle(shape1, shape2, 50);
	//three
	fill(230,48,14);
    
    circle(shape3, shape4, 50);
	//four
	fill(230,48,154);
    
    circle(shape5, shape6, 90);
}
	
function moveEnemies()
{
	//one
	shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1000)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1000)) + 1);

    
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
	//two
	shape1Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
     shape2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 50)) + 1);

    
    shape1 += shape1Speed;
    shape2 += shape2Speed;
    if(shape1 > width)
    {
        shape1 = 0;
    }
    if(shape1 < 0)
    {
        shape1 = width;
    }
    if(shape2 > height)
    {
        shape2 = 0;
    }
    if(shape2 < 0)
    {
        shape2 = height;
    }
	//three
	shape3Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 50)) + 1);
     shape4Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

    
    shape3 += shape3Speed;
    shape4 += shape4Speed;
    if(shape3 > width)
    {
        shape3 = 0;
    }
    if(shape3 < 0)
    {
        shape3 = width;
    }
    if(shape4 > height)
    {
        shape4 = 0;
    }
    if(shape4 < 0)
    {
        shape4 = height;
    }
	//four
	shape5Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 80)) + 1);
     shape6Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 80)) + 1);

    
    shape5 += shape5Speed;
    shape6 += shape6Speed;
    if(shape5 > width)
    {
        shape5 = 0;
    }
    if(shape5 < 0)
    {
        shape5 = width;
    }
    if(shape6 > height)
    {
        shape6 = 0;
    }
    if(shape6 < 0)
    {
        shape6 = height;
    }
}



function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function win()
{
	if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You escaped......for now", width/2-50, height/2-50);
    }
}