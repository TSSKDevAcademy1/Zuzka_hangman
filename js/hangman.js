'use strict'
//global variables
var secret='javascript'.toUpperCase();
var lettersGuessed='';
var state=1;

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
	// uz  nepotrebujeme console.log("fhgdf");
	btn.setAttribute("disabled", "disabled"); //deaktivuje tlacidlo

	//update letters Guessed
	lettersGuessed+=btn.textContent; //lettersGuessed=lettersGuessed + btn.textContent

	//update secret
	var returned=getGuessedWord(secret, lettersGuessed);
	var address=document.getElementById("secret");
	address.textContent=returned;
	//update pictures
	if(secret.indexOf(btn.textContent)<0)
		{
			state++;
			var picture=document.getElementById("picture");
			picture.setAttribute("src", "images/phase" + state + ".png");
		}
	if (returned==secret) {
		alert('Vyhral/a si.');
		for (var btn of document.getElementById("alphabet").childNodes) {
			btn.setAttribute("disabled", "disabled");
				
			}	
	}

	if (state==5) {
		alert('Prehral/a si.');
		for (var btn of document.getElementById("alphabet").childNodes) {
			btn.setAttribute("disabled", "disabled");
				
			}	
	}

}


function restart(){
	state=1;
	picture.setAttribute("src", "images/phase" + state + ".png");
	lettersGuessed="";
	for (var btn of document.getElementById("alphabet").childNodes) {
			btn.removeAttribute("disabled");
		}	
var address=document.getElementById("secret");
var returned=getGuessedWord(secret, lettersGuessed);
address.textContent=returned;
}

var t = document.getElementById("alphabet");
var address=document.getElementById("secret");
var returned=getGuessedWord(secret, lettersGuessed);
address.textContent=returned;

for (var i=65; i<91; i++) {
		var el=document.createElement("button");
		el.setAttribute("type","button");  //nastavi pre dany elemnt atribut atribut type, hodnotou button
		el.textContent=String.fromCharCode(i);
		el.addEventListener("click", onClick); //ak tlacidlo bolo stlacene ma ist na fciu onClick

	t.appendChild(el); //zobrazi tlacidlo do t s ID alphabet
	}
var reset=document.getElementById("restart");

reset.addEventListener("click", restart);