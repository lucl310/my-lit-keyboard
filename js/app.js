// document.getElementsByTagName('button')
document.body.addEventListener('click', type)
document.body.addEventListener('keydown', type)
document.body.addEventListener('keyup', unflash)

function type(e) {
	console.log(e.key)
	document.getElementById(e.key).style.backgroundColor = "red";
	document.getElementById('music').pause = false
	// 
// 	if (mouse == down) {document.getElementById("ta").innerHTML = "the mouse is down"
// }
// 	if (true) {}
}
function unflash(e) {
	document.getElementById(e.key).style.backgroundColor = "";
}

