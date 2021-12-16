function setup() 
			{
				createCanvas(1000,700);
			}

			function draw() 
			{
				background(135,206,235);
				//land
				fill(95, 214, 0);
				rect(0, 500, 1000, 300);
				//sun
				fill(223, 191, 0);
				circle(976, 30, 200);
				//tree
				fill(95, 46, 0);
				rect(90, 400, 50, 200);
				rect(850, 400, 50, 200);
				fill(32, 142, 0);
				circle(50, 365, 100);
				circle(180, 365, 100);
				circle(115, 300, 100);
				circle(115, 380, 100);
				fill(32, 142, 0);
				circle(810, 365, 100);
				circle(935, 365, 100);
				circle(870, 300, 100);
				circle(875, 380, 100);
				//cloud
				fill(255, 255, 255);
				circle(320, 130, 70);
				circle(280, 165, 80);
				circle(365, 165, 80);
				circle(320, 180, 80);
				fill(255, 255, 255);
				circle(620, 35, 70);
				circle(580, 65, 80);
				circle(665, 65, 80);
				circle(620, 80, 80);
				//birds
				fill(0, 0, 0);
				line(590, 200, 570, 215);
				line(550, 200, 570, 215);
				line(480, 200, 460, 215);
				line(440, 200, 460, 215);
				line(535, 250, 515, 265);
				line(495, 250, 515, 265);
				line(420, 250, 400, 265);
				line(380, 250, 400, 265);
				//tent
				fill(179, 0, 83);
				triangle(500, 400, 350, 650, 650, 650);
				fill(80, 80, 80);
				triangle(500, 410, 470, 650, 530, 650);
			}
			