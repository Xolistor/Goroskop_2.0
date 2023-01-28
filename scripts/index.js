function Start() {
	var day = document.getElementById('day').value;
	var months = document.getElementById('Months').value;
	var nonetext = document.getElementById('noneText');
	day = Number(day);
	months = Number(months);
	if (months == 1)
	{
		if (day < 20) {
			nonetext.innerHTML = "Козерог";
		}
		else {
			
			nonetext.innerHTML = "Водолей";
		}
	}
	else if (months == 2) 
	{
		if (day < 20) {
			
			nonetext.innerHTML = "Водолей";
		}
		else {
			
			nonetext.innerHTML = "Рыба";
		}
	}
	else if (months == 3) 
	{
		if (day < 21) {
			
			nonetext.innerHTML = "Рыба";
		}
		else {
			
			nonetext.innerHTML = "Овен";
		}
	}
	else if (months == 4) 
	{
		if (day < 21) {
			
			nonetext.innerHTML = "Овен";
		}
		else {
			
			nonetext.innerHTML = "Телец";
		}
	}
	else if (months == 5) 
	{
		if (day < 21) {
			
			nonetext.innerHTML = "Телец";
		}
		else {
			
			nonetext.innerHTML = "Близнец";
		}
	}
	else if (months == 6) 
	{
		if (day < 21) {
			
			nonetext.innerHTML = "Близнец";
		}
		else {
			
			nonetext.innerHTML = "Рак";
		}
	}
	else if (months == 7) 
	{
		if (day < 21) {
			
			nonetext.innerHTML = "Рак";
		}
		else {
			
			nonetext.innerHTML = "Лев";
		}
	}
	else if (months == 8) 
	{
		if (day < 21) {
			
			nonetext.innerHTML = "Лев";
		}
		else {
			
			nonetext.innerHTML = "Дева";
		}
	}
	else if (months == 9) 
	{
		if (day < 21) {
			
			nonetext.innerHTML = "Дева";
		}
		else {
			
			nonetext.innerHTML = "Весы";
		}
	}
	else if (months == 10) 
	{
		if (day < 21) {
			
			nonetext.innerHTML = "Весы";
		}
		else {
			
			nonetext.innerHTML = "Скорпион";
		}
	}
	else if (months == 11) 
	{
		if (day < 24) {
			
			nonetext.innerHTML = "Скорпион";
		}
		else {
			
			nonetext.innerHTML = "Стрелец";
		}
	}
	else if (months == 12) 
	{
		if (day < 19) {
			
			nonetext.innerHTML = "Стрелец";
		}
		else {
			
			nonetext.innerHTML = "Водолей";
		}
	}
}