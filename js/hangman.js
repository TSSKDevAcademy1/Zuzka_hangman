'use strict'
//global variables
var secret='javascript'.toUpperCase();
var lettersGuessed='';

//getGuessedWord() declaration
function getGuessedWord(secret, lettersGuessed)
{
  var result='';
  for(var c of secret)
    {
      if(lettersGuessed.indexOf(c)>=0)
        {
          result+=c;
        }
      else
        result+='_';
    }
  return result;
}


function onClick(event){
	var btn = event.target;
	console.log("fhgdf");
	btn.setAttribute("disabled", "disabled");

	//update lettes Guessed
	lettersGuessed==el.textContent;

	//update secret

}

var t = document.getElementById("alphabet");

for (var i=65; i<91; i++) {
	var el=document.createElement("button");
	el.setAttribute("type","button");  //nastavi pre dany elemnt atribut atribut type, hodnotou button
	el.textContent=String.fromCharCode(i);
	el.addEventListener("click", onClick);

	t.appendChild(el);

}