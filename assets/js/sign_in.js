
function validform() {
	
	var a = document.forms["my-form"]["name"].value;
	var b = document.forms["my-form"]["email"].value;
	var d = document.forms["my-form"]["password"].value;
	var e = document.forms["my-form"]["passsword"].value;
	alert(a);
	if (a==null || a=="")
	{
		alert("Please Enter Your Full Name");
		return false;
	}else if (b==null || b=="")
	{
		alert("Please Enter Your Email Address");
		return false;
	}else if (d==null || d=="")
	{
		alert("Please Enter Your Password");
		return false;
	}else if (e==null || e=="")
	{
		alert("Please Confirm Your Password");
		return false;
	}
	
	return true;
}

