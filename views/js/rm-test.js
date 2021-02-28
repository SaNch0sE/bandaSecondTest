/* eslint-disable */
const md = window.markdownit();
const input = document.querySelector('#source');
const result = document.querySelector('#result');

const text = input.value;
const output = md.render(text);
result.innerHTML = output;

input.addEventListener('input', function () {
  const text = document.querySelector('#source').value;
  const output = md.render(text); 
  result.innerHTML = output;
});

input.addEventListener('scroll', function () {
  const factor = input.scrollTop / (input.scrollHeight - input.offsetHeight);
  const scrollPosition = factor * (result.scrollHeight - result.offsetHeight);
  
  result.scrollTop = scrollPosition;
});
