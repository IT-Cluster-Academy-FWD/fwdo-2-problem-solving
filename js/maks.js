// const $input = document.getElementById('my-input');
// const $output = document.getElementById('my-output');
// console.log($output);

// $input.addEventListener('input', function() {
//   console.log();
//   $output.innerHTML = $input.value;
// })
const $form = document.getElementById('form');
const $firstNameInput = document.getElementById('fname-input');
const $lastName = document.getElementById('lname-input');
const $email = document.getElementById('email-input');
const $userInfo = document.getElementById('user-container');
const $button = document.getElementById('button');



// $button.addEventListener('click', function(event) {
//    event.preventDefault();
//    userValue();
//    disableinput();
// });
$button.addEventListener('submit', function(event) {
   event.preventDefault();
   userValue();
   disableinput();
});


function disableinput() {
   const $firstNameInput = document.getElementById('fname-input');
   const $lastName = document.getElementById('lname-input');
   const $email = document.getElementById('email-input');

   $firstNameInput.disabled = true;
   $lastName.disabled = true;
   $email.disabled = true;
}

function userValue(){
   $userInfo.innerHTML = $userInfo.innerHTML + '<p>' + $firstNameInput.value + '</p>' ;
   $userInfo.innerHTML = $userInfo.innerHTML + '<p>' + $lastName.value + '<p>';
   $userInfo.innerHTML = $userInfo.innerHTML + '<p>' + $email.value + '</p>';   
}
   