const $form = document.getElementById('add-item-form');
const $nameInput = document.getElementById('item-name');
const $list = document.getElementById('todo-list');

$form.addEventListener('submit', function (event) {
  event.preventDefault();

  const $li = document.createElement('li');
  $li.setAttribute('class', 'todo-list-item');

  const $anchor = document.createElement('a');
  $anchor.setAttribute('class', 'todo-list-link');
  $anchor.innerText = $nameInput.value;

  $li.appendChild($anchor);
  $list.appendChild($li);

  $nameInput.value = '';
});

