window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    
    var password = document.forms["myForm"]["password"];
    var checkpassword = document.forms["myForm"]["Repassword"];

    if(password.value != checkpassword.value ){
        document.getElementById("errormsg").innerHTML="Type password again";
        alert("Wrong retype-password");
        return false;
    }
    else if (password.value == checkpassword.value){
        return true;
    }
}