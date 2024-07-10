const number1 = document.getElementById('input1');

const number2 = document.getElementById('input2');

const calcResult = document.getElementById("calcResult");

function plusFn(){

  const v1 = Number(number1.value); 
  const v2 = Number(number2.value);

  console.log("두 수의 합 : ", v1 + v2);

  calcResult.innerHTML = v1 + v2;
}

function minusFn(){

  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  console.log("두 수의 차 : ",  v1 - v2 );

  calcResult.innerHTML = v1 - v2;
}