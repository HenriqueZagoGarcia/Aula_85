canvas = document.getElementById('myCanvas'/* Id --> No CSS, chamar com # */);
ctx = canvas.getContext("2d");

nasaMarsImagesArray /* variável */= ["nasa_image_1.jpg" /* Se inicia no índice 0 */,"nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"/* 1 array (ônibus) - 4 valores (pessoas)*/];

randomNumber = Math.floor/* Arredonda o número para baixo */(Math.random/* número aleatório entre 0 e 1 */() * 4);
console.log(randomNumber);
roverWidth = 100;
roverHeight = 90;

backgroundImage = nasaMarsImagesArray[randomNumber];
console.log/* Saída (mostra os itens da página) --> Inspecionar */("backgroundImage = " + backgroundImage);
roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
	backgroundImgTag /* Outra variável */= new Image(); /* --Chama a imagem-- */
	backgroundImgTag.onload = uploadBackground /* Função */; 
	backgroundImgTag.src = backgroundImage;  /* --Mostra a imagem-- */

	roverImgTag = new Image(); //definindo uma variável com uma nova imagem
	roverImgTag.onload = uploadRover; // definindo uma função, ao carregar esta variável
	roverImgTag.src = roverImage;   // carregando a imagem

function uploadBackground /* Função é chamada */() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) /* Função é chamada pelo EVENTO (e) */
{
	keyPressed = e.keyCode;
	console.log(keyPressed); /* Teclas são programadas por seus valores (ASCII) */


		if(keyPressed == '38')
		{
			up() /* Chamada aqui (chamada antes de ser feita) */;
			console.log("up");
		}

		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}

		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}

		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
				
}

function up() /* Feita aqui */
{
	if(roverY >=0) /* Não sair da área do Canvas */
	{
		roverY /* Variável */= roverY - 10 /* Valor */; /* Quanto ele se movimenta */
		console.log("Quando a seta para cima é pressionada,  x = " + roverX + " | y = " +roverY);
		 uploadBackground();
		 uploadRover();
	}
}

function down()
{
	if(roverY <=500)
	{
		roverY = roverY + 10 ;
		console.log("Quando a seta para baixo é pressionada,  x = " + roverX + " | y = " +roverY);
		 uploadBackground();
		 uploadRover();
	}
}

function left()
{
	if(roverX >=0)
	{
		roverX = roverX - 10 ;
		console.log("Quando a seta para esquerda é pressionada,  x = " + roverX + " | y = " +roverY);
		 uploadBackground();
		 uploadRover();
	}	
}

function right()
{
	if(roverX <=710)
	{
		roverX = roverX + 10 ;
		console.log("Quando a seta para direita é pressionada,  x = " + roverX + " | y = " +roverY);
		 uploadBackground();
		 uploadRover();
	}	
}

}