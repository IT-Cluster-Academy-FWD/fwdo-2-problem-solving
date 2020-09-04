const LIST_ITEM_CLASS = 'todo-list-item';
const LIST_ITEM_LINK_CLASS = 'todo-list-link';
const LIST_ITEM_BUTTON_CLASS = 'w3-button w3-red';

const $form = document.querySelector('#add-item-form');
const $nameInput = document.querySelector('#item-name');
const $list = document.querySelector('#todo-list');
const $clear = document.querySelector('#clear-all');


function checkDisabled() {
  $clear.disabled = document.getElementsByClassName(LIST_ITEM_CLASS).length <= 0;
}

$form.addEventListener('submit', function (event) {
  event.preventDefault();

  const $li = document.createElement('li');
  $li.setAttribute('class', LIST_ITEM_CLASS);

  const $anchor = document.createElement('a');
  $anchor.setAttribute('class', LIST_ITEM_LINK_CLASS);
  $anchor.innerText = $nameInput.value;

  const $button = document.createElement('button');
  $button.setAttribute('class', LIST_ITEM_BUTTON_CLASS);
  $button.innerText = 'Del';


  $button.addEventListener('click', function () {
    $li.remove();
    checkDisabled();
  });

  $li.appendChild($anchor);
  $li.appendChild($button);
  $list.appendChild($li);
  checkDisabled();

  $nameInput.value = '';
});


$clear.addEventListener("click", function () {
  const $listItems = document.querySelectorAll('.' + LIST_ITEM_CLASS);

  for (let i = $listItems.length - 1; i >= 0; i--) {
    $listItems[i].remove();
  }

  checkDisabled();
});
