const $input = document.getElementById("my-input");
const $output = document.getElementById("my-output");
$input.addEventListener('input', function () {
  $output.innerText = $input.value
})
console.log(1);