function submitContact(){
	var fname = document.getElementById('fName').value
	var lname = document.getElementById('lName').value
	var number = document.getElementById('phoneNum').value
	var email = document.getElementById('email').value

	var atPos = email.lastIndexOf("@");
	var pnumber = number.replace(/[\s\-\(\)]/gi, '')
	console.log(pnumber);

	document.getElementById('fullName').innerHTML = lname + ", " + fname;
	document.getElementById('phone').innerHTML = "(" + pnumber.slice(0,3) + ") " + pnumber.slice(3,6) + "-" + pnumber.slice(6,10)
	document.getElementById('emailPrefix').innerHTML = email.slice(0,atPos);
	document.getElementById('emailDomain').innerHTML = email.slice(atPos+1,email.length);
}

function calculatePower(){
	var input = document.getElementById('num1').value
	var input2 = document.getElementById('num2').value
	if (!isNaN(input) || !isNaN(input2)) {
		document.getElementById('result').value = power(firstNum, secondNum);
	} else {
		document.getElementById('mathMsg').innerHTML = "invalid input!";
	}
}

// This function needs to RETURN the answer of num1 ^ num2.
function power(num1, num2){
	var result = num1;
	if (num2 == 0) {
		return 1;
	}
	for (var i = 1; i < num2; i++) {
		result = result * num1;
	}
	return result;
}