//console.log("hello world");

function openPopup(Text) {
  document.getElementById("popup-overlay").style.display = "flex";
  showText();
}

// Fonction pour fermer le popup
function closePopup() {
  document.getElementById("popup-overlay").style.display = "none";
  hideText(); // Appelle la fonction hideText()
}

function afficherTexteDynamique() {
  var texte = "Texte dynamique à afficher dans le popup.";
  var popup = document.getElementById("popup");
  var paragraphe = popup.querySelector("p"); // Sélectionne le paragraphe à l'intérieur du popup
  paragraphe.textContent = texte; // Modifie le contenu du paragraphe avec le texte dynamique
}
