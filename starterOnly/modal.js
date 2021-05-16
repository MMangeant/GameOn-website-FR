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

// DOM Elements rajoutés
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const emailAdress = document.getElementById("email");
const ageDate = document.getElementById("birthdate");
const nbParticipations = document.getElementById("quantity");
const ville1 = document.getElementById("location1");
const ville2 = document.getElementById("location2");
const ville3 = document.getElementById("location3");
const ville4 = document.getElementById("location4");
const ville5 = document.getElementById("location5");
const ville6 = document.getElementById("location6");
const cocheCGU = document.getElementById("checkbox1");

const formSubmit = document.getElementById ("formUser");

// DOM Elements ERRORS
const errorFirstName = document.getElementById("error-firstName");
const errorLastName = document.getElementById("error-lastName");
const errorMail = document.getElementById("error-mail");
const errorAge = document.getElementById("error-age");
const errorParticipations = document.getElementById("error-participations");
const errorVilles = document.getElementById("error-villes");
const errorCGU = document.getElementById("error-CGU");

const errorValidation = document.getElementById ("error-validation");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal form
const cross = document.querySelector(".close");
cross.addEventListener("click", function(c){
  modalbg.style.display = "none";
});



// vérification champ prénom
firstName.addEventListener ('change', function () {
  checkFirstName ();
});
function checkFirstName () {
    if(!firstName.value){
        errorFirstName.textContent = "Veuillez renseigner un prénom";
        errorFirstName.style.display = "block";
        console.log ('erreur1-firstName');
        return false;
    }
    else if(firstName.value.length < 2){
        errorFirstName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
        errorFirstName.style.display = "block";
        console.log ('erreur2-firstName');
        return false;
    }
    else{
        errorFirstName.textContent = " ";
        errorFirstName.style.display = "none";
        return true;
    }
}


// vérification champ nom de famille
lastName.addEventListener ('change', function () {
  checkLastName ();
});
function checkLastName () {
    if(!lastName.value){
        errorLastName.textContent = "Veuillez renseigner un nom de famille";
        errorLastName.style.display = "block";
        return false;
    }
    else if (lastName.value.length < 2){
        errorLastName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom de famille";
        errorLastName.style.display = "block";
        return false;
    }
    else{
        errorLastName.style.display = "none";
        return true;
    }
}


// vérification champ email
emailAdress.addEventListener ('change', function () {
  checkMail ();
});

var mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function checkMail () {
    if(!emailAdress.value){
        errorMail.textContent = "Veuillez renseigner une adresse mail";
        errorMail.style.display = "block";
        return false;
    }
    else if (mailRegex.test (emailAdress.value) == false){
        errorMail.textContent = "L'adresse mail n'est pas valide";
        errorMail.style.display = "block";
        return false;
    }
    else{
        errorMail.style.display = "none";
        return true;
    }
}

// vérification champ age
ageDate.addEventListener ('change', function () {
  checkAgeDate ();
});

var date1 = ageDate.value;
var dateUser = new Date(date1);
var dateToday = new Date();

function checkAgeDate () {
    if(!ageDate.value){
        errorAge.textContent = "Veuillez renseigner une date de naissance";
        errorAge.style.display = "block";
        return false;
    }
    else if (dateUser >= dateToday){
        errorAge.textContent = "Veuillez rentrer une date de naissance valide";
        errorAge.style.display = "block";
        return false;
    }
    else{
        errorAge.style.display = "none";
        return true;
    }
}



// vérification champ participations
nbParticipations.addEventListener ('change', function () {
  checkParticipations ();
});

function checkParticipations () {
    if(!nbParticipations.value){
        errorParticipations.textContent = "Veuillez indiquer le nombre de participations";
        errorParticipations.style.display = "block";
        return false;
    }
    else if (nbParticipations > 99){
        errorParticipations.textContent = "Le nombre est trop élevé";
        errorMail.style.display = "block";
        return false;
    }
    else{
        errorParticipations.style.display = "none";
        return true;
    }
}


// vérification champ villes
var villeArray = [ville1,ville2,ville3,ville4,ville5,ville6];

function checkCities () {
  if ((villeArray[0].checked) ||
     (villeArray[1].checked) ||
     (villeArray[2].checked) ||
     (villeArray[3].checked) ||
     (villeArray[4].checked) ||
     (villeArray[5].checked)){
        
        return true;
  }
  else{
    errorVilles.textContent = "Veuillez indiquer une ville";
    errorVilles.style.display = "block";

  }
}

// vérification checkbox CGU
cocheCGU.addEventListener ('change', function () {
  checkCGU ();
});

function checkCGU () {
  if(!cocheCGU.checked){
      errorCGU.textContent = "Vous devez accepter les termes et conditions";
      errorCGU.style.display = "block";
      return false;
  }
  else{
      errorCGU.style.display = "none";
      return true;
  }
}


// empêche l'effacement du formulaire par défaut et implémente la fonction de validation
formSubmit.addEventListener ('submit', function (e) {
  e.preventDefault ();
  validationForm ();
});

//fonction de validation du formulaire

/* function validationForm (){
  if(
    checkFirstName == false ||
    checkLastName == false ||
    checkMail == false ||
    checkAgeDate == false ||
    checkParticipations == false ||
    //checkCities == false ||
    //checkCGU == false ||
    )
    {
      errorValidation.textContent = "Veuillez renseigner tous les champs";
      errorValidation.style.display = "block";
  }
}  */