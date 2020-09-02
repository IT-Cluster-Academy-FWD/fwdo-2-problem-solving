const $input = document.getElementById('my-input');
const $output = document.getElementById('my-output');
console.log($output);

$input.addEventListener('input', function() {
  console.log();
  $output.innerHTML = $input.value;
});