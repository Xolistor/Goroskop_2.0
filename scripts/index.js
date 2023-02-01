var markTrue = false;
var markID;
var markMember;

function Start() {
	var day = document.getElementById('day').value;
	var months = document.getElementById('Months').value;
	var nonetext = document.getElementById('noneText');
	
	day = Number(day);
	months = Number(months);

	if (markTrue == true) 
	{
		markTrue = false;
		markID.innerHTML = markMember;
		contiuem();
	}
	else if (markTrue == false) {
		contiuem();
	}



function contiuem() {
		if (months == 1)
		{
			if (day < 20) {
				nonetext.innerHTML = "<a href='#Ko' style='text-decoration: none; color: #212529;'>Козеро́г</a>";
				document.getElementById('Ko').innerHTML = "<a href='#' style='text-decoration: none;'><mark class='text-dark' style='border-radius: 8px;'>Козеро́г</mark></a>";
				markTrue = true;
				markID = document.getElementById('Ko');
				markMember = "Козеро́г";
			}
			else {
				nonetext.innerHTML = "<a href='#Vo' style='text-decoration: none; color: #212529;'>Водолей</a>";
				document.getElementById('Vo').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Водолей</mark></a>";
				markTrue = true;
				markID = document.getElementById('Vo');
				markMember = "Водолей";
			}
		}
		else if (months == 2) 
		{
			if (day < 20) {
				nonetext.innerHTML = "<a href='#Vo' style='text-decoration: none; color: #212529;'>Водолей</a>";
				document.getElementById('Vo').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Водолей</mark></a>";
				markTrue = true;
				markID = document.getElementById('Vo');
				markMember = "Водолей";
			}
			else {
				nonetext.innerHTML = "<a href='#Rub' style='text-decoration: none; color: #212529;'>Рыба</a>";
				document.getElementById('Rub').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Рыба</mark></a>";
				markTrue = true;
				markID = document.getElementById('Rub');
				markMember = "Рыба";
			}
		}
		else if (months == 3) 
		{
			if (day < 21) {
				nonetext.innerHTML = "<a href='#Rub' style='text-decoration: none; color: #212529;'>Рыба</a>";
				document.getElementById('Rub').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Рыба</mark></a>";
				markTrue = true;
				markID = document.getElementById('Rub');
				markMember = "Рыба";
			}
			else {
				nonetext.innerHTML = "<a href='#Ov' style='text-decoration: none; color: #212529;'>О́ве́н</a>";
				document.getElementById('Ov').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>О́ве́н</mark></a>";
				markTrue = true;
				markID = document.getElementById('Ov');
				markMember = "О́ве́н";
			}
		}
		else if (months == 4) 
		{
			if (day < 21) {
				nonetext.innerHTML = "<a href='#Ov' style='text-decoration: none; color: #212529;'>О́ве́н</a>";
				document.getElementById('Ov').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>О́ве́н</mark></a>";
				markTrue = true;
				markID = document.getElementById('Ov');
				markMember = "О́ве́н";
			}
			else {
				nonetext.innerHTML = "<a href='#Tel' style='text-decoration: none; color: #212529;'>Теле́ц</a>";
				document.getElementById('Tel').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Теле́ц</mark></a>";
				markTrue = true;
				markID = document.getElementById('Tel');
				markMember = "Теле́ц";
			}
		}
		else if (months == 5) 
		{
			if (day < 21) {
				nonetext.innerHTML = "<a href='#Tel' style='text-decoration: none; color: #212529;'>Теле́ц</a>";
				document.getElementById('Tel').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Теле́ц</mark></a>";
				markTrue = true;
				markID = document.getElementById('Tel');
				markMember = "Теле́ц";
			}
			else {
				nonetext.innerHTML = "<a href='#Bliz' style='text-decoration: none; color: #212529;'>Близнецы</a>";
				document.getElementById('Bliz').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Близнецы</mark></a>";
				markTrue = true;
				markID = document.getElementById('Bliz');
				markMember = "Близнецы";
			}
		}
		else if (months == 6) 
		{
			if (day < 21) {
				nonetext.innerHTML = "<a href='#Bliz' style='text-decoration: none; color: #212529;'>Близнецы</a>";
				document.getElementById('Bliz').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Близнецы</mark></a>";
				markTrue = true;
				markID = document.getElementById('Bliz');
				markMember = "Близнецы";
			}
			else {
				nonetext.innerHTML = "<a href='#Rak' style='text-decoration: none; color: #212529;'>Рак</a>";
				document.getElementById('Rak').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Рак</mark></a>";
				markTrue = true;
				markID = document.getElementById('Rak');
				markMember = "Рак";
			}
		}
		else if (months == 7) 
		{
			if (day < 21) {
				nonetext.innerHTML = "<a href='#Rak' style='text-decoration: none; color: #212529;'>Рак</a>";
				document.getElementById('Rak').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Рак</mark></a>";
				markTrue = true;
				markID = document.getElementById('Rak');
				markMember = "Рак";
			}
			else {
				nonetext.innerHTML = "<a href='#Lev' style='text-decoration: none; color: #212529;'>Лев</a>";
				document.getElementById('Lev').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Лев</mark></a>";
				markTrue = true;
				markID = document.getElementById('Lev');
				markMember = "Лев";
			}
		}
		else if (months == 8) 
		{
			if (day < 21) {
				nonetext.innerHTML = "<a href='#Lev' style='text-decoration: none; color: #212529;'>Лев</a>";
				document.getElementById('Lev').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Лев</mark></a>";
				markTrue = true;
				markID = document.getElementById('Lev');
				markMember = "Лев";
			}
			else {
				nonetext.innerHTML = "<a href='#Dev' style='text-decoration: none; color: #212529;'>Дева</a>";
				document.getElementById('Dev').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Дева</mark></a>";
				markTrue = true;
				markID = document.getElementById('Lev');
				markMember = "Дева";
			}
		}
		else if (months == 9) 
		{
			if (day < 21) {
				nonetext.innerHTML = "<a href='#Dev' style='text-decoration: none; color: #212529;'>Дева</a>";
				document.getElementById('Dev').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Дева</mark></a>";
				markTrue = true;
				markID = document.getElementById('Dev');
				markMember = "Дева";
			}
			else {
				nonetext.innerHTML = "<a href='#Ves' style='text-decoration: none; color: #212529;'>Весы</a>";
				document.getElementById('Ves').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Весы</mark></a>";
				markTrue = true;
				markID = document.getElementById('Ves');
				markMember = "Весы";
			}
		}
		else if (months == 10) 
		{
			if (day < 21) {
				nonetext.innerHTML = "<a href='#Ves' style='text-decoration: none; color: #212529;'>Весы</a>";
				document.getElementById('Ves').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Весы</mark></a>";
				markTrue = true;
				markID = document.getElementById('Ves');
				markMember = "Весы";
			}
			else {
				nonetext.innerHTML = "<a href='#Skorp' style='text-decoration: none; color: #212529;'>Скорпион</a>";
				document.getElementById('Skorp').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Скорпион</mark></a>";
				markTrue = true;
				markID = document.getElementById('Skorp');
				markMember = "Скорпион";
			}
		}
		else if (months == 11) 
		{
			if (day < 24) {
				nonetext.innerHTML = "<a href='#Skorp' style='text-decoration: none; color: #212529;'>Скорпион</a>";
				document.getElementById('Skorp').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Скорпион</mark></a>";
				markTrue = true;
				markID = document.getElementById('Skorp');
				markMember = "Скорпион";
			}
			else {
				nonetext.innerHTML = "<a href='#Strel' style='text-decoration: none; color: #212529;'>Стреле́ц</a>";
				document.getElementById('Strel').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Стреле́ц</mark></a>";
				markTrue = true;
				markID = document.getElementById('Strel');
				markMember = "Стреле́ц";
			}
		}
		else if (months == 12) 
		{
			if (day < 19) {
				nonetext.innerHTML = "<a href='#Strel' style='text-decoration: none; color: #212529;'>Стреле́ц</a>";
				document.getElementById('Strel').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Стреле́ц</mark></a>";
				markTrue = true;
				markID = document.getElementById('Strel');
				markMember = "Стреле́ц";
			}
			else {
				nonetext.innerHTML = "<a href='#Vo' style='text-decoration: none; color: #212529;'>Водолей</a>";
				document.getElementById('Vo').innerHTML = "<a href='#' style='text-decoration: none; color: #212529;'><mark class='text-dark' style='border-radius: 8px;'>Водолей</mark></a>";
				markTrue = true;
				markID = document.getElementById('Vo');
				markMember = "Водолей";
			}
		}
	}
}
