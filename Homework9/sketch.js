function setup() 
			{
				createCanvas(500,700);
			}

			function draw() 
			{
				background(220);
				fill(222,184,135);
				circle(250,100,175);
				fill(222,184,135);
				point(100, 250);
				fill(222,184,135);
				point(400, 250);
				fill(222,184,135);
				line(50, 250, 450, 250); 
				fill(0,0,255)
				triangle(175, 370, 210, 370, 150, 600);
				triangle(325, 370, 290, 370, 350, 600);
				fill(0,255,255)
				rect(175,185,150,200);
				fill(0,0,0)
				text('Trace Walker', 10, 30);
			}
			