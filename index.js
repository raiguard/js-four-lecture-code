const name = "Matt";
// console.log(name);

const paragraph = document.getElementById("some-text");
// console.log(paragraph);
// console.log(paragraph.innerText);
paragraph.innerText = "I am new text given by JS.";
paragraph.className = "some-class";

paragraph.classList.add("new-class");
// console.log(paragraph.className);

paragraph.classList.remove("new-class");
// console.log(paragraph.className);

paragraph.classList.toggle("new-class");
// console.log(paragraph.className);

const unorderedList = document.getElementById("unordered-list");
// console.log(unorderedList.innerHTML);
unorderedList.innerHTML = `<li>I'm a new item</li>`;

const listItems = document.getElementsByTagName("li");
// console.log(listItems);

const heading = document.querySelector("h3");
// console.log(heading);

const classItems = document.querySelectorAll(".ordered-item");
// console.log(classItems);

const someInput = document.getElementById("some-input");
// console.log(someInput.value);

let inputValue = "";
const userInputDisplay = document.getElementById("user-input");
someInput.addEventListener("keypress", function (event) {
  inputValue = event.target.value;
  userInputDisplay.innerText = inputValue;
});

function clickMe() {
  console.log("I've been clicked!");
}

document.querySelector("#child").addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Child button has been clicked...");
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Blocked default event!");
});

// putting it all together

const taskList = document.querySelector("#task-list");
const taskInput = document.querySelector("#task-input");
const taskConfirmButton = document.querySelector("#task-confirm-button");

function removeTodoItem(event) {
  event.srcElement.remove();
}

taskConfirmButton.addEventListener("click", function (event) {
  const newItem = document.createElement("li");
  newItem.innerText = taskInput.value;

  newItem.addEventListener("click", removeTodoItem);

  taskList.appendChild(newItem);
  taskInput.value = "";
});
