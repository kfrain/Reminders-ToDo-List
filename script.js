var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var clearButton = document.getElementById("clear");

function inputLength() {
	return input.value.length;
}

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

document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('click', markItem);
  });

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

function markItem(event) {
    event.target.parentNode.classList.toggle("done");
}


function clearTasks() {
    while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
    }
}

button.addEventListener("click", addListAfterClick);

clearButton.addEventListener("click", clearTasks);

input.addEventListener("keypress", addListAfterKeypress);
