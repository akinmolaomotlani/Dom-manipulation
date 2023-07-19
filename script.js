/**********************  SEARCHING  ITEMS************ */
const SEARCH = document.forms['search-item'].querySelector('input');

SEARCH.addEventListener('keyup', (e) => {
  // lets grab the users text and convert it to lower case, by using javascripts toLowerCase() method

  let texts = e.target.value.toLowerCase();

  //lets grab each li tag

  let groceryLists = document.querySelector('#grocery-list ul');

  let groceriesItems = document.getElementsByTagName('li');
  // lets convert the groceries to an array, so we can access the for each method

  let ItemsArray = Array.from(groceriesItems);
  // loop through  each grocery item

  ItemsArray.forEach((grocery) => {
    let groceryName = grocery.firstElementChild.textContent;
    //  convert all our text into lower case
    let groceryNameLower = groceryName.toLowerCase();
    //NOW WE USE INDEXOF to see if our text can be found within our grocery name. if nothing is found, a vakue 0f -1 is returned and we can hide the items

    if (groceryNameLower.indexOf(texts) == -1) {
      grocery.style.display = 'none';
    } else {
      grocery.style.display = 'block ';
    }
  });
});
/**********************HIDEITEMS************ */
let checkBox = document.getElementById('hide');

checkBox.addEventListener('change', (e) => {
  let groceryList = document.getElementById('grocery-list');
  let target = e.target;
  if (checkBox.checked) {
    groceryList.style.display = 'none';
  } else {
    groceryList.style.display = 'block';
  }
});
/**********************ADDING ITEMS************ */
let valuesAdded = document.getElementById('value');
let formAdd = document.getElementById('add-item');
formAdd.addEventListener('submit', addItems);
function addItems(e) {
  let ul = document.getElementsByTagName('ul')[0];
  // lets prevent the page from loading

  e.preventDefault();

  //   lets grab users text
  let usersText = formAdd.querySelector('input').value;

  //to clear the seaerch input

  formAdd.querySelector('input').value = '';

  //   creating the dom element

  let liElement = document.createElement('li');
  let groceryItems = document.createElement('span');
  groceryItems.className = 'item';
  let deleteBtn = document.createElement('span');
  deleteBtn.classList.add('delete');
  deleteBtn.textContent = 'delete';

  liElement.appendChild(groceryItems);
  liElement.appendChild(deleteBtn);

  ul.appendChild(liElement);

  // attaching the elements to parent elements
  let groceryList = document.getElementById('grocery-list');
  groceryList.appendChild(ul);

  groceryItems.textContent = usersText;
}

/**********************DELETING  ITEMS************ */
let groceryListUL = document.querySelector('#grocery-list ul');
groceryListUL.addEventListener('click', remove);
function remove(e) {
  let target = e.target;
  if (target.className == 'delete') {
    let LI = target.parentElement;
    LI.remove();
  }
}

/**********************ADDING TABS ************ */
//  lets grab out heading
let tabWrapper = document.querySelector('.heading');
//  lets grap our panels
let panels = document.querySelectorAll('.panel');
// lets define the selected panel
let selectedPanel = null;

// takig advantage of the event

tabWrapper.addEventListener('click', (e) => {
  // lets find out which <li> tag that was triggered
  let target = e.target;

  //lets use our dataset to get our data value ...weve called ours 'clicked' but you can call it whatever you like

  let dataAttribute = e.target.dataset.clicked;

  if (target.tagName == 'LI') {
    //lets remove selected element
    if (selectedPanel != null) {
      selectedPanel.classList.toggle('selected');
    }
    selectedPanel = target;
    selectedPanel.classList.toggle('selected');

    // findinf the traget panel we want to diplay

    let targetPanel = document.querySelector(dataAttribute);

    // new we need to determine the panel that is currently selected  is the one displayed. we can use the forEeach function becuse querySelectorAll returns a Nodelist

    panels.forEach((panel) => {
      if (panel == targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
});

// lets deal with our button to display our Answer

let answerButton = document.getElementById('btn');

answerButton.addEventListener('click', answer);

function answer() {
  document.getElementById('answer').classList.add('show');
  document.getElementById('answer').textContent = 'AN IMPASTA';
  answerButton.style.display = 'none';
}
