/*const $input = document.getElementById('my-input');
const $output = document.getElementById('my-output');

$input.addEventListener('input', function() {
  //console.log($input.value);
  $output.innerHTML=$input.value;

})*/
const $form = document.getElementById('info');
const $firstname = document.getElementById('fname');
const $lastname = document.getElementById('lname');
const $emailaddress = document.getElementById('email');
const $list = document.getElementById('result');



$form.addEventListener('submit', function(event){
    event.preventDefault();
    $firstname.disabled = true;
    $lastname.disabled = true;
    $emailaddress.disabled = true;

    var li_el = document.createElement('li');
    li_el.innerText = $firstname.value;
    $list.appendChild(li_el);
        
    var li_el = document.createElement('li');
    li_el.innerText = $lastname.value;
    $list.appendChild(li_el);
            
    var li_el = document.createElement('li');
    li_el.innerText = $emailaddress.value;
    $list.appendChild(li_el);
});
