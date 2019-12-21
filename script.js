// creating my s

var char = '';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWZYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var num = '1234567890';
var sym = '!@#$%^&*()_+';


var lengthEl = document.getElementById("slider");
var upperBox = document.getElementById("upperC");
var lowerBox = document.getElementById("lowerC");
var numBox = document.getElementById("numbers");
var symBox = document.getElementById("symbols");
var btnGenerate = document.getElementById("generate");
var yourPass = document.getElementById("display");


btnGenerate.addEventListener("click",function(){
    var characters = char;
    (upperBox.checked) ? characters +=upper : '';
    (lowerBox.checked) ? characters +=lower : '';
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
    yourPass.value = password(slider.value, characters);
});

function password(l , characters){
    var pwd = '';

    for(var i = 0; i <= l; i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

//function to copy password to clipboard
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");
}
