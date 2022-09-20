(function (w) {
  let result = document.getElementById('result-el');
  result.textContent = 'Result: ';
  let num1 = prompt('Enter 1st number');
  let num2 = prompt('Enter 2nd number');

  function add() {
    result.textContent = 'Result: ';
    sum = parseInt(num1) + parseInt(num2);
    result.textContent += sum;
  }
  function sub() {
    result.textContent = 'Result: ';
    result.textContent += num1 - num2;
  }
  function mul() {
    result.textContent = 'Result: ';
    result.textContent += num1 * num2;
  }
  function div() {
    result.textContent = 'Result: ';
    result.textContent += num1 / num2;
  }

  w.add = add;
  w.sub = sub;
  w.mul = mul;
  w.div = div;
})(window);

/* exposing the function to the global namespace
  so onclick attribute of an HTML element can access
  and trigger it. */
