document.addEventListener("DOMContentLoaded", function(){
	var pathPoints = document.getElementById("path-points");
	var btnDraw = document.getElementById("btn-draw");
	
	btnScale.addEventListener("click", function(){
		var points = pathPoints.value;
		
	},false);
}, true);

function pathParser(pathString){
	var controlChars = ["M", "m", "L", "l", "H", "h", "V", "v",	"C", "c", "Z", "z", "S", "s", "Q", "q", "T", "t", "A", "a", "B", "b"];
	
	for(var i = 0; i < pathString.length; i++){
		if(controlChars.indexOf(pathString[i]) != 1){
			
		}
	}
}

function stringArrayToRegex(array){
	
}