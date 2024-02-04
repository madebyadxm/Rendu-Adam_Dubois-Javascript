const themeButton = document.getElementById("theme");

function onClick() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", onClick);

document.getElementById("formulaire").addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const prenom = document.getElementById("prenom");
  const nom = document.getElementById("nom");
  const email = document.getElementById("email");

  const prenomError = document.getElementById("prenom-error");
  const nomError = document.getElementById("nom-error");
  const emailError = document.getElementById("email-error");

  const prenomValue = prenom.value;
  const nomValue = nom.value;
  const emailValue = email.value;

  if (prenomValue === "") {
    prenom.classList.add("error");
    prenom.classList.remove("success");
    prenomError.style.display = "block";
  } else {
    prenom.classList.remove("error");
    prenom.classList.add("success");
    prenomError.style.display = "none";
  }

  if (nomValue === "") {
    nom.classList.add("error");
    nom.classList.remove("success");
    nomError.style.display = "block";
  } else {
    nom.classList.remove("error");
    nom.classList.add("success");
    nomError.style.display = "none";
  }

  if (emailValue === "") {
    email.classList.add("error");
    email.classList.remove("success");
    emailError.style.display = "block";
  } else {
    email.classList.remove("error");
    email.classList.add("success");
    emailError.style.display = "none";
  }
}

let successContainer = document.querySelector(".message-success");
successContainer.classList.remove("visible");

