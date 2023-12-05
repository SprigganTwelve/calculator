var input = document.getElementById('number');
input.value = "";


var buttonOne = document.getElementById('1');
//target.innerHTLM = elementHtml permet de recuperer un element html comme avec '.value'
buttonOne.addEventListener('click', function(){ 
    var One= "1";
    input.value = input.value + One; 
})


var buttonTwo = document.getElementById('2');
buttonTwo.addEventListener('click', function(){
    var Two = "2";
    input.value = input.value + Two ;
})

var buttonThree = document.getElementById("3")
buttonThree.addEventListener('click',function(){
        var Three = "3";
        input.value = input.value + Three;
});


var buttonFour = document.getElementById('4');
buttonFour.addEventListener('click',function(){
    var Four ="4";
    input.value = input.value + Four;
})

var buttonFive = document.getElementById('5')
buttonFive.addEventListener('click', function (){
    Five = "5";
    input.value = input.value + Five;
})

var buttonSix = document.getElementById('6');
buttonSix.addEventListener('click', function() {
    var Six = "6";
    input.value = input.value + Six;
})

var buttonSept = document.getElementById('7');
buttonSept.addEventListener('click', function(){
    var Sept = "7";
    input.value = input.value + Sept ;
})

var buttonZero = document.getElementById('0');
buttonZero.addEventListener('click', function() {
    var Zero = "0";
    input.value = input.value + Zero;
})
 
buttonHeight = document.getElementById('8');
buttonHeight.addEventListener('click', function(){
    var Height = "8";
    input.value = input.value +Height ;
})

var buttonNine = document.getElementById('9');
buttonNine.addEventListener('click', function() {
    var Nine = "9";
    input.value = input.value + Nine;
})

buttonAdd = document.getElementById('+');
buttonAdd.addEventListener('click', function () {
    var Add = "+";
    input.value = input.value + Add;
})

var buttonSubstraction = document.getElementById('-');
buttonSubstraction.addEventListener('click', function(){
    Substraction ='-';
    input.value = input.value + Substraction;
})

buttonEqual = document.getElementById('=')
buttonEqual.addEventListener('click', function (){
    input.value = eval(input.value)
})
