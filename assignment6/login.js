window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var usernameInput = document.forms["myLogin"]["username"];
	var passwordInput = document.forms["myLogin"]["password"];
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username')
	const password = urlParams.get('password')

	

	if(usernameInput.value != username || passwordInput.value != password){
		alert("Wrong username or password")
		return false;
	}
	else if (usernameInput.value == username && passwordInput.value == password){
		alert("aloha")
		return true;
	}
}

			