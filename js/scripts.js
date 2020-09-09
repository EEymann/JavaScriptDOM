// 1: Set the text of the <h1> element
const title = document.querySelector('h1');
title.textContent = "Things I like to do:";

// 2: Set the color of the <h1> to a different color
title.style.color = 'aqua';

// 3: Set the content of the '.desc' paragraph
//The content should include at least one HTML tag. Remember the innerHTML property lets you read and replace any content between an element's opening and closing tag, including HTML syntax.
const desc = document.querySelector('.desc');
desc.innerHTML = "Some <em>fun</em> things I want to do today.";

// 4: Set the class of the <ul> to 'list'
const list = document.querySelector('ul');
list.className = 'list';

// 5: Create a new list item and add it to the <ul>
const item = document.createElement('li');
item.innerHTML = "<input> Eat ice cream";
list.appendChild(item); // List is the parent element of the list items, which I selected above

// 6: Change all <input> elements from text fields to checkboxes
const input = document.getElementsByTagName('input'); //querySelectorAll works too
for (i = 0; i < input.length; i++) {
  input[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';

// Add the <button> inside the '.extra' <div>
const extra = document.querySelector('.extra');
extra.appendChild(deleteButton);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const container = document.querySelector('.container');
deleteButton.addEventListener('click', () => {
  container.removeChild(extra); //remove child 'extra' from parent 'container'
});
