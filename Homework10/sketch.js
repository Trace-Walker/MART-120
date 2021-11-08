var headX = 250;
var headY = 100;
var headDirection = 1;

var movement = 13;

var BodyX = 175;
var BodyY = 185;
var BodyX2 = 175;
var BodyY2= 185;
var BodyDirection = 1;
var BodySpeedX = 1;
var BodySpeedY = 1;

var legY = 370;
var legY2 = 600;
var legDirection = 3;

var size = 22;
var count = 0; 
var sizeDirection = 2;
function setup() 
			{
				createCanvas(500,700);
				movement = Math.floor(Math.random() * 10) + 1;
			}

			function draw() 
			{
				background(220);
				//head
				fill(222,184,135);
				circle(headX,headY,175);
				headX+=headDirection;
				if(headX >= 418 || headX <= 82)
				{
					headDirection *= -1;
					movement *= -1
				}
				headX += movement;
				//arms
				fill(222,184,135);
				point(100, 250);
				fill(222,184,135);
				point(400, 250);
				fill(222,184,135);
				line(50, 250, 450, 250); 
				//legs
				fill(0,0,255)
				triangle(175, legY, 210, legY, 150, legY2);
				triangle(325, legY, 290, legY, 350, legY2);
				legY += legDirection;
				if(legY <= 0 || legY >= 450)
				{
					legDirection *= -1;
					movement *= -1
				}
				legY += movement;
				
				//body1
				fill(0,255,255);
				rect(BodyX,BodyY,150,200);
				BodyX += BodyDirection;
				if(BodyX >= 418 || BodyX <= 82)
				{
					BodyDirection *= -1;
					movement *= -1
				}
				BodyX += movement;
				//body2
				fill(0,255,255)
				rect(BodyX2,BodyY2,150,200);
				BodyX2 = BodyX2 + -1;
				BodyY2 = BodyY2 + -1;
				if(BodyX2 >= 100 - 10 || BodyX2 <= 150)
				{
					BodyDirection *= -1;
					
				}
				else(BodyY2 <= 0 || BodyY2 >= 9)
				{
					BodyDirection *= -1;
					
				}
				//text
				fill(0,0,0)
				textSize(size);
				size+= sizeDirection;
				count++;
				if(count > 5)
				{
					sizeDirection *=-1;
					count= 0;
				}
				text('The Blue Man', 10, 30);
				
				//text2
				fill(0,0,0)
				text('by Trace Walker', 10, 60);
			}
			