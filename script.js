var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var clearButton = document.getElementById("clear");

function inputLength() {
	return input.value.length;
}

//want button in front of each list item, additionally the id changes 
//with the items being added so that they can be crossed out individually
function createListElement() {
	var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "toggleButton" + (ul.children.length + 1);
    
    li.appendChild(checkbox);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

    document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
        checkbox.addEventListener('click', markItem);
      });
}
//this is for the static parts already on page (not included in create list item)
document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('click', markItem);
  });

//this and the keypress allow the buttons to add items
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.code === "Enter") {
	createListElement();
    }
}
//this applies the strikethrough and greying out the "completed" items
//when they are checked off
function markItem(event) {
    event.target.parentNode.classList.toggle("done");
}

//We dont want each task to disappear when it's checked off, but also 
//want to be able to clear list to add more items, this will clear all items
//the while function will remove each firstchild while until there aren't any more
//this effectively clears the list
function clearTasks() {
    while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
    }
}
//listeners waiting until there is user action with certain elements in
//order to execute related functions
button.addEventListener("click", addListAfterClick);

clearButton.addEventListener("click", clearTasks);

input.addEventListener("keypress", addListAfterKeypress);
