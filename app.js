$(() => {
  console.log('js loaded');

  function submitted(){
    console.log('function goes here');
  }

  const input = document.getElementById('form');
  input.addEventListener('submit', submitted);
});
