var anchorArray = document.querySelectorAll("a[href]");
var tempAnchor
for (var i = 0; i < anchorArray.length; i++) {
    tempAnchor = anchorArray[i];
    tempAnchor.addEventListener("mouseover", function() { 
										console.log("Mouseover event for element: " + this.id); 
										 
										}, false);
    tempAnchor.addEventListener("mouseout", function() { 
    									console.log("Mouseout event for element: " + this.id); 
										
										}, false);
