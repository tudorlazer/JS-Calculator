var digit0 =document.querySelector('#digit0');
var digit1 =document.querySelector('#digit1');
var digit2 =document.querySelector('#digit2');
var digit3 =document.querySelector('#digit3');
var digit4 =document.querySelector('#digit4');
var digit5 =document.querySelector('#digit5');
var digit6 =document.querySelector('#digit6');
var digit7 =document.querySelector('#digit7');
var digit8 =document.querySelector('#digit8');
var digit9 =document.querySelector('#digit9');
var multiply =document.querySelector('#multiply');
var minus =document.querySelector('#minus');
var plus =document.querySelector('#plus');
var equal =document.querySelector('#equal');
var result =document.querySelector('.result');
var erase = document.querySelector('#erase');
var divide = document.querySelector('#divide');



var firstNumber = '';
var secondNumber = '';
var startBuilingSecondNumber = false;
var operation = '';
var operations = 0;

function buildNumber(digit){
  if(startBuilingSecondNumber === false)
  {firstNumber = firstNumber + digit;
  result.innerHTML = firstNumber;}
  else
  {secondNumber = secondNumber + digit;
  result.innerHTML = secondNumber;}
}



digit0.addEventListener('click',function(){
  buildNumber(0);
});
digit1.addEventListener('click',function(){
  buildNumber(1);
});
digit2.addEventListener('click',function(){
  buildNumber(2);
});
digit3.addEventListener('click',function(){
  buildNumber(3);
});
digit4.addEventListener('click',function(){
  buildNumber(4);
});
digit5.addEventListener('click',function(){
  buildNumber(5);
});
digit6.addEventListener('click',function(){
  buildNumber(6);
});
digit7.addEventListener('click',function(){
  buildNumber(7);
});
digit8.addEventListener('click',function(){
  buildNumber(8);
});
digit9.addEventListener('click',function(){
  buildNumber(9);
});

divide.addEventListener('click',function(){
  startBuilingSecondNumber = true;
  operation = 'divide';
  result.innerHTML = '÷';
});
multiply.addEventListener('click',function(){
  startBuilingSecondNumber = true;
  operation = 'multiply';
  result.innerHTML = '×';
});
minus.addEventListener('click',function(){
  startBuilingSecondNumber = true;
  operation = 'minus';
  result.innerHTML = '-';
});
plus.addEventListener('click',function(){
  startBuilingSecondNumber = true;
  operation = 'plus';
  result.innerHTML = '+';
  
  
});

erase.addEventListener('click', function(){
  firstNumber = '';
  secondNumber = '';
  result.innerHTML = '';
  startBuilingSecondNumber =  false;
})



equal.addEventListener('click', function(){
  if (operation === 'plus')
    {var operationResult = Number(firstNumber) + Number(secondNumber);
      firstNumber = operationResult;
    result.innerHTML = firstNumber;

    
    secondNumber = '';
    startBuildingSecondNumber = false;}
});

equal.addEventListener('click', function(){
  if (operation === 'minus')
    {var operationResult = Number(firstNumber) - Number(secondNumber);
      firstNumber = operationResult;
    result.innerHTML = firstNumber;

    
    secondNumber = '';
    startBuildingSecondNumber = false;}
});

equal.addEventListener('click', function(){
  if (operation === 'multiply')
    {var operationResult = Number(firstNumber) * Number(secondNumber);
      firstNumber = operationResult;
    result.innerHTML = firstNumber;

    
    secondNumber = '';
    startBuildingSecondNumber = false;}
});

equal.addEventListener('click', function(){
  if (operation === 'divide')
    {var operationResult = Number(firstNumber) / Number(secondNumber);
      firstNumber = operationResult;
    result.innerHTML = firstNumber;

    
    secondNumber = '';
    startBuildingSecondNumber = false;}
});

