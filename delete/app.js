$(() => {
  console.log('js loaded');

  function getClassification(){
    console.log('function goes here');
    const integer = document.getElementById('input').value;
    console.log(integer);
    // returns 'perfect', 'abundant', or 'deficient'
    const aliquot = [];
    for(let i = 1; i <= integer/2; i ++){
      // console.log(i); goes through all even though max half
      if(integer % i === 0) aliquot.push(i);
    }

    const aliquotSum = aliquot.reduce((a, b) => a + b);

    console.log(integer, aliquot, aliquotSum);
    if (aliquotSum > integer) console.log('Abundant')
    else if (aliquotSum < integer) console.log('Deficient')
    else console.log('Perfect');
  }

  const input = document.getElementById('form');
  input.addEventListener('submit', getClassification);
});
