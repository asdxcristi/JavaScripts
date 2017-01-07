function initials(){
	var name1_field = document.getElementById("NAME1").value;
	var name2_field = document.getElementById("NAME2").value;
	var message_field = document.getElementById("MESSAGE");
	
	var initials = name1_field.charAt(0) + " " + name2_field.charAt(0) ;
	var message = "Initials: " + initials ;
	
	message_field.innerHTML = message;
}

function calculator(){
	var number1 = parseInt(document.getElementById("NUMBER1").value);
	var number2 = parseInt(document.getElementById("NUMBER2").value);

	var operator = document.getElementById("OPERATOR").value;
	var result_field = document.getElementById("RESULT");
	var result;

	switch (operator) {
		case "+":
		    result = (number1 + number2);
		    break;
		case "-":
		     result = (number1 - number2);
		    break;
		case "*":
		    result = (number1 * number2);
		    break;
		case "/":
		    result = (number1 / number2);
		    break;
	} 

	result_field.innerHTML = result;


}
