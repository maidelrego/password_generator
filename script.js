var char = 'ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz';
var num = '1234567890';
var sym = '!@#$%^&*()_+';

var lengthEl = document.getElementById("slider");
var numBox = document.getElementById("numbers");
var symBox = document.getElementById("symbols");
var btnGenerate = document.getElementById("generate");
var yourPass = document.getElementById("display");

btnGenerate.addEventListener("click",function(e){
    var characters = char;
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
