function userA(){
	var textBoxA = document.getElementById("userA").value;
	var replyBox = document.getElementById("REPLY");	
	var text = textBoxA;
	replyBox.innerHTML += "userA: " + text + "<br>";
	
	
}
function userB(){
	var textBoxB = document.getElementById("userB").value;
	var replyBox = document.getElementById("REPLY");	
	var text = textBoxB;
	replyBox.innerHTML += "userB: " + text + "<br>";
	
	
}
