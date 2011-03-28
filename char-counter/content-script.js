function addCounter(obj){
	var charBox = document.getElementById("charCounterbox");
	var charClass = charBox.classList;
	obj.addEventListener("focus", function() { 
										//console.log("focus for element: " + this.id); 
										charClass.add("vis"); 
										charBox.innerText = this.value.length; 
										}, false);
	obj.addEventListener("input", function() { 
										//console.log("Length of " + this.id + ": " + this.value.length); 
										charBox.innerText = this.value.length; 
										}, false);
	obj.addEventListener("blur", function() { 
										//console.log("blur for element: " + this.id); 
										charClass.remove("vis"); 
										charBox.innerText = this.value.length;  }, false);
	}

var counterDiv = document.createElement("div");
counterDiv.setAttribute("id", "charCounterbox");
document.body.appendChild(counterDiv);
	
var inputArray = document.querySelectorAll("input[type=text]");
var textareaArray = document.querySelectorAll("textarea");
for(var i=0; i< inputArray.length; i++) {
	addCounter(inputArray[i]);
	}
for(var i=0; i< textareaArray.length; i++) {
	addCounter(textareaArray[i]);
	}
