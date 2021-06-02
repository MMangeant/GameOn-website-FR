function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



//////MM//////


// DOM Elements rajoutés

const crossForm = document.querySelector("#closeForm");
const formSubmit = document.querySelector("#formUser");
const modalValidate = document.querySelector("#modalValidation");
const crossValid = document.querySelector("#closeValid");


// Elements champs formulaire

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const emailAdress = document.querySelector("#email");
const ageDate = document.querySelector("#birthdate");
const nbParticipations = document.querySelector("#quantity");
const city1 = document.querySelector("#location1");
const city2 = document.querySelector("#location2");
const city3 = document.querySelector("#location3");
const city4 = document.querySelector("#location4");
const city5 = document.querySelector("#location5");
const city6 = document.querySelector("#location6");
const cocheCGU = document.querySelector("#checkbox1");


// Elements messages d'erreur

const errorFirstName = document.querySelector("#error-firstName");
const errorLastName = document.querySelector("#error-lastName");
const errorMail = document.querySelector("#error-mail");
const errorAge = document.querySelector("#error-age");
const errorParticipations = document.querySelector("#error-participations");
const errorCity = document.querySelector("#error-city");
const errorCGU = document.querySelector("#error-CGU");

// Regexs

var nameRegex = /^[a-zA-Z]+$/;
var mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


// Close modal form

crossForm.addEventListener("click", function(){
  modalbg.style.display = "none";
});


// Vérification champ prénom

function checkFirstName () {
    if(!firstName.value.trim()){
        errorFirstName.innerHTML = "Veuillez renseigner un prénom";
        errorFirstName.style.display = "block";
        return false;
    }
    else if (nameRegex.test (firstName.value.trim()) == false){
        errorFirstName.innerHTML = "Le prénom renseigné n'est pas valide";
        errorFirstName.style.display = "block";
        return false;
    }
    else if(firstName.value.trim().length < 2){
        errorFirstName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
        errorFirstName.style.display = "block";
        return false;
    }
    else{
        errorFirstName.style.display = "none";
        return true;
    }
}


// Vérification champ nom de famille

function checkLastName () {
    
    if(!lastName.value.trim()){
        errorLastName.innerHTML = "Veuillez renseigner un nom de famille";
        errorLastName.style.display = "block";
        return false;
    }
    else if (nameRegex.test (lastName.value.trim()) == false){
      errorLastName.innerHTML = "Le nom renseigné n'est pas valide";
      errorLastName.style.display = "block";
      return false;
    }
    else if (lastName.value.trim().length < 2){
        errorLastName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom de famille";
        errorLastName.style.display = "block";
        return false;
    }
    else{
        errorLastName.style.display = "none";
        return true;
    }
}


// Vérification champ email

function checkMail () {
    if(!emailAdress.value.trim()){
        errorMail.innerHTML = "Veuillez renseigner une adresse mail";
        errorMail.style.display = "block";
        return false;
    }
    else if (mailRegex.test (emailAdress.value.trim()) == false){
        errorMail.innerHTML = "L'adresse mail n'est pas valide";
        errorMail.style.display = "block";
        return false;
    }
    else{
        errorMail.style.display = "none";
        return true;
    }
}


// Vérification champ âge

function checkAgeDate(){
    let dateUser = new Date(ageDate.value);
    let dateToday = new Date();
    if(!ageDate.value){ 
      errorAge.innerHTML = "Veuillez renseigner une date de naissance"; 
      errorAge.style.display = "block"; 
      return false; 
    } else if(dateUser > dateToday){ 
      errorAge.innerHTML = "La date de naissance n'est pas valide"; 
      errorAge.style.display = "block"; 
      return false; 
    } else{ 
      errorAge.style.display = "none";
      return true;
    }	
}


// Vérification champ participations

function checkParticipations () {
    if(!nbParticipations.value){
        errorParticipations.innerHTML = "Veuillez indiquer le nombre de participations";
        errorParticipations.style.display = "block";
        return false;
    }
    else{
        errorParticipations.style.display = "none";
        return true;
    }
}


// Vérification champ villes

function checkCity() {
    let cityArray = [city1,city2,city3,city4,city5,city6];
    if ((!cityArray[0].checked) &&
      (!cityArray[1].checked) &&
      (!cityArray[2].checked) &&
      (!cityArray[3].checked) &&
      (!cityArray[4].checked) &&
      (!cityArray[5].checked)
      ){
        errorCity.innerHTML = "Veuillez indiquer une ville";
        errorCity.style.display = "block";
        return false;
    }
    else{
      errorCity.style.display = "none";
      return true;
    }
}


// Vérification checkbox CGU

function checkCGU () {
    if(!cocheCGU.checked){
        errorCGU.innerHTML = "Vous devez accepter les termes et conditions";
        errorCGU.style.display = "block";
        return false;
    }
    else{
        errorCGU.style.display = "none";
        return true;
    }
}


// Empêcher l'effacement du formulaire par défaut et implémenter la fonction de validation

formSubmit.addEventListener ('submit', function (e) {
  e.preventDefault();
  validate();
});


// Ouvrir la modale du message de validation

function launchModalValidation() {
	modalValidate.style.display = "block";
}


// Validation du formulaire

function validate(){
	let checkFirstNameResult = checkFirstName(); 
	let checkLastNameResult = checkLastName(); 
	let checkEmailResult = checkMail(); 
	let checkAgeResult = checkAgeDate();
	let checkParticipationsResult = checkParticipations();
	let checkCityResult = checkCity();
	let checkCGUResult = checkCGU();

  if(
    checkFirstNameResult == true &&
    checkLastNameResult == true &&
    checkEmailResult == true &&
    checkAgeResult == true &&
    checkParticipationsResult == true &&
    checkCityResult == true &&
    checkCGUResult == true
    ){
    modalbg.style.display = "none"; 
		launchModalValidation(); 
		return true; 
  }
  
}


// Fermer la modale du message de validation

crossValid.addEventListener("click", function(c){
  modalValidate.style.display = "none";
});
